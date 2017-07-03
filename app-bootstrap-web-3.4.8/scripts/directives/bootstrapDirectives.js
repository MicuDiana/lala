var bootstrapDirectives = angular.module('bootstrapDirectives', []);
bootstrapDirectives
    .directive('includeStatic', function ($http, $templateCache, $compile) {
        return {
            restrict: 'A',
            transclude: true,
            replace: true,
            scope: false,
            link: function ($scope, element, attrs, ctrl, transclude) {
                var templatePath = attrs.includeStatic;


                $http.get(templatePath, {cache: $templateCache})
                    .then(
                        function successCallback(response) {
                            var contents = element.html(response.data).contents();
                            $compile(contents)($scope);
                        },
                        function errorCallback(response) {
                            console.error("Unable to load template " + response.config.url + ". " + response.statusText);
                        });
            }
        };
    })
    .directive('pageableList', function ($http, $templateCache, $compile) {
        return {
            restrict: 'E',
            templateUrl: 'views/directives/pageableList.tpl.html',
            transclude: true,
            replace: true,
            scope: {
                meta: '=',
                loadItems: '=',
                formatItem: '=',
                onSelect: '='
            },
            controller: function ($scope) {

                $scope.selectItem = function (item) {
                    $scope.selectedItem = item;
                    $scope.onSelect(item);

                };
                $scope.isSelected = function (item) {
                    return $scope.selectedItem && item.id === $scope.selectedItem.id;
                };

                $scope.onPageSelect = function (page, $event) {
                    if ($event && $event.keyCode == 13)
                        try {
                            getPage(page);
                        } catch (e) {
                            $scope.meta.selected = $scope.meta.page;
                        }
                };

                $scope.changePage = function (delta) {
                    try {
                        getPage($scope.meta.page + delta);
                    } catch (e) {
                    }
                };

                $scope.onPageSelectBlur = function () {
                    $scope.meta.selected = $scope.meta.page;
                };

                $scope.resetPage = function () {
                    getPage(1);
                };

                var init = function () {
                    getPage(1);
                };

                var getPage = function (page) {
                    if (page < 1)
                        throw new Error();
                    if ($scope.meta.total && page > $scope.meta.total)
                        throw new Error();
                    if (!page)
                        page = $scope.meta.page || 1;

                    var loadOptions = {
                        page: page - 1,
                        size: $scope.meta.size,
                        callBack: function (items, pageCount) {
                            $scope.items = items;
                            $scope.meta.page = page;
                            $scope.meta.selected = $scope.meta.page;
                            $scope.meta.total = pageCount;
                            if (!_.isEmpty($scope.items)) {
                                $scope.selectItem($scope.items[0]);
                            }
                        }
                    };

                    $scope.loadItems(loadOptions);
                };

                init();
            },
            link: function ($scope, element, attrs, ctrl, transclude) {
            }
        };
    });
platformscServices.factory('platformscMainService', ['$resource', function ($resource) {
    return $resource('app/rest/main', {}, {
    });
}]);
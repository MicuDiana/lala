'use strict';

/* App Module */
function changeTheme(theme) {
    angular.element('.theme-stylesheet').attr("href", "/bower_components/app-theme/dist/themes/" + theme + ".css");
    window.localStorage.setItem('theme', theme);
}

var bootstrapApp = angular.module('bootstrapApp', [ 'tmh.dynamicLocale',
    'ngResource', 'ngRoute', 'ngCookies', 'bootstrapAppUtils', 'pascalprecht.translate', 'truncate', 'ngCacheBuster',
    'bootstrapControllers', 'bootstrapServices', 'bootstrapDirectives', 'bootstrapConstants', 'bootstrapFilters',
    'angular-component.app-grid', 'angular-components.app-menu', 'angular-components.app-menu-admin', 'angular-component.app-tabs', 'ui.tree',
    'ngDragDrop', 'ui.select', 'ngSanitize', 'ui-notification', 'angular-ui-confirm', 'ui.bootstrap.datetimepicker',
    'ui.bootstrap.datepicker', 'angular-component.app-file-uploader']);

angular.element(document).ready(function () {
    angularCustomLoader.loadApp(bootstrapApp);
});

bootstrapApp
    .config(function ($routeProvider, $httpProvider, $translateProvider, $translatePartialLoaderProvider, tmhDynamicLocaleProvider, httpRequestInterceptorCacheBusterProvider, AUTH_BOOTSTRAP, NotificationProvider) {

        //Cache everything except rest api requests
        httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*rest.*/], true);

        $routeProvider

            .when('/error', {
                templateUrl: 'views/error.html',
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.all]
                }
            })
            .when('/settings', {
                templateUrl: 'views/settings.html',
                controller: 'SettingsController',
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.settings]
                }
            })

            .when('/test', {
                templateUrl: 'views/test.html',
                controller: 'TestController',
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.all]
                }
            })

            .when('/metrics', {
                templateUrl: 'views/metrics.html',
                controller: 'MetricsController',
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.metrics]
                }
            })
            .when('/health', {
                templateUrl: 'views/health.html',
                controller: 'HealthController',
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.health]
                }
            })
            .when('/configuration', {
                templateUrl: 'views/configuration.html',
                controller: 'ConfigurationController',
                resolve: {
                    resolvedConfiguration: ['ConfigurationService', function (ConfigurationService) {
                        return ConfigurationService.get();
                    }]
                },
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.configuration]
                }
            })
            .when('/logs', {
                templateUrl: 'views/logs.html',
                controller: 'LogsController',
                resolve: {
                    resolvedLogs: ['LogsService', function (LogsService) {
                        return LogsService.findAll();
                    }]
                },
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.logs]
                }
            })

            .when('/docs', {
                templateUrl: 'views/docs.html',
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.docs]
                }
            })
            .when('/menus', {
                templateUrl: 'views/menus.html',
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.menus]
                }
            })
            .when('/ajax/:templateName', {
                templateUrl: function (params) {
                    return 'ajax/' + params.templateName;
                },
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.ajax]
                }
            })
            .when('/messages', {
                templateUrl: 'views/messages.html',
                controller: 'MessagesController',
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.messages]
                }
            })
            .otherwise({
                templateUrl: 'views/main.html',
                controller: 'MainController',
                access: {
                    authorizedModules: [AUTH_BOOTSTRAP.all]
                }
            });

        // Initialize angular-translate
        $translatePartialLoaderProvider.addPart('i18n/');
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}{lang}.json'
        });

        $translateProvider.preferredLanguage('en');

        $translateProvider.useCookieStorage();
        $translateProvider.useSanitizeValueStrategy('sanitize');

        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');

        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        });
    })
    .run(['$rootScope', '$location', '$window', '$http',  'AUTH_BOOTSTRAP',
        function ($rootScope, $location, $window, $http,  AUTH_BOOTSTRAP) {
            if ($rootScope.dateOptions === undefined) {
                $rootScope.dateOptions = {
                    format: 'dd/MM/yyyy',
                    dateTimeFormat: 'dd/MM/yyyy HH:mm',
                    formatYear: 'yy',
                    startingDay: 1
                };
            }



            if ($rootScope.displayTopNavbar === undefined) {
                $rootScope.displayTopNavbar = true;
            }

            if ($rootScope.displayLeftSidebar === undefined) {
                $rootScope.displayLeftSidebar = true;
            }

            if ($rootScope.showSearch === undefined) {
                $rootScope.showSearch = false;
            }
            if ($rootScope.showThemes === undefined) {
                $rootScope.showThemes = false;
            }
            if ($rootScope.showImports === undefined) {
                $rootScope.showImports = false;
            }







        }])
    .run(['$rootScope', '$route', function ($rootScope, $route) {
        // This uses the Atmoshpere framework to do a Websocket connection with the server, in order to send
        // user activities each time a route changes.
        // The user activities can then be monitored by an administrator, see the views/tracker.html Angular view.

        $rootScope.websocketSocket = atmosphere;
        $rootScope.websocketSubSocket;
        $rootScope.websocketTransport = 'websocket';

        $rootScope.websocketRequest = {
            url: 'websocket/activity',
            contentType: "application/json",
            transport: $rootScope.websocketTransport,
            trackMessageLength: true,
            reconnectInterval: 5000,
            enableXDR: true,
            timeout: 60000
        };

        $rootScope.websocketRequest.onOpen = function (response) {
            $rootScope.websocketTransport = response.transport;
            $rootScope.websocketRequest.sendMessage();
        };

        $rootScope.websocketRequest.onClientTimeout = function (r) {
            $rootScope.websocketRequest.sendMessage();
            setTimeout(function () {
                $rootScope.websocketSubSocket = $rootScope.websocketSocket.subscribe($rootScope.websocketRequest);
            }, $rootScope.websocketRequest.reconnectInterval);
        };

        $rootScope.websocketRequest.onClose = function (response) {
            if ($rootScope.websocketSubSocket) {
                $rootScope.websocketRequest.sendMessage();
            }
        };

        $rootScope.websocketRequest.sendMessage = function () {
            if ($rootScope.websocketSubSocket.request.isOpen) {
                if ($rootScope.account != null) {
                    $rootScope.websocketSubSocket.push(atmosphere.util.stringifyJSON({
                            userLogin: $rootScope.account.login,
                            page: $route.current.templateUrl
                        })
                    );
                }
            }
        };

        $rootScope.websocketSubSocket = $rootScope.websocketSocket.subscribe($rootScope.websocketRequest);

        $rootScope.$on("$routeChangeSuccess", function (event, next, current) {
            $rootScope.websocketRequest.sendMessage();
        });
    }
    ]);

Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};

Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key))
};

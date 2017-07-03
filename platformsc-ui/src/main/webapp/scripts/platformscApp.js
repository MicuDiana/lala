var platformscApp=angular.module('platformscApp',['platformscControllers','platformscServices','platformscDirectives','platformscConstants']);
platformscApp
    .config(function ($routeProvider, $httpProvider, $translateProvider, $translatePartialLoaderProvider, tmhDynamicLocaleProvider,AUTH_BOOTSTRAP) {
        console.log('platformsc Application loading!!!');

        $routeProvider
           .when('/gRAD_DIDACTIC_ENUM', {
              templateUrl: 'platformsc-java/views/gRAD_DIDACTIC_ENUM/gRAD_DIDACTIC_ENUMWrapper.html',
              controller: 'GRAD_DIDACTIC_ENUMController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/gRAD_STIINTIFIC_ENUM', {
              templateUrl: 'platformsc-java/views/gRAD_STIINTIFIC_ENUM/gRAD_STIINTIFIC_ENUMWrapper.html',
              controller: 'GRAD_STIINTIFIC_ENUMController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/nIVEL_LIMBA_STRAINA_ENUM', {
              templateUrl: 'platformsc-java/views/nIVEL_LIMBA_STRAINA_ENUM/nIVEL_LIMBA_STRAINA_ENUMWrapper.html',
              controller: 'NIVEL_LIMBA_STRAINA_ENUMController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/qX_ENUM', {
              templateUrl: 'platformsc-java/views/qX_ENUM/qX_ENUMWrapper.html',
              controller: 'QX_ENUMController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });

        $routeProvider
           .when('/tipBrevetEnum', {
              templateUrl: '/views/tipBrevetEnum/tipBrevetEnumWrapper.html',
              controller: 'TipBrevetEnumController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/persoana', {
              templateUrl: '/views/persoana/persoanaWrapper.html',
              controller: 'PersoanaController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/limbaStraina', {
              templateUrl: '/views/limbaStraina/limbaStrainaWrapper.html',
              controller: 'LimbaStrainaController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/angajat', {
              templateUrl: '/views/angajat/angajatWrapper.html',
              controller: 'AngajatController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/conferinta', {
              templateUrl: '/views/conferinta/conferintaWrapper.html',
              controller: 'ConferintaController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/lucrare', {
              templateUrl: '/views/lucrare/lucrareWrapper.html',
              controller: 'LucrareController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/citari', {
              templateUrl: '/views/citari/citariWrapper.html',
              controller: 'CitariController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/organizareConferinte', {
              templateUrl: '/views/organizareConferinte/organizareConferinteWrapper.html',
              controller: 'OrganizareConferinteController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/membruAsocProf', {
              templateUrl: '/views/membruAsocProf/membruAsocProfWrapper.html',
              controller: 'MembruAsocProfController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/produsInregORDA', {
              templateUrl: '/views/produsInregORDA/produsInregORDAWrapper.html',
              controller: 'ProdusInregORDAController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/premiu', {
              templateUrl: '/views/premiu/premiuWrapper.html',
              controller: 'PremiuController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/membruRedactie', {
              templateUrl: '/views/membruRedactie/membruRedactieWrapper.html',
              controller: 'MembruRedactieController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/proiect', {
              templateUrl: '/views/proiect/proiectWrapper.html',
              controller: 'ProiectController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });
        $routeProvider
           .when('/raport', {
              templateUrl: '/views/raport/raport.html',
              controller: 'RaportController',
              access: {
                  authorizedModules: [AUTH_BOOTSTRAP.all]
              }
           });


        //place some routes here

        // include i18n files
        $translatePartialLoaderProvider.addPart('i18n/platformsc_');

    }) .run(function ($rootScope, $translate) {

        $rootScope.securityEnabled=true;
        $translate.use('ro');

    });
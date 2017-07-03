'use strict';

platformscServices
    .factory('ProdusInregORDA', ['$resource', function ($resource) {
        return $resource('api/produsInregORDA/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/produsInregORDA/list',
                method: 'GET'
            }
        });
    }]);

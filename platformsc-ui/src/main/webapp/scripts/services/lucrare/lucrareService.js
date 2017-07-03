'use strict';

platformscServices
    .factory('Lucrare', ['$resource', function ($resource) {
        return $resource('api/lucrare/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/lucrare/list',
                method: 'GET'
            }
        });
    }]);

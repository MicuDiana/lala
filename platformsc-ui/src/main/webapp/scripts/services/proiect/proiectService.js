'use strict';

platformscServices
    .factory('Proiect', ['$resource', function ($resource) {
        return $resource('api/proiect/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/proiect/list',
                method: 'GET'
            }
        });
    }]);

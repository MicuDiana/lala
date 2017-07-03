'use strict';

platformscServices
    .factory('Persoana', ['$resource', function ($resource) {
        return $resource('api/persoana/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/persoana/list',
                method: 'GET'
            }
        });
    }]);

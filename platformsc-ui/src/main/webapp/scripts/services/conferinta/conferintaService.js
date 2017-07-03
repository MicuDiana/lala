'use strict';

platformscServices
    .factory('Conferinta', ['$resource', function ($resource) {
        return $resource('api/conferinta/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/conferinta/list',
                method: 'GET'
            }
        });
    }]);

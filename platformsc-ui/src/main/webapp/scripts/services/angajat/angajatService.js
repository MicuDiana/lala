'use strict';

platformscServices
    .factory('Angajat', ['$resource', function ($resource) {
        return $resource('api/angajat/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/angajat/list',
                method: 'GET'
            }
        });
    }]);

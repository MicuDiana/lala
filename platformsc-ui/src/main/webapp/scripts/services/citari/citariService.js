'use strict';

platformscServices
    .factory('Citari', ['$resource', function ($resource) {
        return $resource('api/citari/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/citari/list',
                method: 'GET'
            }
        });
    }]);

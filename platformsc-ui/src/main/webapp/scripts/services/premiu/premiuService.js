'use strict';

platformscServices
    .factory('Premiu', ['$resource', function ($resource) {
        return $resource('api/premiu/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/premiu/list',
                method: 'GET'
            }
        });
    }]);

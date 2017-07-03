'use strict';

platformscServices
    .factory('LimbaStraina', ['$resource', function ($resource) {
        return $resource('api/limbaStraina/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/limbaStraina/list',
                method: 'GET'
            }
        });
    }]);

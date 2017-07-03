'use strict';

platformscServices
    .factory('MembruAsocProf', ['$resource', function ($resource) {
        return $resource('api/membruAsocProf/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/membruAsocProf/list',
                method: 'GET'
            }
        });
    }]);

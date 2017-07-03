'use strict';

platformscServices
    .factory('MembruRedactie', ['$resource', function ($resource) {
        return $resource('api/membruRedactie/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/membruRedactie/list',
                method: 'GET'
            }
        });
    }]);

'use strict';

platformscServices
    .factory('OrganizareConferinte', ['$resource', function ($resource) {
        return $resource('api/organizareConferinte/:id', {}, {
            'update': {
                method: 'PUT'
            },
            'list': {
                url: 'api/organizareConferinte/list',
                method: 'GET'
            }
        });
    }]);

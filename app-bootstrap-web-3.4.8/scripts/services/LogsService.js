
bootstrapServices.factory('LogsService',['$resource', function ($resource) {
    return $resource('api/logs', {}, {
        'findAll': { method: 'GET', isArray: true},
        'changeLevel':  { method: 'PUT'}
    });
}]);
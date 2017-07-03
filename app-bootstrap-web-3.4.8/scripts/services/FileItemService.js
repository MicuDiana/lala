bootstrapServices.factory('FileItemResource',['$resource', function ($resource) {
    return $resource('/api/downloadFile/fileInfo/:fileMasterId', {}, {
        'get': { method: 'GET', params: {}, isArray: true}
    });
}]);
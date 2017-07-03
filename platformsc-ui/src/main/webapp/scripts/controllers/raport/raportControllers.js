'use strict';
platformscControllers
    .controller('RaportController', ['$scope','$window', function ($scope,$window) {

        $scope.runReport=function (reportType){
            if(reportType==='pdf'){
                $window.location.href='/app/pdf'
            }else {
                $window.location.href='/app/xlsx'
            }
        }
    }]);

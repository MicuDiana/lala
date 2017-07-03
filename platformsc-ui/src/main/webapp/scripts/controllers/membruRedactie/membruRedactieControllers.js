'use strict';
platformscControllers
    .controller('MembruRedactieController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'MembruRedactie', 'Angajat',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, MembruRedactie, Angajat) {

        Functionality.init($scope,'membruRedactie',MembruRedactie);

        $scope.setTitle('MembruRedactie');

        $scope.membruRedactie.actions.clear = function () {
            $scope.membruRedactie.data = {international: false, perioada: null, calitatea: null, id: null};
            $scope.searchTerms = [];
        };

        
        $scope.angajats = Angajat.query();
        
        $scope.showAngajat = false;


        

        $scope.membruRedactie.actions.redrawGrid = function(grid) {
         
        };


        

        $scope.membruRedactie.grid.init();
        $scope.membruRedactie.grid.reset();
        
        $scope.membruRedactie.grid.addColumn('international');
        $scope.membruRedactie.grid.setColumnLabelKey('international', 'International');
        $scope.membruRedactie.grid.formatColumn('international', 'yesNoBooleanFormatter');
        $scope.membruRedactie.grid.addSearchToColumn('international', AppGridConstants.searchValueTypes.BOOLEAN);
        
        $scope.membruRedactie.grid.addColumn('perioada');
        $scope.membruRedactie.grid.setColumnLabelKey('perioada', 'Perioada');
        $scope.membruRedactie.grid.addSearchToColumn('perioada', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.membruRedactie.grid.addColumn('calitatea');
        $scope.membruRedactie.grid.setColumnLabelKey('calitatea', 'Calitatea');
        $scope.membruRedactie.grid.addSearchToColumn('calitatea', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
         
        $scope.membruRedactie.grid.addColumn('angajat.id');
        $scope.membruRedactie.grid.setColumnLabelKey('angajat.id', 'Angajat');
        $scope.membruRedactie.grid.addSearchToColumn('angajat.id', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        

        
        $scope.membruRedactie.grid.build();
        
        $scope.membruRedactie.actions.showAdd = function(){
            $scope.membruRedactie.components = {
                create: true,
                delete: false,
                view: false,
                update: false,
                list: false,
                details:true
            };
            $scope.membruRedactie.buttons = {
                add: true,
                edit: false,
                delete: false,
                view: false
            };

            
            if ($scope.angajat != null) {
                $scope.membruRedactie.angajat = $scope.angajat;
            }
        };
        

        $scope.postDataLoading = function(){
            
        };
    }]);

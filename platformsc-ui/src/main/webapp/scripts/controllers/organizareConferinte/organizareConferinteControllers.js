'use strict';
platformscControllers
    .controller('OrganizareConferinteController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'OrganizareConferinte', 'Persoana', 'Conferinta',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, OrganizareConferinte, Persoana, Conferinta) {

        Functionality.init($scope,'organizareConferinte',OrganizareConferinte);

        $scope.setTitle('OrganizareConferinte');

        $scope.organizareConferinte.actions.clear = function () {
            $scope.organizareConferinte.data = {calitatea: null, id: null};
            $scope.searchTerms = [];
        };

        
        $scope.persoanas = Persoana.query();
        $scope.conferintas = Conferinta.query();
        
        $scope.showPersoana = false;
        $scope.showConferinta = false;


        

        $scope.organizareConferinte.actions.redrawGrid = function(grid) {
         
        };


        

        $scope.organizareConferinte.grid.init();
        $scope.organizareConferinte.grid.reset();
        
        $scope.organizareConferinte.grid.addColumn('calitatea');
        $scope.organizareConferinte.grid.setColumnLabelKey('calitatea', 'Calitatea');
        $scope.organizareConferinte.grid.addSearchToColumn('calitatea', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
         
        $scope.organizareConferinte.grid.addColumn('persoana.nume');
        $scope.organizareConferinte.grid.setColumnLabelKey('persoana.nume', 'Persoana');
        $scope.organizareConferinte.grid.addSearchToColumn('persoana.nume', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        

        
        $scope.organizareConferinte.grid.build();
        
        $scope.organizareConferinte.actions.showAdd = function(){
            $scope.organizareConferinte.components = {
                create: true,
                delete: false,
                view: false,
                update: false,
                list: false,
                details:true
            };
            $scope.organizareConferinte.buttons = {
                add: true,
                edit: false,
                delete: false,
                view: false
            };

            
            if ($scope.persoana != null) {
                $scope.organizareConferinte.persoana = $scope.persoana;
            }
        };
        

        $scope.postDataLoading = function(){
            
        };
    }]);

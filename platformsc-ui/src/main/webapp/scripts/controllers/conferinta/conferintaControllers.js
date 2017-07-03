'use strict';
platformscControllers
    .controller('ConferintaController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'Conferinta', 'Lucrare', 'OrganizareConferinte',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, Conferinta, Lucrare, OrganizareConferinte) {

        Functionality.init($scope,'conferinta',Conferinta);

        $scope.setTitle('Conferinta');

        $scope.conferinta.actions.clear = function () {
            $scope.conferinta.data = {denumire: null, locatie: null, tara: null, data: null, id: null};
            $scope.searchTerms = [];
        };

        
        $scope.lucrares = Lucrare.query();
        $scope.organizareConferintes = OrganizareConferinte.query();
        
        $scope.showLucrare = false;
        $scope.showOrganizareConferinte = false;


        

        $scope.conferinta.isDataOpened = false;
        $scope.openData = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.conferinta.isDataOpened = true;
         };
        

        $scope.conferinta.actions.redrawGrid = function(grid) {
         
            $scope.searchTerms=[];
            $scope.searchTerms.push(
                {
                    property: 'conferinta.id',
                    value: parseInt($scope.selected()[0].id),
                    type: AppGridConstants.searchFilterTypes.EQUAL,
                    negation: false
                }
            );
            
            if(grid == 'lucrare'){
                $scope.showLucrare = true;
                
                $scope.showOrganizareConferinte = false;
            }
            if(grid == 'organizareConferinte'){
                $scope.showOrganizareConferinte = true;
                
                $scope.showLucrare = false;
            }
        };


        

        $scope.conferinta.grid.init();
        $scope.conferinta.grid.reset();
        
        $scope.conferinta.grid.addColumn('denumire');
        $scope.conferinta.grid.setColumnLabelKey('denumire', 'Denumire');
        $scope.conferinta.grid.addSearchToColumn('denumire', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.conferinta.grid.addColumn('locatie');
        $scope.conferinta.grid.setColumnLabelKey('locatie', 'Locatie');
        $scope.conferinta.grid.addSearchToColumn('locatie', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.conferinta.grid.addColumn('tara');
        $scope.conferinta.grid.setColumnLabelKey('tara', 'Tara');
        $scope.conferinta.grid.addSearchToColumn('tara', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.conferinta.grid.addColumn('data');
        $scope.conferinta.grid.setColumnLabelKey('data', 'Data');
        $scope.conferinta.grid.formatColumn('data', 'simpleDateFormatter');
        $scope.conferinta.grid.addSearchToColumn('data', AppGridConstants.searchValueTypes.DATE,
            {filterType: AppGridConstants.searchFilterTypes.BETWEEN, placeholders: ["De la: ", "Pana la: "]});
         
        $scope.conferinta.grid.addColumn('organizareConferinte.id');
        $scope.conferinta.grid.setColumnLabelKey('organizareConferinte.id', 'OrganizareConferinte');
        $scope.conferinta.grid.addSearchToColumn('organizareConferinte.id', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        

        
        $scope.conferinta.grid.build();
        
        $scope.conferinta.actions.showAdd = function(){
            $scope.conferinta.components = {
                create: true,
                delete: false,
                view: false,
                update: false,
                list: false,
                details:true
            };
            $scope.conferinta.buttons = {
                add: true,
                edit: false,
                delete: false,
                view: false
            };

            
        };
        

        $scope.postDataLoading = function(){
            
            $scope.conferinta.data.data = moment($scope.alpha.data.data).toDate();
            
        };
    }]);

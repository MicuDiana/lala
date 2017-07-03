'use strict';
platformscControllers
    .controller('CitariController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'Citari', 'Lucrare',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, Citari, Lucrare) {

        Functionality.init($scope,'citari',Citari);

        $scope.setTitle('Citari');

        $scope.citari.actions.clear = function () {
            $scope.citari.data = {an: null, nrCitari: null, id: null};
            $scope.searchTerms = [];
        };

        
        $scope.lucrares = Lucrare.query();
        
        $scope.showLucrare = false;


        

        $scope.citari.actions.redrawGrid = function(grid) {
         
            $scope.searchTerms=[];
            $scope.searchTerms.push(
                {
                    property: 'citari.id',
                    value: parseInt($scope.selected()[0].id),
                    type: AppGridConstants.searchFilterTypes.EQUAL,
                    negation: false
                }
            );
            
            if(grid == 'lucrare'){
                $scope.showLucrare = true;
                
            }
        };


        

        $scope.citari.grid.init();
        $scope.citari.grid.reset();
        
        $scope.citari.grid.addColumn('an');
        $scope.citari.grid.setColumnLabelKey('an', 'An');
        $scope.citari.grid.addSearchToColumn('an', AppGridConstants.searchValueTypes.NUMBER,
            {filterType: AppGridConstants.searchFilterTypes.EQUAL});
        
        $scope.citari.grid.addColumn('nrCitari');
        $scope.citari.grid.setColumnLabelKey('nrCitari', 'NrCitari');
        $scope.citari.grid.addSearchToColumn('nrCitari', AppGridConstants.searchValueTypes.NUMBER,
            {filterType: AppGridConstants.searchFilterTypes.EQUAL});
         

        
        $scope.citari.grid.build();
        
        $scope.citari.actions.showAdd = function(){
            $scope.citari.components = {
                create: true,
                delete: false,
                view: false,
                update: false,
                list: false,
                details:true
            };
            $scope.citari.buttons = {
                add: true,
                edit: false,
                delete: false,
                view: false
            };

            
        };
        

        $scope.postDataLoading = function(){
            
        };
    }]);

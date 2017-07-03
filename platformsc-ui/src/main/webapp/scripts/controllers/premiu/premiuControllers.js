'use strict';
platformscControllers
    .controller('PremiuController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'Premiu', 'Persoana',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, Premiu, Persoana) {

        Functionality.init($scope,'premiu',Premiu);

        $scope.setTitle('Premiu');

        $scope.premiu.actions.clear = function () {
            $scope.premiu.data = {international: false, emisDeAR: false, emisDe: null, an: null, tipPremiu: null, denumirePremiu: null, emitent: null, id: null};
            $scope.searchTerms = [];
        };

        
        $scope.persoanas = Persoana.query();
        
        $scope.showPersoana = false;


        $scope.premiu.actions.redrawGrid = function(grid) {
         
        };


        

        $scope.premiu.grid.init();
        $scope.premiu.grid.reset();

            $scope.premiu.grid.addColumn('persoana.nume');
            $scope.premiu.grid.setColumnLabelKey('persoana.nume', 'Persoana');
            $scope.premiu.grid.addSearchToColumn('persoana.nume', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.premiu.grid.addColumn('international');
        $scope.premiu.grid.setColumnLabelKey('international', 'International');
        $scope.premiu.grid.formatColumn('international', 'yesNoBooleanFormatter');
        $scope.premiu.grid.addSearchToColumn('international', AppGridConstants.searchValueTypes.BOOLEAN);
        
        $scope.premiu.grid.addColumn('emisDeAR');
        $scope.premiu.grid.setColumnLabelKey('emisDeAR', 'EmisDeAR');
        $scope.premiu.grid.formatColumn('emisDeAR', 'yesNoBooleanFormatter');
        $scope.premiu.grid.addSearchToColumn('emisDeAR', AppGridConstants.searchValueTypes.BOOLEAN);
        
        $scope.premiu.grid.addColumn('emisDe');
        $scope.premiu.grid.setColumnLabelKey('emisDe', 'EmisDe');
        $scope.premiu.grid.addSearchToColumn('emisDe', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.premiu.grid.addColumn('an');
        $scope.premiu.grid.setColumnLabelKey('an', 'An');
        $scope.premiu.grid.addSearchToColumn('an', AppGridConstants.searchValueTypes.NUMBER,
            {filterType: AppGridConstants.searchFilterTypes.EQUAL});
        
        $scope.premiu.grid.addColumn('tipPremiu');
        $scope.premiu.grid.setColumnLabelKey('tipPremiu', 'TipPremiu');
        $scope.premiu.grid.addSearchToColumn('tipPremiu', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.premiu.grid.addColumn('denumirePremiu');
        $scope.premiu.grid.setColumnLabelKey('denumirePremiu', 'DenumirePremiu');
        $scope.premiu.grid.addSearchToColumn('denumirePremiu', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.premiu.grid.addColumn('emitent');
        $scope.premiu.grid.setColumnLabelKey('emitent', 'Emitent');
        $scope.premiu.grid.addSearchToColumn('emitent', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.premiu.grid.addColumn('an');
        $scope.premiu.grid.setColumnLabelKey('an', 'An');
        $scope.premiu.grid.addSearchToColumn('an', AppGridConstants.searchValueTypes.NUMBER,
            {filterType: AppGridConstants.searchFilterTypes.EQUAL});
         

        

        
        $scope.premiu.grid.build();
        
        $scope.premiu.actions.showAdd = function(){
            $scope.premiu.components = {
                create: true,
                delete: false,
                view: false,
                update: false,
                list: false,
                details:true
            };
            $scope.premiu.buttons = {
                add: true,
                edit: false,
                delete: false,
                view: false
            };

            
            if ($scope.persoana != null) {
                $scope.premiu.persoana = $scope.persoana;
            }
        };
        

        $scope.postDataLoading = function(){
            
        };
    }]);

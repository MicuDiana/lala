'use strict';
platformscControllers
    .controller('LimbaStrainaController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'LimbaStraina', 'Angajat',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, LimbaStraina, Angajat) {

        Functionality.init($scope,'limbaStraina',LimbaStraina);

        $scope.setTitle('LimbaStraina');

        $scope.limbaStraina.actions.clear = function () {
            $scope.limbaStraina.data = {limba: null, ascultare: null, citire: null, conversatie: null, discurs: null, scriere: null, id: null};
            $scope.searchTerms = [];
        };

        $scope.gradLimba = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        
        $scope.angajats = Angajat.query();
        
        $scope.showAngajat = false;


        

        $scope.limbaStraina.actions.redrawGrid = function(grid) {
         
            $scope.searchTerms=[];
            $scope.searchTerms.push(
                {
                    property: 'limbaStraina.id',
                    value: parseInt($scope.selected()[0].id),
                    type: AppGridConstants.searchFilterTypes.EQUAL,
                    negation: false
                }
            );
            
            if(grid == 'angajat'){
                $scope.showAngajat = true;
                
            }
        };


        

        $scope.limbaStraina.grid.init();
        $scope.limbaStraina.grid.reset();
        
        $scope.limbaStraina.grid.addColumn('limba');
        $scope.limbaStraina.grid.setColumnLabelKey('limba', 'Limba');
        $scope.limbaStraina.grid.addSearchToColumn('limba', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.limbaStraina.grid.addColumn('ascultare');
        $scope.limbaStraina.grid.setColumnLabelKey('ascultare', 'Ascultare');
        $scope.limbaStraina.grid.addSearchToColumn('ascultare', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.limbaStraina.grid.addColumn('citire');
        $scope.limbaStraina.grid.setColumnLabelKey('citire', 'Citire');
        $scope.limbaStraina.grid.addSearchToColumn('citire', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.limbaStraina.grid.addColumn('conversatie');
        $scope.limbaStraina.grid.setColumnLabelKey('conversatie', 'Conversatie');
        $scope.limbaStraina.grid.addSearchToColumn('conversatie', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.limbaStraina.grid.addColumn('discurs');
        $scope.limbaStraina.grid.setColumnLabelKey('discurs', 'Discurs');
        $scope.limbaStraina.grid.addSearchToColumn('discurs', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.limbaStraina.grid.addColumn('scriere');
        $scope.limbaStraina.grid.setColumnLabelKey('scriere', 'Scriere');
        $scope.limbaStraina.grid.addSearchToColumn('scriere', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
         

        
        $scope.limbaStraina.grid.build();
        
        $scope.limbaStraina.actions.showAdd = function(){
            $scope.limbaStraina.components = {
                create: true,
                delete: false,
                view: false,
                update: false,
                list: false,
                details:true
            };
            $scope.limbaStraina.buttons = {
                add: true,
                edit: false,
                delete: false,
                view: false
            };

            
        };
        

        $scope.postDataLoading = function(){
            
        };
    }]);

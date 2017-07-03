'use strict';
platformscControllers
    .controller('ProdusInregORDAController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'ProdusInregORDA',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, ProdusInregORDA) {

        Functionality.init($scope,'produsInregORDA',ProdusInregORDA);

        $scope.setTitle('ProdusInregORDA');

        $scope.produsInregORDA.actions.clear = function () {
            $scope.produsInregORDA.data = {numeProdus: null, an: null, id: null};
            $scope.searchTerms = [];
        };

        
        


        

        $scope.produsInregORDA.actions.redrawGrid = function(grid) {
         
        };


        

        $scope.produsInregORDA.grid.init();
        $scope.produsInregORDA.grid.reset();
        
        $scope.produsInregORDA.grid.addColumn('numeProdus');
        $scope.produsInregORDA.grid.setColumnLabelKey('numeProdus', 'NumeProdus');
        $scope.produsInregORDA.grid.addSearchToColumn('numeProdus', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.produsInregORDA.grid.addColumn('an');
        $scope.produsInregORDA.grid.setColumnLabelKey('an', 'An');
        $scope.produsInregORDA.grid.addSearchToColumn('an', AppGridConstants.searchValueTypes.NUMBER,
            {filterType: AppGridConstants.searchFilterTypes.EQUAL});
         

        
        $scope.produsInregORDA.grid.build();
        

        $scope.postDataLoading = function(){
            
        };
    }]);

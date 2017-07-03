'use strict';
platformscControllers
    .controller('MembruAsocProfController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'MembruAsocProf', 'Persoana',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, MembruAsocProf, Persoana) {

        Functionality.init($scope,'membruAsocProf',MembruAsocProf);

        $scope.setTitle('MembruAsocProf');

        $scope.membruAsocProf.actions.clear = function () {
            $scope.membruAsocProf.data = {international: false, asociatia: null, perioada: null, id: null};
            $scope.searchTerms = [];
        };

        
        $scope.persoanas = Persoana.query();
        
        $scope.showPersoana = false;


        

        $scope.membruAsocProf.actions.redrawGrid = function(grid) {
         
            $scope.searchTerms=[];
            $scope.searchTerms.push(
                {
                    property: 'membruAsocProf.id',
                    value: parseInt($scope.selected()[0].id),
                    type: AppGridConstants.searchFilterTypes.EQUAL,
                    negation: false
                }
            );
            
            if(grid == 'persoana'){
                $scope.showPersoana = true;
                
            }
        };


        

        $scope.membruAsocProf.grid.init();
        $scope.membruAsocProf.grid.reset();
        
        $scope.membruAsocProf.grid.addColumn('international');
        $scope.membruAsocProf.grid.setColumnLabelKey('international', 'International');
        $scope.membruAsocProf.grid.formatColumn('international', 'yesNoBooleanFormatter');
        $scope.membruAsocProf.grid.addSearchToColumn('international', AppGridConstants.searchValueTypes.BOOLEAN);
        
        $scope.membruAsocProf.grid.addColumn('asociatia');
        $scope.membruAsocProf.grid.setColumnLabelKey('asociatia', 'Asociatia');
        $scope.membruAsocProf.grid.addSearchToColumn('asociatia', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.membruAsocProf.grid.addColumn('perioada');
        $scope.membruAsocProf.grid.setColumnLabelKey('perioada', 'Perioada');
        $scope.membruAsocProf.grid.addSearchToColumn('perioada', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
         

        
        $scope.membruAsocProf.grid.build();
        
        $scope.membruAsocProf.actions.showAdd = function(){
            $scope.membruAsocProf.components = {
                create: true,
                delete: false,
                view: false,
                update: false,
                list: false,
                details:true
            };
            $scope.membruAsocProf.buttons = {
                add: true,
                edit: false,
                delete: false,
                view: false
            };

            
        };
        

        $scope.postDataLoading = function(){
            
        };
    }]);

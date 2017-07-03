'use strict';
platformscControllers
    .controller('ProiectController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'Proiect', 'Persoana',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, Proiect, Persoana) {

        Functionality.init($scope,'proiect',Proiect);

        $scope.setTitle('Proiect');

        $scope.proiect.actions.clear = function () {
            $scope.proiect.data = {tipProiect: null, titlu: null, acronim: null, dataIncepere: null, dataFinalizare: null, beneficiar: null, program: null, numarContract: null, coordonator: null, calitate: null, parteneri: null, siteWeb: null, id: null};
            $scope.searchTerms = [];
        };

        
        $scope.persoanas = Persoana.query();
        
        $scope.showPersoana = false;


        

        $scope.proiect.isDataIncepereOpened = false;
        $scope.openDataIncepere = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.proiect.isDataIncepereOpened = true;
         };
        

        $scope.proiect.isDataFinalizareOpened = false;
        $scope.openDataFinalizare = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.proiect.isDataFinalizareOpened = true;
         };
        

        $scope.proiect.actions.redrawGrid = function(grid) {
         
            $scope.searchTerms=[];
            $scope.searchTerms.push(
                {
                    property: 'proiect.id',
                    value: parseInt($scope.selected()[0].id),
                    type: AppGridConstants.searchFilterTypes.EQUAL,
                    negation: false
                }
            );
            
            if(grid == 'persoana'){
                $scope.showPersoana = true;
                
            }
        };


        

        $scope.proiect.grid.init();
        $scope.proiect.grid.reset();
        
        $scope.proiect.grid.addColumn('tipProiect');
        $scope.proiect.grid.setColumnLabelKey('tipProiect', 'TipProiect');
        $scope.proiect.grid.addSearchToColumn('tipProiect', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.proiect.grid.addColumn('titlu');
        $scope.proiect.grid.setColumnLabelKey('titlu', 'Titlu');
        $scope.proiect.grid.addSearchToColumn('titlu', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
       /* $scope.proiect.grid.addColumn('acronim');
        $scope.proiect.grid.setColumnLabelKey('acronim', 'Acronim');
        $scope.proiect.grid.addSearchToColumn('acronim', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        */
      /*  $scope.proiect.grid.addColumn('dataIncepere');
        $scope.proiect.grid.setColumnLabelKey('dataIncepere', 'DataIncepere');
        $scope.proiect.grid.formatColumn('dataIncepere', 'simpleDateFormatter');
        $scope.proiect.grid.addSearchToColumn('dataIncepere', AppGridConstants.searchValueTypes.DATE,
            {filterType: AppGridConstants.searchFilterTypes.BETWEEN, placeholders: ["De la: ", "Pana la: "]});
        
        $scope.proiect.grid.addColumn('dataFinalizare');
        $scope.proiect.grid.setColumnLabelKey('dataFinalizare', 'DataFinalizare');
        $scope.proiect.grid.formatColumn('dataFinalizare', 'simpleDateFormatter');
        $scope.proiect.grid.addSearchToColumn('dataFinalizare', AppGridConstants.searchValueTypes.DATE,
            {filterType: AppGridConstants.searchFilterTypes.BETWEEN, placeholders: ["De la: ", "Pana la: "]});
        */
        $scope.proiect.grid.addColumn('beneficiar');
        $scope.proiect.grid.setColumnLabelKey('beneficiar', 'Beneficiar');
        $scope.proiect.grid.addSearchToColumn('beneficiar', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.proiect.grid.addColumn('program');
        $scope.proiect.grid.setColumnLabelKey('program', 'Program');
        $scope.proiect.grid.addSearchToColumn('program', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.proiect.grid.addColumn('numarContract');
        $scope.proiect.grid.setColumnLabelKey('numarContract', 'NumarContract');
        $scope.proiect.grid.addSearchToColumn('numarContract', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.proiect.grid.addColumn('coordonator');
        $scope.proiect.grid.setColumnLabelKey('coordonator', 'Coordonator');
        $scope.proiect.grid.addSearchToColumn('coordonator', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.proiect.grid.addColumn('calitate');
        $scope.proiect.grid.setColumnLabelKey('calitate', 'Calitate');
        $scope.proiect.grid.addSearchToColumn('calitate', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
       /* $scope.proiect.grid.addColumn('parteneri');
        $scope.proiect.grid.setColumnLabelKey('parteneri', 'Parteneri');
        $scope.proiect.grid.addSearchToColumn('parteneri', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});*/
        
      /*  $scope.proiect.grid.addColumn('siteWeb');
        $scope.proiect.grid.setColumnLabelKey('siteWeb', 'SiteWeb');
        $scope.proiect.grid.addSearchToColumn('siteWeb', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});*/
         

        
        $scope.proiect.grid.build();
        
        $scope.proiect.actions.showAdd = function(){
            $scope.proiect.components = {
                create: true,
                delete: false,
                view: false,
                update: false,
                list: false,
                details:true
            };
            $scope.proiect.buttons = {
                add: true,
                edit: false,
                delete: false,
                view: false
            };

            
        };
        

        $scope.postDataLoading = function(){
            
            $scope.proiect.data.dataIncepere = moment($scope.alpha.data.dataIncepere).toDate();
            
            $scope.proiect.data.dataFinalizare = moment($scope.alpha.data.dataFinalizare).toDate();
            
        };
    }]);

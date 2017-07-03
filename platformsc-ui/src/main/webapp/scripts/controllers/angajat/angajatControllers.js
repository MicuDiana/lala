'use strict';
platformscControllers
    .controller('AngajatController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'Angajat', 'LimbaStraina', 'Persoana', 'MembruRedactie',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, Angajat, LimbaStraina, Persoana, MembruRedactie) {

        Functionality.init($scope,'angajat',Angajat);

        $scope.setTitle('Angajat');
        $scope.searchTerms=[];

        $scope.angajat.actions.clear = function () {
            $scope.angajat.data = {gradStiintific: null, gradDidactic: null, facultateAbsolvita: null, specializare: null, areDoctorat: false, dataIncepereDoctorat: null, dataFinalizareDoctorat: null, titluTezaDoctorat: null, universitateDoctorat: null, coordonatorDoctorat: false, competente: null, domeniiDeInteres: null, cursuriSpecializare: null, certificari: null, alteInformatii: null, id: null};
            $scope.searchTerms = [];
        };

        
        $scope.limbaStrainas = LimbaStraina.query();
        $scope.persoanas = Persoana.query();
        $scope.membruRedacties = MembruRedactie.query();
        
        $scope.showLimbaStraina = false;
        $scope.showPersoana = false;
        $scope.showMembruRedactie = false;

        

        $scope.angajat.isDataIncepereDoctoratOpened = false;
        $scope.openDataIncepereDoctorat = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.angajat.isDataIncepereDoctoratOpened = true;
         };
        

        $scope.angajat.isDataFinalizareDoctoratOpened = false;
        $scope.openDataFinalizareDoctorat = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.angajat.isDataFinalizareDoctoratOpened = true;
         };
        

        $scope.angajat.actions.redrawGrid = function(grid) {
         
            $scope.searchTerms=[];

            
            if(grid == 'limbaStraina'){
                $scope.showLimbaStraina = true;
                
                $scope.showPersoana = false;
                $scope.showMembruRedactie = false;
            }
            if(grid == 'persoana'){
                $scope.showPersoana = true;
                
                $scope.showLimbaStraina = false;
                $scope.showMembruRedactie = false;
            }
            if(grid == 'membruRedactie'){
                $scope.showMembruRedactie = true;
                
                $scope.showLimbaStraina = false;
                $scope.showPersoana = false;
            }
        };

            $scope.$root.$on('angajatGridSelection', function (evt,data) {
                $scope.searchTerms.push(
                 {
                 property: 'angajat.id',
                 value: parseInt(data.entity.id),
                 type: AppGridConstants.searchFilterTypes.EQUAL,
                 negation: false
                 }
                 );
            });
        

        $scope.angajat.grid.init();
        $scope.angajat.grid.reset();
        


        
        $scope.angajat.grid.addColumn('persoana.nume');
        $scope.angajat.grid.setColumnLabelKey('persoana.nume', 'Persoana');
        $scope.angajat.grid.addSearchToColumn('persoana.nume', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});

        $scope.angajat.grid.addColumn('facultateAbsolvita');
        $scope.angajat.grid.setColumnLabelKey('facultateAbsolvita', 'FacultateAbsolvita');
        $scope.angajat.grid.addSearchToColumn('facultateAbsolvita', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('specializare');
        $scope.angajat.grid.setColumnLabelKey('specializare', 'Specializare');
        $scope.angajat.grid.addSearchToColumn('specializare', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        

        $scope.angajat.grid.addColumn('titluTezaDoctorat');
        $scope.angajat.grid.setColumnLabelKey('titluTezaDoctorat', 'TitluTezaDoctorat');
        $scope.angajat.grid.addSearchToColumn('titluTezaDoctorat', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        

         

        
        $scope.angajat.grid.build();
        
        $scope.angajat.actions.showAdd = function(){
            $scope.angajat.components = {
                create: true,
                delete: false,
                view: false,
                update: false,
                list: false,
                details:true
            };
            $scope.angajat.buttons = {
                add: true,
                edit: false,
                delete: false,
                view: false
            };
        };
        

        $scope.postDataLoading = function(){
            
            $scope.angajat.data.dataIncepereDoctorat = moment($scope.alpha.data.dataIncepereDoctorat).toDate();
            
            $scope.angajat.data.dataFinalizareDoctorat = moment($scope.alpha.data.dataFinalizareDoctorat).toDate();
            
        };
    }]);

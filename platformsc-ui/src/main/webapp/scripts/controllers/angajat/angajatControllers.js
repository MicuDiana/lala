'use strict';
platformscControllers
    .controller('AngajatController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'Angajat', 'LimbaStraina', 'Persoana', 'MembruRedactie',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, Angajat, LimbaStraina, Persoana, MembruRedactie) {

        Functionality.init($scope,'angajat',Angajat);

        $scope.setTitle('Angajat');

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
        
        $scope.angajat.grid.addColumn('gradStiintific');
        $scope.angajat.grid.setColumnLabelKey('gradStiintific', 'GradStiintific');
        $scope.angajat.grid.addSearchToColumn('gradStiintific', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('gradDidactic');
        $scope.angajat.grid.setColumnLabelKey('gradDidactic', 'GradDidactic');
        $scope.angajat.grid.addSearchToColumn('gradDidactic', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('facultateAbsolvita');
        $scope.angajat.grid.setColumnLabelKey('facultateAbsolvita', 'FacultateAbsolvita');
        $scope.angajat.grid.addSearchToColumn('facultateAbsolvita', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('specializare');
        $scope.angajat.grid.setColumnLabelKey('specializare', 'Specializare');
        $scope.angajat.grid.addSearchToColumn('specializare', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('areDoctorat');
        $scope.angajat.grid.setColumnLabelKey('areDoctorat', 'AreDoctorat');
        $scope.angajat.grid.formatColumn('areDoctorat', 'yesNoBooleanFormatter');
        $scope.angajat.grid.addSearchToColumn('areDoctorat', AppGridConstants.searchValueTypes.BOOLEAN);
        
        $scope.angajat.grid.addColumn('dataIncepereDoctorat');
        $scope.angajat.grid.setColumnLabelKey('dataIncepereDoctorat', 'DataIncepereDoctorat');
        $scope.angajat.grid.formatColumn('dataIncepereDoctorat', 'simpleDateFormatter');
        $scope.angajat.grid.addSearchToColumn('dataIncepereDoctorat', AppGridConstants.searchValueTypes.DATE,
            {filterType: AppGridConstants.searchFilterTypes.BETWEEN, placeholders: ["De la: ", "Pana la: "]});
        
        $scope.angajat.grid.addColumn('dataFinalizareDoctorat');
        $scope.angajat.grid.setColumnLabelKey('dataFinalizareDoctorat', 'DataFinalizareDoctorat');
        $scope.angajat.grid.formatColumn('dataFinalizareDoctorat', 'simpleDateFormatter');
        $scope.angajat.grid.addSearchToColumn('dataFinalizareDoctorat', AppGridConstants.searchValueTypes.DATE,
            {filterType: AppGridConstants.searchFilterTypes.BETWEEN, placeholders: ["De la: ", "Pana la: "]});
        
        $scope.angajat.grid.addColumn('titluTezaDoctorat');
        $scope.angajat.grid.setColumnLabelKey('titluTezaDoctorat', 'TitluTezaDoctorat');
        $scope.angajat.grid.addSearchToColumn('titluTezaDoctorat', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('universitateDoctorat');
        $scope.angajat.grid.setColumnLabelKey('universitateDoctorat', 'UniversitateDoctorat');
        $scope.angajat.grid.addSearchToColumn('universitateDoctorat', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('coordonatorDoctorat');
        $scope.angajat.grid.setColumnLabelKey('coordonatorDoctorat', 'CoordonatorDoctorat');
        $scope.angajat.grid.formatColumn('coordonatorDoctorat', 'yesNoBooleanFormatter');
        $scope.angajat.grid.addSearchToColumn('coordonatorDoctorat', AppGridConstants.searchValueTypes.BOOLEAN);
        
        $scope.angajat.grid.addColumn('competente');
        $scope.angajat.grid.setColumnLabelKey('competente', 'Competente');
        $scope.angajat.grid.addSearchToColumn('competente', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('domeniiDeInteres');
        $scope.angajat.grid.setColumnLabelKey('domeniiDeInteres', 'DomeniiDeInteres');
        $scope.angajat.grid.addSearchToColumn('domeniiDeInteres', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('cursuriSpecializare');
        $scope.angajat.grid.setColumnLabelKey('cursuriSpecializare', 'CursuriSpecializare');
        $scope.angajat.grid.addSearchToColumn('cursuriSpecializare', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('certificari');
        $scope.angajat.grid.setColumnLabelKey('certificari', 'Certificari');
        $scope.angajat.grid.addSearchToColumn('certificari', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.angajat.grid.addColumn('alteInformatii');
        $scope.angajat.grid.setColumnLabelKey('alteInformatii', 'AlteInformatii');
        $scope.angajat.grid.addSearchToColumn('alteInformatii', AppGridConstants.searchValueTypes.STRING,
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

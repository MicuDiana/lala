'use strict';
platformscControllers
    .controller('PersoanaController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'Persoana', 'Lucrare', 'Angajat', 'Premiu', 'OrganizareConferinte', 'MembruAsocProf', 'Proiect',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, Persoana,  Lucrare,Angajat, Premiu, OrganizareConferinte, MembruAsocProf, Proiect) {

        Functionality.init($scope,'persoana',Persoana);

        $scope.setTitle('Persoana');

        $scope.persoana.actions.clear = function () {
            $scope.persoana.data = {nume: null, prenume: null, email: null, id: null};
            $scope.searchTerms = [];
        };

        

        $scope.lucrares = Lucrare.query();
        $scope.premius = Premiu.query();
        $scope.organizareConferintes = OrganizareConferinte.query();
        $scope.membruAsocProfs = MembruAsocProf.query();
        $scope.proiects = Proiect.query();
        
        $scope.showAngajat = false;
        $scope.showLucrare = false;
        $scope.showPremiu = false;
        $scope.showOrganizareConferinte = false;
        $scope.showMembruAsocProf = false;
        $scope.showProiect = false;


        

        $scope.persoana.actions.redrawGrid = function(grid) {
         
            $scope.searchTerms=[];
            $scope.searchTerms.push(
                {
                    property: 'persoana.id',
                    value: parseInt($scope.selected()[0].id),
                    type: AppGridConstants.searchFilterTypes.EQUAL,
                    negation: false
                }
            );
            
            if(grid == 'angajat'){
                $scope.showAngajat = true;
                
                $scope.showLucrare = false;
                $scope.showPremiu = false;
                $scope.showOrganizareConferinte = false;
                $scope.showMembruAsocProf = false;
                $scope.showProiect = false;
            }
            if(grid == 'lucrare'){
                $scope.showLucrare = true;
                
                $scope.showAngajat = false;
                $scope.showPremiu = false;
                $scope.showOrganizareConferinte = false;
                $scope.showMembruAsocProf = false;
                $scope.showProiect = false;
            }
            if(grid == 'premiu'){
                $scope.showPremiu = true;
                
                $scope.showAngajat = false;
                $scope.showLucrare = false;
                $scope.showOrganizareConferinte = false;
                $scope.showMembruAsocProf = false;
                $scope.showProiect = false;
            }
            if(grid == 'organizareConferinte'){
                $scope.showOrganizareConferinte = true;
                
                $scope.showAngajat = false;
                $scope.showLucrare = false;
                $scope.showPremiu = false;
                $scope.showMembruAsocProf = false;
                $scope.showProiect = false;
            }
            if(grid == 'membruAsocProf'){
                $scope.showMembruAsocProf = true;
                
                $scope.showAngajat = false;
                $scope.showLucrare = false;
                $scope.showPremiu = false;
                $scope.showOrganizareConferinte = false;
                $scope.showProiect = false;
            }
            if(grid == 'proiect'){
                $scope.showProiect = true;
                
                $scope.showAngajat = false;
                $scope.showLucrare = false;
                $scope.showPremiu = false;
                $scope.showOrganizareConferinte = false;
                $scope.showMembruAsocProf = false;
            }
        };


        

        $scope.persoana.grid.init();
        $scope.persoana.grid.reset();
        
        $scope.persoana.grid.addColumn('nume');
        $scope.persoana.grid.setColumnLabelKey('nume', 'Nume');
        $scope.persoana.grid.addSearchToColumn('nume', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.persoana.grid.addColumn('prenume');
        $scope.persoana.grid.setColumnLabelKey('prenume', 'Prenume');
        $scope.persoana.grid.addSearchToColumn('prenume', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        
        $scope.persoana.grid.addColumn('email');
        $scope.persoana.grid.setColumnLabelKey('email', 'Email');
        $scope.persoana.grid.addSearchToColumn('email', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
         

        $scope.persoana.grid.addColumn('proiect.titlu');
        $scope.persoana.grid.setColumnLabelKey('proiect.titlu', 'Proiect');
        $scope.persoana.grid.addSearchToColumn('proiect.titlu', AppGridConstants.searchValueTypes.STRING,
            {filterType: AppGridConstants.searchFilterTypes.LIKE});
        

        
        $scope.persoana.grid.build();
        
        $scope.persoana.actions.showAdd = function(){
            $scope.persoana.components = {
                create: true,
                delete: false,
                view: false,
                update: false,
                list: false,
                details:true
            };
            $scope.persoana.buttons = {
                add: true,
                edit: false,
                delete: false,
                view: false
            };

            
            if ($scope.proiect != null) {
                $scope.persoana.proiect = $scope.proiect;
            }
        };
        

        $scope.postDataLoading = function(){
            
        };
    }]);

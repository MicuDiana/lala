'use strict';
platformscControllers
    .controller('LucrareController', ['$scope', 'AppGridConstants', 'AppGridMetadataBuilder', 'Functionality', 'Lucrare', 'Persoana', 'Citari', 'Conferinta',
        function ($scope, AppGridConstants, AppGridMetadataBuilder, Functionality, Lucrare, Persoana, Citari, Conferinta) {

            Functionality.init($scope, 'lucrare', Lucrare);

            $scope.setTitle('Lucrare');

            $scope.lucrare.actions.clear = function () {
                $scope.lucrare.data = {
                    titlu: null,
                    anPublicare: null,
                    numarAutori: null,
                    denumire: null,
                    factorDeImpact: null,
                    issn: null,
                    isbn: null,
                    editori: null,
                    volum: null,
                    numar: null,
                    numarPagini: null,
                    editura: null,
                    wos: null,
                    issnJurnal: null,
                    capitole: null,
                    rezultat: null,
                    tipLucrare: null,
                    tipBrevet: null,
                    qx: null,
                    indexataDe: null,
                    id: null
                };
                $scope.searchTerms = [];
            };

            console.log($scope.lucrare.data.tipLucrare);
            $scope.tipLucrare = ['Revista', 'Ion'] ;
            $scope.esteRevista = false;

            $scope.update = function() {
               $scope.revista = $scope.lucrare.data.tipLucrare;
               if($scope.revista == 'Revista')
                   $scope.esteRevista = true;
               else
                   $scope.esteRevista = false;
                }

            $scope.persoanas = Persoana.query();
            $scope.citaris = Citari.query();
            $scope.conferintas = Conferinta.query();

            $scope.showPersoana = false;
            $scope.showCitari = false;
            $scope.showConferinta = false;


            $scope.lucrare.actions.redrawGrid = function (grid) {

                $scope.searchTerms = [];
                $scope.searchTerms.push(
                    {
                        property: 'lucrare.id',
                        value: parseInt($scope.selected()[0].id),
                        type: AppGridConstants.searchFilterTypes.EQUAL,
                        negation: false
                    }
                );

                if (grid == 'persoana') {
                    $scope.showPersoana = true;

                    $scope.showCitari = false;
                    $scope.showConferinta = false;
                }
                if (grid == 'citari') {
                    $scope.showCitari = true;

                    $scope.showPersoana = false;
                    $scope.showConferinta = false;
                }
                if (grid == 'conferinta') {
                    $scope.showConferinta = true;

                    $scope.showPersoana = false;
                    $scope.showCitari = false;
                }
            };


            $scope.lucrare.grid.init();
            $scope.lucrare.grid.reset();


            $scope.lucrare.grid.addColumn('tipLucrare');
            $scope.lucrare.grid.setColumnLabelKey('tipLucrare', 'TipLucrare');
            $scope.lucrare.grid.addSearchToColumn('tipLucrare', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('titlu');
            $scope.lucrare.grid.setColumnLabelKey('titlu', 'Titlu');
            $scope.lucrare.grid.addSearchToColumn('titlu', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});



            $scope.lucrare.grid.addColumn('denumire');
            $scope.lucrare.grid.setColumnLabelKey('denumire', 'Denumire');
            $scope.lucrare.grid.addSearchToColumn('denumire', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});




            $scope.lucrare.grid.addColumn('numar');
            $scope.lucrare.grid.setColumnLabelKey('numar', 'Numar');
            $scope.lucrare.grid.addSearchToColumn('numar', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('numarPagini');
            $scope.lucrare.grid.setColumnLabelKey('numarPagini', 'NumarPagini');
            $scope.lucrare.grid.addSearchToColumn('numarPagini', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('editura');
            $scope.lucrare.grid.setColumnLabelKey('editura', 'Editura');
            $scope.lucrare.grid.addSearchToColumn('editura', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});




            $scope.lucrare.grid.addColumn('capitole');
            $scope.lucrare.grid.setColumnLabelKey('capitole', 'Capitole');
            $scope.lucrare.grid.addSearchToColumn('capitole', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});




            $scope.lucrare.grid.addColumn('indexataDe');
            $scope.lucrare.grid.setColumnLabelKey('indexataDe', 'IndexataDe');
            $scope.lucrare.grid.addSearchToColumn('indexataDe', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});


            $scope.lucrare.grid.build();

            $scope.lucrare.actions.showAdd = function () {
                $scope.lucrare.components = {
                    create: true,
                    delete: false,
                    view: false,
                    update: false,
                    list: false,
                    details: true
                };
                $scope.lucrare.buttons = {
                    add: true,
                    edit: false,
                    delete: false,
                    view: false
                };


            };


            $scope.postDataLoading = function () {

            };
        }]);

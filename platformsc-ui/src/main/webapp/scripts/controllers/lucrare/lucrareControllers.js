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

            $scope.lucrare.grid.addColumn('anPublicare');
            $scope.lucrare.grid.setColumnLabelKey('anPublicare', 'AnPublicare');
            $scope.lucrare.grid.addSearchToColumn('anPublicare', AppGridConstants.searchValueTypes.NUMBER,
                {filterType: AppGridConstants.searchFilterTypes.EQUAL});

            $scope.lucrare.grid.addColumn('numarAutori');
            $scope.lucrare.grid.setColumnLabelKey('numarAutori', 'NumarAutori');
            $scope.lucrare.grid.addSearchToColumn('numarAutori', AppGridConstants.searchValueTypes.NUMBER,
                {filterType: AppGridConstants.searchFilterTypes.EQUAL});

            $scope.lucrare.grid.addColumn('denumire');
            $scope.lucrare.grid.setColumnLabelKey('denumire', 'Denumire');
            $scope.lucrare.grid.addSearchToColumn('denumire', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('factorDeImpact');
            $scope.lucrare.grid.setColumnLabelKey('factorDeImpact', 'FactorDeImpact');
            $scope.lucrare.grid.addSearchToColumn('factorDeImpact', AppGridConstants.searchValueTypes.NUMBER,
                {filterType: AppGridConstants.searchFilterTypes.EQUAL});

            $scope.lucrare.grid.addColumn('issn');
            $scope.lucrare.grid.setColumnLabelKey('issn', 'Issn');
            $scope.lucrare.grid.addSearchToColumn('issn', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('isbn');
            $scope.lucrare.grid.setColumnLabelKey('isbn', 'Isbn');
            $scope.lucrare.grid.addSearchToColumn('isbn', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('editori');
            $scope.lucrare.grid.setColumnLabelKey('editori', 'Editori');
            $scope.lucrare.grid.addSearchToColumn('editori', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('volum');
            $scope.lucrare.grid.setColumnLabelKey('volum', 'Volum');
            $scope.lucrare.grid.addSearchToColumn('volum', AppGridConstants.searchValueTypes.STRING,
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

            $scope.lucrare.grid.addColumn('wos');
            $scope.lucrare.grid.setColumnLabelKey('wos', 'Wos');
            $scope.lucrare.grid.addSearchToColumn('wos', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('issnJurnal');
            $scope.lucrare.grid.setColumnLabelKey('issnJurnal', 'IssnJurnal');
            $scope.lucrare.grid.addSearchToColumn('issnJurnal', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('capitole');
            $scope.lucrare.grid.setColumnLabelKey('capitole', 'Capitole');
            $scope.lucrare.grid.addSearchToColumn('capitole', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('rezultat');
            $scope.lucrare.grid.setColumnLabelKey('rezultat', 'Rezultat');
            $scope.lucrare.grid.addSearchToColumn('rezultat', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});


            $scope.lucrare.grid.addColumn('tipBrevet');
            $scope.lucrare.grid.setColumnLabelKey('tipBrevet', 'TipBrevet');
            $scope.lucrare.grid.addSearchToColumn('tipBrevet', AppGridConstants.searchValueTypes.STRING,
                {filterType: AppGridConstants.searchFilterTypes.LIKE});

            $scope.lucrare.grid.addColumn('qx');
            $scope.lucrare.grid.setColumnLabelKey('qx', 'Qx');
            $scope.lucrare.grid.addSearchToColumn('qx', AppGridConstants.searchValueTypes.STRING,
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

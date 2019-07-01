webpackJsonp([3],{

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioPageModule", function() { return RelatorioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__relatorio__ = __webpack_require__(861);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RelatorioPageModule = (function () {
    function RelatorioPageModule() {
    }
    RelatorioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__relatorio__["a" /* RelatorioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__relatorio__["a" /* RelatorioPage */]),
            ],
        })
    ], RelatorioPageModule);
    return RelatorioPageModule;
}());

//# sourceMappingURL=relatorio.module.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostraAlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MostraAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MostraAlunoPage = (function () {
    function MostraAlunoPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.carregaAluno = [];
        this.idsel = this.navParams.get('id_selecionado');
        console.log(this.idsel);
    }
    MostraAlunoPage.prototype.ionViewDidLoad = function () {
        this.pegarMostrarAlunos();
        //console.log('ionViewDidLoad MostraAlunoPage');
        //console.log("o que tem no array: ", this.carregaAluno);
    };
    MostraAlunoPage.prototype.pegarMostrarAlunos = function () {
        var _this = this;
        this.http.get('https://apolo-19fee.firebaseio.com/alunos/' + this.idsel + '.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //console.log(data);
            if (data !== null && data !== undefined) {
                _this.trataDados(data);
            }
        });
    };
    MostraAlunoPage.prototype.trataDados = function (dadosfb) {
        this.carregaAluno = Object.keys(dadosfb).map(function (i) { return dadosfb[i]; });
    };
    MostraAlunoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mostra-aluno',template:/*ion-inline-start:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\mostra-aluno\mostra-aluno.html"*/`<!--\n  Generated template for the MostraAlunoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Relatório do Aluno</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n        <h2>Aluno:  </h2>\n        <ion-badge color="primary" item-end>{{ carregaAluno[10] }}</ion-badge>\n    </ion-item>\n    <ion-item>\n        <h2>Matricula: </h2>\n        <ion-badge color="primary" item-end> {{ carregaAluno[12] }}</ion-badge>\n    </ion-item> \n    <ion-item>\n        <h2>Desafio 01:</h2>\n        <ion-badge color="primary" item-end> {{ carregaAluno[0] }} </ion-badge>\n    </ion-item> \n    <ion-item>\n        <h2>Desafio 02:  </h2>\n        <ion-badge color="primary" item-end> {{ carregaAluno[1] }}</ion-badge>\n    </ion-item>\n    <ion-item>\n        <h2>Desafio 03:  </h2>\n        <ion-badge color="primary" item-end> {{ carregaAluno[2] }}</ion-badge>\n    </ion-item>\n    <ion-item>\n        <h2>Desafio 04:  </h2>\n        <ion-badge color="primary" item-end> {{ carregaAluno[3] }}</ion-badge>\n    </ion-item>\n    <ion-item>\n        <h2>Desafio 05:  </h2>\n        <ion-badge color="primary" item-end> {{ carregaAluno[4] }}</ion-badge>\n    </ion-item>\n    <ion-item>\n        <h2>Desafio 06: </h2>\n        <ion-badge color="primary" item-end>{{ carregaAluno[5] }} </ion-badge>\n    </ion-item>\n    <ion-item>\n        <h2>Desafio 07:  </h2>\n        <ion-badge color="primary" item-end> {{ carregaAluno[6] }}</ion-badge>\n    </ion-item>\n    <ion-item>\n        <h2>Desafio 08:  </h2>\n        <ion-badge color="primary" item-end> {{ carregaAluno[7] }}</ion-badge>\n    </ion-item>\n    <ion-item>\n        <h2>Desafio 09: </h2>\n        <ion-badge color="primary" item-end> {{ carregaAluno[8] }}</ion-badge>\n    </ion-item>\n    <ion-item>\n        <h2>Desafio 10: </h2>\n        <ion-badge color="primary" item-end>  {{ carregaAluno[9] }}</ion-badge>\n    </ion-item>\n    <ion-item>\n        <h2>Total:  </h2>\n        <ion-badge color="primary" item-end> {{ carregaAluno[13] }}</ion-badge>\n    </ion-item>\n    <ion-item>\n        <p>Data de acesso:  </p>\n        <ion-badge color="dark" item-end> {{ carregaAluno[11] }}</ion-badge>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n`/*ion-inline-end:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\mostra-aluno\mostra-aluno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], MostraAlunoPage);
    return MostraAlunoPage;
}());

//# sourceMappingURL=mostra-aluno.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatorioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_alunos_dados_alunos__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mostra_aluno_mostra_aluno__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RelatorioPage = (function () {
    function RelatorioPage(navCtrl, navParams, dbAlunos, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbAlunos = dbAlunos;
        this.storage = storage;
        this.ocultarId = true;
        this.storage.get('id_alunoStorage')
            .then(function (resolve) {
            _this.id_aluno = resolve;
        });
    }
    RelatorioPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad RelatorioPage');
    };
    RelatorioPage.prototype.mostrarAluno = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mostra_aluno_mostra_aluno__["a" /* MostraAlunoPage */].name, {
            id_selecionado: id
        });
    };
    RelatorioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-relatorio',template:/*ion-inline-start:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\relatorio\relatorio.html"*/`\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Alunos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-item *ngFor="let dadoaluno of dbAlunos.dados_alunos, let i = index" (click)="mostrarAluno(dadoaluno._id)"> \n  <p [hidden]="ocultarId">{{ dadoaluno._id }}</p>\n  <h2>{{ dadoaluno.aluno }}</h2>\n  <p>Matrícula: {{ dadoaluno.matricula }}</p>\n  <ion-badge color="secondary" item-end >{{ dadoaluno.pontuacaoTotal }}</ion-badge>\n  <ion-icon name="arrow-dropright" item-end></ion-icon>\n</ion-item>\n</ion-content>\n`/*ion-inline-end:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\relatorio\relatorio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dados_alunos_dados_alunos__["a" /* DadosAlunosProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], RelatorioPage);
    return RelatorioPage;
}());

//# sourceMappingURL=relatorio.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
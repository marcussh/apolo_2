webpackJsonp([2],{

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssuntoPageModule", function() { return AssuntoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assunto__ = __webpack_require__(857);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AssuntoPageModule = (function () {
    function AssuntoPageModule() {
    }
    AssuntoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__assunto__["a" /* AssuntoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__assunto__["a" /* AssuntoPage */]),
            ],
        })
    ], AssuntoPageModule);
    return AssuntoPageModule;
}());

//# sourceMappingURL=assunto.module.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssuntoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tela_dica_tela_dica__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_firebase_dados_firebase__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_dados_alunos_dados_alunos__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AssuntoPage = (function () {
    function AssuntoPage(navCtrl, navParams, http, storage, db, dbFirebase, dbAlunos) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.db = db;
        this.dbFirebase = dbFirebase;
        this.dbAlunos = dbAlunos;
        this.dadosDesafios = [];
        this.inicio = __WEBPACK_IMPORTED_MODULE_9_moment__().format('LT');
        this.storage.get('pontuacaoTotal')
            .then(function (resolve) {
            _this.pont = resolve;
        });
        // this.teste2 = Observable.interval(2000)
        // .map(valor => console.log("Observable deu certo", this.teste));
        // if (this.id_aluno == undefined) {
        //   this.storage.get('id_alunoStorage')
        //   .then((resolve) => {
        //     this.id_aluno = resolve;
        //     console.log("O que tá no ID ALUNO STORAGE do ASSUNTO: ", this.id_aluno);
        //   })
        // } else {
        //   console.log("quem carrega primeiro: ASSUNTO", this.id_aluno);
        // }
        // this.dbAlunos.pegarPontuacaoTotal(this.id_aluno);
    }
    AssuntoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.pegarDadosFirebase();
        //this.pegarDadosDesafios();
        //console.log("Array DADOS DB: ",this.dbFirebase.dadosDb);
        //console.log("quem carrega primeiro: ionViewDIdLoad de ASSUNTO");
        this.storage.get('alunoStorage')
            .then(function (resolve) {
            _this.aluno = resolve;
        });
        //console.log("O que tem agora ASSUNTO", this.id_aluno);
    };
    AssuntoPage.prototype.finalizar = function () {
        return this.fim = __WEBPACK_IMPORTED_MODULE_9_moment__().format('LT');
        // console.log(this.fim - this.inicio);
    };
    AssuntoPage.prototype.carregarPontuacao = function (chave) {
        return this.db.list('alunos/', function (ref) { return ref.child(chave); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    // public updateNoFirebase(chave: any) {
    //   console.log("Update: ", this.db.database.ref('/desafio').child(chave).update(
    //     { 'aluno': "Deu certo o update 22222" }
    //   ));
    // }
    AssuntoPage.prototype.selecionaAssunto = function (selassunto, indice) {
        //console.log(selassunto);
        this.inicio;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tela_dica_tela_dica__["a" /* TelaDicaPage */].name, {
            assuntoSelecionado: selassunto,
            indiceAssunto: indice
        });
        this.storage.set('assunto', selassunto);
    };
    AssuntoPage.prototype.remove = function () {
        this.storage.remove('stAberto');
        this.storage.remove('alunoStorage');
        this.storage.remove('stDesafio');
        this.storage.remove('id_alunoStorage');
        this.storage.remove('assunto');
        this.storage.remove('pontuacaoTotal');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__auth_auth__["a" /* AuthPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__auth_auth__["a" /* AuthPage */], {});
    };
    AssuntoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assunto',template:/*ion-inline-start:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\assunto\assunto.html"*/`\n<ion-header>\n\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col style="width: 80%"> <span id="fonte_p">{{ aluno }}</span></ion-col>\n       \n        <ion-col style="width: 20%"> \n          <ion-badge color="primary" item-end>{{ pont }} pts</ion-badge>\n          <ion-badge color="secondary" item-end (click)="remove()">Sair</ion-badge>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n  \n   \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <!-- <button [navPush]="\'relatorio-page\'">Relatório</button> -->\n <span id="titulo">Selecione o desafio:</span>\n <div>\n   <!-- <h2>Teste: {{ teste }}</h2> -->\n <ion-item *ngFor="let dado of dbFirebase.dadosDb, let i = index"  (click)="selecionaAssunto(dado.assunto, i)" >\n  <h2><b>{{ dado.assunto }}</b></h2>\n  <label>Tema: {{ dado.tema }}</label>\n  <!-- <ion-badgecolor="primary" item-end>{{ }} pts</ion-badge> -->\n  <ion-badge color="dark" *ngIf="!dbFirebase.statusDesafio[i]" item-end primary>A fazer</ion-badge>\n  <ion-badge color="secondary" *ngIf="dbFirebase.statusDesafio[i]" item-end >Feito!</ion-badge>\n  <ion-icon name="arrow-dropright" item-end></ion-icon>\n  <!-- <label>{{ i }}</label> -->\n  <!-- <ion-badge color="secondary" *ngIf="pontuacaoGlobal.realizado[i]" item-end >Feito!</ion-badge>\n   -->\n</ion-item>\n<button ion-button block (click)="finalizar()">Finalizar</button>\n<p>{{ fim }}</p>\n<!-- <p>Pontuação: {{ pontuacaoGlobal.total }}</p> -->\n</div>\n</ion-content>\n`/*ion-inline-end:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\assunto\assunto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_7__providers_dados_firebase_dados_firebase__["a" /* DadosFirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_dados_alunos_dados_alunos__["a" /* DadosAlunosProvider */]])
    ], AssuntoPage);
    return AssuntoPage;
}());

//# sourceMappingURL=assunto.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelaDicaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mostra_resposta_mostra_resposta__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dados_firebase_dados_firebase__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_alunos_dados_alunos__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TelaDicaPage = (function () {
    function TelaDicaPage(navCtrl, navParams, http, storage, alertCtrl, dbFirebase, db, dbAlunos) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.dbFirebase = dbFirebase;
        this.db = db;
        this.dbAlunos = dbAlunos;
        this.currentIndex = 0;
        this.pontuacao = 0;
        this.dadosDb = [];
        this.ocultar = [];
        this.mostraResultado = false;
        this.statusSlide = [false];
        this.teste = [[0, 0]];
        this.abriu = [];
        this.selassunto = this.navParams.get('assuntoSelecionado');
        this.indice = this.navParams.get('indiceAssunto');
        if (this.indice == 0) {
            //this.abriu1 = true;
            this.dbFirebase.aberto[this.indice] = true;
            this.storage.set('stAberto', this.dbFirebase.aberto);
            //console.log("Abriu 1", this.abriu1);
            console.log(this.dbFirebase.aberto);
        }
        if (this.indice == 1) {
            this.abriu1 = true;
            this.dbFirebase.aberto[this.indice] = true;
            this.storage.set('stAberto', this.dbFirebase.aberto);
            console.log("Abriu 1", this.abriu1);
            console.log(this.dbFirebase.aberto);
        }
        if (this.indice == 2) {
            this.abriu2 = true;
            this.dbFirebase.aberto[this.indice] = true;
            this.storage.set('stAberto', this.dbFirebase.aberto);
            console.log("Abriu 2", this.abriu2);
            console.log(this.dbFirebase.aberto);
        }
        if (this.indice == 3) {
            this.abriu3 = true;
            this.dbFirebase.aberto[this.indice] = true;
            this.storage.set('stAberto', this.dbFirebase.aberto);
            console.log("Abriu 3", this.abriu3);
            console.log(this.dbFirebase.aberto);
        }
        if (this.indice == 4) {
            this.abriu4 = true;
            this.dbFirebase.aberto[this.indice] = true;
            this.storage.set('stAberto', this.dbFirebase.aberto);
            console.log("Abriu 4", this.abriu4);
            console.log(this.dbFirebase.aberto);
        }
        if (this.indice == 5) {
            this.abriu5 = true;
            this.dbFirebase.aberto[this.indice] = true;
            this.storage.set('stAberto', this.dbFirebase.aberto);
            console.log("Abriu 5", this.abriu5);
            console.log(this.dbFirebase.aberto);
        }
        if (this.indice == 6) {
            this.abriu5 = true;
            this.dbFirebase.aberto[this.indice] = true;
            this.storage.set('stAberto', this.dbFirebase.aberto);
            console.log("Abriu 5", this.abriu5);
            console.log(this.dbFirebase.aberto);
        }
        console.log("Indice: ", this.indice);
        this.storage.set('stAbriu1', this.abriu1);
        this.storage.get('stDesafio')
            .then(function (resolve) {
            _this.dbFirebase.statusDesafio = resolve;
        });
        this.storage.get('stAberto')
            .then(function (resolve) {
            _this.dbFirebase.aberto = resolve;
        });
        // this.storage.get('pontDesafio')
        // .then((resolve) => {
        //   this.dbAlunos.pontDesafio = resolve;
        // })
        this.storage.get('id_alunoStorage')
            .then(function (resolve) {
            _this.id_aluno = resolve;
            //console.log("O que tá no ID ALUNO STORAGE: ", this.id_aluno);
        });
        this.storage.get('pontuacaoTotal')
            .then(function (resolve) {
            _this.pont = resolve;
        });
    }
    TelaDicaPage.prototype.abrirAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Resposta',
            inputs: [
                {
                    name: 'resposta_alert',
                    placeholder: 'Digite a resposta'
                }
            ],
            buttons: [
                {
                    text: 'Verificar',
                    handler: function (data) {
                        //console.log(data.resposta_alert);
                        _this.onVerificarResposta(data.resposta_alert);
                    }
                }
            ]
        });
        alert.present();
    };
    TelaDicaPage.prototype.chamarMostraResposta = function (mostraResultado, pontuacao) {
        if (mostraResultado == false) {
            pontuacao = 0;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mostra_resposta_mostra_resposta__["a" /* MostraRespostaPage */].name, {
            mostrar: mostraResultado,
            pontuacaoDica: pontuacao
        });
    };
    TelaDicaPage.prototype.onVerificarResposta = function (valor) {
        this.valor2 = valor.toUpperCase();
        this.valor2 = this.valor2.trim();
        // this.pontuacaoGlobal.realizado[this.indice] = true;
        this.dbFirebase.statusDesafio[this.indice] = true;
        this.storage.set('stDesafio', this.dbFirebase.statusDesafio);
        // console.log("Array dos status desafio: ", this.dbFirebase.statusDesafio);
        // this.storage.set('dado', true);
        // this.pontuacaoGlobal.testarStorage('dado', this.indice);
        switch (this.currentIndex) {
            case 2:
                if (this.dbFirebase.aberto[2] == true) {
                    console.log("deu bom");
                }
                else if (this.resposta == this.valor2) {
                    this.pontuacao = 100;
                    // this.dbAlunos.pontDesafio[this.indice] = this.pontuacao;
                    this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
                    this.chamarMostraResposta(true, this.pontuacao);
                    // this.pontuacaoGlobal.total += this.pontuacao;
                }
                else {
                    this.chamarMostraResposta(false, this.pontuacao);
                }
                break;
            case 3:
                if (this.dbFirebase.aberto[3] == true) {
                    console.log("deu bom");
                }
                else if (this.resposta == this.valor2) {
                    this.pontuacao = 90;
                    // this.dbAlunos.pontDesafio[this.indice] = this.pontuacao;
                    this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
                    // this.statusDesafio = true;
                    this.chamarMostraResposta(true, this.pontuacao);
                    // this.pontuacaoGlobal.total += this.pontuacao;
                }
                else {
                    this.chamarMostraResposta(false, this.pontuacao);
                }
                break;
            case 4:
                if (this.dbFirebase.aberto[4] == true) {
                    console.log("deu bom");
                }
                else if (this.resposta == this.valor2) {
                    this.pontuacao = 80;
                    this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
                    this.chamarMostraResposta(true, this.pontuacao);
                    // this.pontuacaoGlobal.total += this.pontuacao;
                }
                else {
                    this.chamarMostraResposta(false, this.pontuacao);
                }
                break;
            case 5:
                if (this.dbFirebase.aberto[5] == true) {
                    console.log("deu bom");
                }
                else if (this.resposta == this.valor2) {
                    this.pontuacao = 70;
                    this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
                    this.chamarMostraResposta(true, this.pontuacao);
                    // this.pontuacaoGlobal.total += this.pontuacao;
                }
                else {
                    this.chamarMostraResposta(false, this.pontuacao);
                }
                break;
            case 6:
                if (this.resposta == this.valor2) {
                    this.pontuacao = 60;
                    this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
                    this.chamarMostraResposta(true, this.pontuacao);
                    // this.pontuacaoGlobal.total += this.pontuacao;
                }
                else {
                    this.chamarMostraResposta(false, this.pontuacao);
                }
                break;
            case 7:
                if (this.resposta == this.valor2) {
                    this.pontuacao = 50;
                    this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
                    this.chamarMostraResposta(true, this.pontuacao);
                    // this.pontuacaoGlobal.total += this.pontuacao;
                }
                else {
                    this.chamarMostraResposta(false, this.pontuacao);
                }
                break;
            case 8:
                if (this.resposta == this.valor2) {
                    this.pontuacao = 40;
                    this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
                    this.chamarMostraResposta(true, this.pontuacao);
                    // this.pontuacaoGlobal.total += this.pontuacao;
                }
                else {
                    this.chamarMostraResposta(false, this.pontuacao);
                }
                break;
            case 9:
                if (this.resposta == this.valor2) {
                    this.pontuacao = 30;
                    this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
                    this.chamarMostraResposta(true, this.pontuacao);
                    // this.pontuacaoGlobal.total += this.pontuacao;
                }
                else {
                    this.chamarMostraResposta(false, this.pontuacao);
                }
                break;
        }
    };
    TelaDicaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.abriu);
        this.pegarDadosFirebase();
        this.assunto = this.storage.get('assunto');
        this.storage.get('assunto')
            .then(function (resolve) {
            _this.assunto = resolve;
        });
        //console.log("Varíavel assunto 2: ", this.assunto);
        for (var i = 0; i < 9; i++) {
            this.statusSlide[i] = false;
        }
    };
    TelaDicaPage.prototype.mostrarPontuacao = function (chave) {
        this.db.database.ref('/alunos').child(chave).once('value').then(function (snapshot) {
            console.log(snapshot.val().pontuacaoTotal);
        });
    };
    TelaDicaPage.prototype.updateNoFirebase = function (chave, pontuacao, indice) {
        switch (indice) {
            case 0:
                this.pont += pontuacao;
                console.log("Update: ", this.db.database.ref('/alunos').child(chave).update({
                    'pontuacaoTotal': this.pont,
                    '0': pontuacao
                }));
                this.storage.set('pontuacaoTotal', this.pont);
                break;
            case 1:
                this.pont += pontuacao;
                console.log("Update: ", this.db.database.ref('/alunos').child(chave).update({
                    'pontuacaoTotal': this.pont,
                    '1': pontuacao
                }));
                this.storage.set('pontuacaoTotal', this.pont);
                break;
            case 2:
                this.pont += pontuacao;
                console.log("Update: ", this.db.database.ref('/alunos').child(chave).update({
                    'pontuacaoTotal': this.pont,
                    '2': pontuacao
                }));
                this.storage.set('pontuacaoTotal', this.pont);
                break;
            case 3:
                this.pont += pontuacao;
                console.log("Update: ", this.db.database.ref('/alunos').child(chave).update({
                    'pontuacaoTotal': this.pont,
                    '3': pontuacao
                }));
                this.storage.set('pontuacaoTotal', this.pont);
                break;
            case 4:
                this.pont += pontuacao;
                console.log("Update: ", this.db.database.ref('/alunos').child(chave).update({
                    'pontuacaoTotal': this.pont,
                    '4': pontuacao
                }));
                this.storage.set('pontuacaoTotal', this.pont);
                break;
            case 5:
                this.pont += pontuacao;
                console.log("Update: ", this.db.database.ref('/alunos').child(chave).update({
                    'pontuacaoTotal': this.pont,
                    '5': pontuacao
                }));
                this.storage.set('pontuacaoTotal', this.pont);
                break;
            case 6:
                this.pont += pontuacao;
                console.log("Update: ", this.db.database.ref('/alunos').child(chave).update({
                    'pontuacaoTotal': this.pont,
                    '6': pontuacao
                }));
                this.storage.set('pontuacaoTotal', this.pont);
                break;
            case 7:
                this.pont += pontuacao;
                console.log("Update: ", this.db.database.ref('/alunos').child(chave).update({
                    'pontuacaoTotal': this.pont,
                    '7': pontuacao
                }));
                this.storage.set('pontuacaoTotal', this.pont);
                break;
            case 8:
                this.pont += pontuacao;
                console.log("Update: ", this.db.database.ref('/alunos').child(chave).update({
                    'pontuacaoTotal': this.pont,
                    '8': pontuacao
                }));
                this.storage.set('pontuacaoTotal', this.pont);
                break;
            case 9:
                this.pont += pontuacao;
                console.log("Update: ", this.db.database.ref('/alunos').child(chave).update({
                    'pontuacaoTotal': this.pont,
                    '9': pontuacao
                }));
                this.storage.set('pontuacaoTotal', this.pont);
                break;
        }
        //   this.pont += pontuacao;
        //    this.pont += pontuacao;
        //    console.log("E aqui:", this.pont);
        //   //  this.pontTotal += pontuacao;
        //   console.log("TOTAL: ", this.pont);
        // console.log("O que tá na chave: ", chave);
        // console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
        //   { 'pontuacaoTotal': this.pont,
        //      '1': pontuacao}
        // ));
        // this.storage.set('pontuacaoTotal', this.pont);
        // this.db.database.ref('/alunos').child(chave).once('value').then(function(snapshot){
        //   console.log("Mostrou a pontuação: ", snapshot.val().pontuacaoTotal);
        //  });
    };
    TelaDicaPage.prototype.slideChanged = function () {
        var _this = this;
        this.currentIndex = this.slides.getActiveIndex();
        this.statusSlide[this.currentIndex - 1] = true;
        this.statusSlide.push(this.selassunto);
        //console.log(this.statusSlide);
        this.storage.set('stSlides', this.statusSlide);
        // this.teste = [this.selassunto];
        // this.teste.push(true);
        this.storage.get('stSlides')
            .then(function (resolve) {
            _this.dbFirebase.stSlide = resolve;
        });
        // console.log(this.teste);
        // console.log("Index do Slide", this.currentIndex);
        // console.log("Booleano do sliede",this.statusSlide[this.currentIndex] );
    };
    TelaDicaPage.prototype.pegarDadosFirebase = function () {
        var _this = this;
        this.http.get('https://apolo-19fee.firebaseio.com/formulario.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data !== null && data !== undefined) {
                _this.trataDados(data);
            }
        });
    };
    TelaDicaPage.prototype.trataDados = function (dadosfb) {
        this.dadosDb = Object.keys(dadosfb).map(function (i) { return dadosfb[i]; });
        //console.log("Array: ", this.dadosDb);
        for (var i = 0; i < this.dadosDb.length; i++) {
            for (var j = 0; j <= i; j++) {
                if (this.selassunto == this.dadosDb[i]['assunto']) {
                    this.dica1 = this.dadosDb[i]['dica1'];
                    if (this.dica1 == undefined) {
                        this.ocultar[0] = true;
                    }
                    else {
                        this.ocultar[0] = false;
                    }
                    this.dica2 = this.dadosDb[i]['dica2'];
                    if (this.dica2 == undefined) {
                        this.ocultar[1] = true;
                    }
                    else {
                        this.ocultar[1] = false;
                    }
                    this.dica3 = this.dadosDb[i]['dica3'];
                    if (this.dica3 == undefined) {
                        this.ocultar[2] = true;
                    }
                    else {
                        this.ocultar[2] = false;
                    }
                    this.dica4 = this.dadosDb[i]['dica4'];
                    if (this.dica4 == undefined) {
                        this.ocultar[3] = true;
                    }
                    this.dica5 = this.dadosDb[i]['dica5'];
                    if (this.dica5 == undefined) {
                        this.ocultar[4] = true;
                    }
                    this.dica6 = this.dadosDb[i]['dica6'];
                    if (this.dica6 == undefined) {
                        this.ocultar[5] = true;
                    }
                    this.dica7 = this.dadosDb[i]['dica7'];
                    if (this.dica7 == undefined) {
                        this.ocultar[6] = true;
                    }
                    this.dica8 = this.dadosDb[i]['dica8'];
                    if (this.dica8 == undefined) {
                        this.ocultar[7] = true;
                    }
                    this.dica9 = this.dadosDb[i]['dica9'];
                    if (this.dica9 == undefined) {
                        this.ocultar[8] = true;
                    }
                    this.dica10 = this.dadosDb[i]['dica10'];
                    if (this.dica10 == undefined) {
                        this.ocultar[9] = true;
                        //console.log(i, "Tamanho da array: ", this.dadosDb[i]);
                    }
                    this.resposta = this.dadosDb[i]['resposta_correta'];
                    this.resposta = this.resposta.toUpperCase();
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], TelaDicaPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TelaDicaPage.prototype, "content", void 0);
    TelaDicaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tela-dica',template:/*ion-inline-start:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\tela-dica\tela-dica.html"*/`\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title>Dicas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-slides pager="true" (ionSlideDidChange)="slideChanged()">\n    <!-- speed="2000" -->\n    <ion-slide>\n      <div class="slide-zoom">\n        <ion-item color="light">\n          <label>DICA 01</label>\n        </ion-item>\n        <ion-grid>\n          <ion-row style="height: 80%" align-items-center>\n            <ion-col>\n              <h2>{{ dica1 }}</h2>\n            </ion-col>\n          </ion-row>\n          <ion-row style="height: 20%" align-items-center>\n            <ion-col col-8>\n\n            </ion-col>\n            <ion-col>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n      </div>\n    </ion-slide>\n\n    <div *ngIf="!ocultar[1]">\n      <ion-slide>\n        <div class="slide-zoom">\n          <ion-item color="light">\n            <label>DICA 02</label>\n          </ion-item>\n          <ion-grid>\n            <ion-row style="height: 80%" align-items-center>\n              <ion-col>\n                <h2>{{ dica2 }}</h2>\n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 20%" align-items-center>\n              <ion-col col-8>\n\n              </ion-col>\n              <ion-col>\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-slide>\n    </div>\n\n    <div *ngIf="!ocultar[2]">\n      <ion-slide>\n        <div class="slide-zoom">\n          <ion-item color="light">\n            <label>DICA 03</label>\n          </ion-item>\n          <ion-grid>\n            <ion-row style="height: 80%" align-items-center>\n              <ion-col>\n               \n                    <h2>{{ dica3 }}</h2>\n                 \n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 20%" align-items-center>\n              <ion-col>\n                <button *ngIf="!dbFirebase.statusDesafio[indice] && !statusSlide[2]" ion-button block (click)="abrirAlert()">Responder</button>\n                <!-- <button ion-button block (click)="abrirAlert()">Responder</button> -->\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-slide>\n    </div>\n\n    <div *ngIf="!ocultar[3]">\n      <ion-slide>\n        <div class="slide-zoom">\n          <ion-item color="light">\n            <label>DICA 04</label>\n          </ion-item>\n          <ion-grid>\n            <ion-row style="height: 80%" align-items-center>\n              <ion-col>\n               \n                    <h2>{{ dica4 }}</h2>\n                   \n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 20%" align-items-center>\n             <ion-col>\n             \n             \n              <button *ngIf="!dbFirebase.statusDesafio[indice] && !statusSlide[3]" ion-button block (click)="abrirAlert()">Responder</button>\n              <!-- <button ion-button block (click)="abrirAlert()">Responder</button> -->\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-slide>\n    </div>\n\n    <div *ngIf="!ocultar[4]">\n      <ion-slide>\n        <div class="slide-zoom">\n          <ion-item color="light">\n            <label>DICA 05</label>\n          </ion-item>\n          <ion-grid>\n            <ion-row style="height: 80%" align-items-center>\n              <ion-col>\n                <h2>{{ dica5 }}</h2>\n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 20%" align-items-center>\n             \n              <ion-col>\n                <button *ngIf="!dbFirebase.statusDesafio[indice] && !statusSlide[4]" ion-button block (click)="abrirAlert()">Responder</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-slide>\n    </div>\n\n  <div *ngIf="!ocultar[5]">\n      <ion-slide>\n        <div class="slide-zoom">\n          <ion-item color="light">\n            <label>DICA 06</label>\n          </ion-item>\n          <ion-grid>\n            <ion-row style="height: 80%" align-items-center>\n              <ion-col>\n               \n                    <h2>{{ dica6 }}</h2>\n                 \n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 20%" align-items-center>\n              <ion-col>\n                <button *ngIf="!dbFirebase.statusDesafio[indice] && !statusSlide[5]" ion-button block (click)="abrirAlert()">Responder</button>\n               \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-slide>\n    </div>\n\n    <div *ngIf="!ocultar[6]">\n      <ion-slide>\n        <div class="slide-zoom">\n          <ion-item color="light">\n            <label>DICA 07</label>\n          </ion-item>\n          <ion-grid>\n            <ion-row style="height: 80%" align-items-center>\n              <ion-col>\n               \n                    <h2>{{ dica7 }}</h2>\n                 \n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 20%" align-items-center>\n              <ion-col>\n                <button *ngIf="!dbFirebase.statusDesafio[indice] && !statusSlide[6]" ion-button block (click)="abrirAlert()">Responder</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-slide>\n    </div>\n\n    <div *ngIf="!ocultar[7]">\n      <ion-slide>\n        <div class="slide-zoom">\n          <ion-item color="light">\n            <label>DICA 08</label>\n          </ion-item>\n          <ion-grid>\n            <ion-row style="height: 80%" align-items-center>\n              <ion-col>\n               \n                    <h2>{{ dica8 }}</h2>\n                 \n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 20%" align-items-center>\n              <ion-col>\n                <button *ngIf="!dbFirebase.statusDesafio[indice] && !statusSlide[7]" ion-button block (click)="abrirAlert()">Responder</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-slide>\n    </div>\n\n    <div *ngIf="!ocultar[8]">\n      <ion-slide>\n        <div class="slide-zoom">\n          <ion-item color="light">\n            <label>DICA 09</label>\n          </ion-item>\n          <ion-grid>\n            <ion-row style="height: 80%" align-items-center>\n              <ion-col>\n               \n                    <h2>{{ dica9 }}</h2>\n                 \n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 20%" align-items-center>\n              <ion-col>\n                <button *ngIf="!dbFirebase.statusDesafio[indice] && !statusSlide[8]" ion-button block (click)="abrirAlert()">Responder</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-slide>\n    </div>\n\n     <div *ngIf="!ocultar[9]">\n      <ion-slide>\n        <div class="slide-zoom">\n          <ion-item color="light">\n            <label>DICA 10</label>\n          </ion-item>\n          <ion-grid>\n            <ion-row style="height: 80%" align-items-center>\n              <ion-col>\n               \n                    <h2>{{ dica10}}</h2>\n                 \n              </ion-col>\n            </ion-row>\n            <ion-row style="height: 20%" align-items-center>\n              <ion-col>\n                <button *ngIf="!dbFirebase.statusDesafio[indice]" ion-button block (click)="abrirAlert()">Responder</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-slide>\n     \n    </div>\n\n  </ion-slides>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\tela-dica\tela-dica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_dados_firebase_dados_firebase__["a" /* DadosFirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_7__providers_dados_alunos_dados_alunos__["a" /* DadosAlunosProvider */]])
    ], TelaDicaPage);
    return TelaDicaPage;
}());

//# sourceMappingURL=tela-dica.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostraRespostaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assunto_assunto__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MostraRespostaPage = (function () {
    function MostraRespostaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mostraAcerto = this.navParams.get('mostrar');
        this.pontuacaoFeita = this.navParams.get('pontuacaoDica');
        //console.log("Mostra: ", this.mostraAcerto);
        // this.mostraPontuacao = this.pontuacaoGlobal.total;
    }
    MostraRespostaPage.prototype.ionViewDidLoad = function () {
    };
    MostraRespostaPage.prototype.mostraDesafios = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assunto_assunto__["a" /* AssuntoPage */], {});
    };
    MostraRespostaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mostra-resposta',template:/*ion-inline-start:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\mostra-resposta\mostra-resposta.html"*/`<ion-content *ngIf="mostraAcerto" padding>\n\n  <ion-grid>\n    <ion-row responsive-sm>\n      <ion-col><img src="assets/imgs/APOLO_feliz.png"></ion-col>\n    </ion-row>\n\n    <ion-row responsive-sm>\n      <ion-col>\n        <h2 style="color: #32db64"> Você fez: <br /> {{ pontuacaoFeita }} pts.</h2>\n\n      </ion-col>\n    </ion-row>\n    <ion-row responsive-sm>\n      <ion-col>\n        <button ion-button block color="light" size="large" (click)="mostraDesafios()">Voltar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf="!mostraAcerto" padding>\n\n  <ion-grid>\n    <ion-row responsive-sm>\n      <ion-col> <img src="assets/imgs/APOLO_triste.png">\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row responsive-sm>\n      <ion-col>\n        <h2 style="color: #f53d3d"> Não foi dessa vez! <br /> {{ pontuacaoFeita }} pts.</h2><br />\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="light" size="large" (click)="mostraDesafios()">Voltar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<!-- <ion-content  *ngIf="mostraAcerto" style="background-color: #23E84D" padding>\n   \n \n    <ion-grid>\n      <ion-row responsive-sm>\n        <ion-col>\n          <h1>ACERTOU! </h1>\n        </ion-col>\n      </ion-row>\n      <ion-row responsive-sm>\n        <ion-col>\n          <h2> Você fez: <br /> {{ pontuacaoFeita }} pts.</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row responsive-sm>\n        <ion-col>\n         <h2>Total:  <br />{{ mostraPontuacao }} </h2>\n        </ion-col>\n      </ion-row>\n      <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button block color="light" size="large" (click)="mostraDesafios()">Voltar</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content> -->\n\n<!-- <ion-content  *ngIf="!mostraAcerto" style="background-color: #EB5E4C" padding>\n  \n    <ion-grid>\n      <ion-row responsive-sm>\n        <ion-col>\n         <h1>NÃO FOI DESSA VEZ!  </h1>\n        </ion-col>\n      </ion-row>\n      <ion-row responsive-sm>\n        <ion-col>\n          <h2> Você fez: <br /> {{ pontuacaoFeita }} pts.</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row responsive-sm>\n        <ion-col>\n          <h2>Total:  <br />{{ mostraPontuacao }} </h2>\n        </ion-col>\n      </ion-row>\n      <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button block color="light" size="large" (click)="mostraDesafios()">Voltar</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content> -->\n\n<!--  \n  <div *ngIf="mostraAcerto">\n        <p>Acertou!\n          {{ mostraPontuacao }}\n        </p>\n        <button ion-button block (click)="mostraDesafios()">Voltar para os desafios</button>\n      </div>\n    \n      <div *ngIf="!mostraAcerto">\n        <p>Errou!</p>\n        <button ion-button block (click)="mostraDesafios()">Voltar para os desafios</button>\n      </div>\n      -->`/*ion-inline-end:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\mostra-resposta\mostra-resposta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MostraRespostaPage);
    return MostraRespostaPage;
}());

//# sourceMappingURL=mostra-resposta.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
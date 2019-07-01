webpackJsonp([6],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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








var AuthPage = (function () {
    function AuthPage(navCtrl, formbuilder, formbuilder2, navParams, db, storage, dbAlunos) {
        this.navCtrl = navCtrl;
        this.formbuilder = formbuilder;
        this.formbuilder2 = formbuilder2;
        this.navParams = navParams;
        this.db = db;
        this.storage = storage;
        this.dbAlunos = dbAlunos;
        this.stSessao = true;
        this.now = __WEBPACK_IMPORTED_MODULE_6_moment__().format('MMMM Do YYYY, h:mm:ss a');
        this.existe();
        this.alunos = this.formbuilder.group({
            aluno: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25)]],
            matricula: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            pontuacaoTotal: 0,
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            dataAcesso: this.now
        });
        // this.desafio = this.formbuilder2.group({
        //   numero: 0,
        //   aluno: "",
        //   status: false,
        //   pontuacaoDesafio: 0
        // })
    }
    AuthPage.prototype.entrar = function () {
        //console.log("Valores", this.alunos.value);
        var _this = this;
        this.storage.set('alunoStorage', this.alunos.value.aluno);
        this.db.database.ref('/alunos').push(this.alunos.value)
            .then(function (res) {
            //console.log('salvou');
            //console.log(res.key);
            _this.pontuacaoTotal = _this.alunos.value.pontuacaoTotal;
            _this.storage.set('pontuacaoTotal', _this.pontuacaoTotal);
            _this.id_aluno = res.key;
            _this.storage.set('id_alunoStorage', _this.id_aluno);
            // console.log("ID ALUNO: ", this.id_aluno);
            //this.relatorio.reset();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], {});
            //this.navCtrl.push(HomePage, {});
            //this.storage.set('aluno', );
        });
        // this.criar();
    };
    // criar() {
    //   this.db.database.ref('/desafio').push(this.desafio.value)
    //     .then((res2) => {
    //       console.log('salvou');
    //       console.log(res2);
    //     })
    // }
    AuthPage.prototype.existe = function () {
        var _this = this;
        this.storage.get('alunoStorage')
            .then(function (res) {
            if (res) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], {});
                //this.stSessao = true;
                _this.aluno = res;
            }
            else {
                _this.stSessao = false;
            }
        });
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\auth\auth.html"*/`<ion-content padding>\n  <!-- <formulario></formulario> -->\n  <div *ngIf="!stSessao">\n\n    <ion-grid>\n      <ion-row responsive-sm>\n        <ion-col>\n          <img src="assets/imgs/APOLO.png">\n        </ion-col>\n      </ion-row>\n      <ion-row responsive-sm>\n        <ion-col>\n            <div>\n                <form novalidate [formGroup]="alunos" (ngSubmit)="entrar()">\n                  <ion-list>\n                    <ion-item>\n                      <ion-input type="text" placeholder="aluno" formControlName="aluno"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-input type="text" placeholder="matricula" formControlName="matricula"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                  <button type="submit" ion-button [disabled]="alunos.invalid" block color="dark" >Entrar</button>\n                </form>\n              </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </div>\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\auth\auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_dados_alunos_dados_alunos__["a" /* DadosAlunosProvider */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_alunos_dados_alunos__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, storage, dbAlunos) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.dbAlunos = dbAlunos;
        this.aluno = this.storage.get('alunoStorage');
        //console.log('O que tá no storage', this.aluno);
        this.storage.get('alunoStorage')
            .then(function (resolve) {
            _this.aluno = resolve;
        });
        // this.dbAlunos.pegarDadosAlunos();
        // this.dbAlunos.pegarDadosDesafios();
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span id="fonte_p">{{ aluno }}</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="card-background-page">\n    \n        <label>Selecione a matéria:</label>\n     \n  <ion-card [navPush]="\'assunto-page\'">\n      <div class="card-title">GEOGRAFIA</div>\n  </ion-card>\n\n  <!-- <formulario></formulario> -->\n</ion-content>`/*ion-inline-end:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dados_alunos_dados_alunos__["a" /* DadosAlunosProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assunto/assunto.module": [
		852,
		2
	],
	"../pages/auth/auth.module": [
		851,
		5
	],
	"../pages/mostra-aluno/mostra-aluno.module": [
		853,
		4
	],
	"../pages/mostra-resposta/mostra-resposta.module": [
		854,
		1
	],
	"../pages/relatorio/relatorio.module": [
		855,
		3
	],
	"../pages/tela-dica/tela-dica.module": [
		856,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_auth_auth__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_auth_auth__["a" /* AuthPage */];
        this.handleSplashScreen();
    }
    MyApp.prototype.handleSplashScreen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1, splash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // wait for App to finish loading
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        // wait for App to finish loading
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Platform initialization bug');
                        return [3 /*break*/, 3];
                    case 3:
                        splash = document.getElementById('splash-screen');
                        splash.style.opacity = '0';
                        setTimeout(function () { splash.remove(); }, 300);
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosFirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DadosFirebaseProvider = (function () {
    function DadosFirebaseProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.dadosDb = [];
        this.statusDesafio = [false];
        this.stSlide = [false];
        this.aberto = [false, false, false, false, false, false, false, false];
        this.pegarDadosFirebase();
        this.existeStatusDesafio();
        console.log("Status desafio: ", this.statusDesafio);
    }
    DadosFirebaseProvider.prototype.pegarDadosFirebase = function () {
        var _this = this;
        this.http.get('https://apolo-19fee.firebaseio.com/formulario.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //console.log(data, 'Dados do firebase');
            //console.log(data);
            if (data !== null && data !== undefined) {
                _this.trataDados(data);
            }
        });
    };
    DadosFirebaseProvider.prototype.trataDados = function (dadosfb) {
        this.dadosDb = Object.keys(dadosfb).map(function (i) {
            //  this.storage.set('dadosStorage', this.dadosDb)
            //console.log(i);
            dadosfb[i]._id = i;
            // console.log("Array Temas: ",dadosfb[i]);
            return dadosfb[i];
        });
    };
    DadosFirebaseProvider.prototype.existeStatusDesafio = function () {
        var _this = this;
        this.storage.get('stDesafio')
            .then(function (res) {
            if (res) {
                //this.stSessao = true;
                _this.statusDesafio = res;
            }
            else {
                _this.storage.set('stDesafio', _this.statusDesafio);
            }
        });
        this.storage.get('stAberto')
            .then(function (res) {
            if (res) {
                //this.stSessao = true;
                _this.aberto = res;
            }
            else {
                _this.storage.set('stAberto', _this.aberto);
            }
        });
    };
    DadosFirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DadosFirebaseProvider);
    return DadosFirebaseProvider;
}());

//# sourceMappingURL=dados-firebase.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(504);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_auth_auth__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_components_module__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_dados_firebase_dados_firebase__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_dados_alunos_dados_alunos__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var config = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCUroGnlkzHKkBRy5MYiq74snURqar3ERY',
        authDomain: 'apolo-19fee.firebaseapp.com',
        databaseURL: 'https://apolo-19fee.firebaseio.com',
        projectId: 'apolo-19fee',
        storageBucket: 'apolo-19fee.appspot.com',
        messagingSenderId: '439325195923'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_auth_auth__["a" /* AuthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'auth-page', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assunto/assunto.module#AssuntoPageModule', name: 'assunto-page', segment: 'assunto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mostra-aluno/mostra-aluno.module#MostraAlunoPageModule', name: 'MostraAlunoPage', segment: 'mostra-aluno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mostra-resposta/mostra-resposta.module#MostraRespostaPageModule', name: 'MostraRespostaPage', segment: 'mostra-resposta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/relatorio/relatorio.module#RelatorioPageModule', name: 'relatorio-page', segment: 'relatorio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tela-dica/tela-dica.module#TelaDicaPageModule', name: 'TelaDicaPage', segment: 'tela-dica', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(config.firebase),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_13__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_auth_auth__["a" /* AuthPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabase"],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_dados_firebase_dados_firebase__["a" /* DadosFirebaseProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_dados_alunos_dados_alunos__["a" /* DadosAlunosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 326,
	"./af.js": 326,
	"./ar": 327,
	"./ar-dz": 328,
	"./ar-dz.js": 328,
	"./ar-kw": 329,
	"./ar-kw.js": 329,
	"./ar-ly": 330,
	"./ar-ly.js": 330,
	"./ar-ma": 331,
	"./ar-ma.js": 331,
	"./ar-sa": 332,
	"./ar-sa.js": 332,
	"./ar-tn": 333,
	"./ar-tn.js": 333,
	"./ar.js": 327,
	"./az": 334,
	"./az.js": 334,
	"./be": 335,
	"./be.js": 335,
	"./bg": 336,
	"./bg.js": 336,
	"./bm": 337,
	"./bm.js": 337,
	"./bn": 338,
	"./bn.js": 338,
	"./bo": 339,
	"./bo.js": 339,
	"./br": 340,
	"./br.js": 340,
	"./bs": 341,
	"./bs.js": 341,
	"./ca": 342,
	"./ca.js": 342,
	"./cs": 343,
	"./cs.js": 343,
	"./cv": 344,
	"./cv.js": 344,
	"./cy": 345,
	"./cy.js": 345,
	"./da": 346,
	"./da.js": 346,
	"./de": 347,
	"./de-at": 348,
	"./de-at.js": 348,
	"./de-ch": 349,
	"./de-ch.js": 349,
	"./de.js": 347,
	"./dv": 350,
	"./dv.js": 350,
	"./el": 351,
	"./el.js": 351,
	"./en-SG": 352,
	"./en-SG.js": 352,
	"./en-au": 353,
	"./en-au.js": 353,
	"./en-ca": 354,
	"./en-ca.js": 354,
	"./en-gb": 355,
	"./en-gb.js": 355,
	"./en-ie": 356,
	"./en-ie.js": 356,
	"./en-il": 357,
	"./en-il.js": 357,
	"./en-nz": 358,
	"./en-nz.js": 358,
	"./eo": 359,
	"./eo.js": 359,
	"./es": 360,
	"./es-do": 361,
	"./es-do.js": 361,
	"./es-us": 362,
	"./es-us.js": 362,
	"./es.js": 360,
	"./et": 363,
	"./et.js": 363,
	"./eu": 364,
	"./eu.js": 364,
	"./fa": 365,
	"./fa.js": 365,
	"./fi": 366,
	"./fi.js": 366,
	"./fo": 367,
	"./fo.js": 367,
	"./fr": 368,
	"./fr-ca": 369,
	"./fr-ca.js": 369,
	"./fr-ch": 370,
	"./fr-ch.js": 370,
	"./fr.js": 368,
	"./fy": 371,
	"./fy.js": 371,
	"./ga": 372,
	"./ga.js": 372,
	"./gd": 373,
	"./gd.js": 373,
	"./gl": 374,
	"./gl.js": 374,
	"./gom-latn": 375,
	"./gom-latn.js": 375,
	"./gu": 376,
	"./gu.js": 376,
	"./he": 377,
	"./he.js": 377,
	"./hi": 378,
	"./hi.js": 378,
	"./hr": 379,
	"./hr.js": 379,
	"./hu": 380,
	"./hu.js": 380,
	"./hy-am": 381,
	"./hy-am.js": 381,
	"./id": 382,
	"./id.js": 382,
	"./is": 383,
	"./is.js": 383,
	"./it": 384,
	"./it-ch": 385,
	"./it-ch.js": 385,
	"./it.js": 384,
	"./ja": 386,
	"./ja.js": 386,
	"./jv": 387,
	"./jv.js": 387,
	"./ka": 388,
	"./ka.js": 388,
	"./kk": 389,
	"./kk.js": 389,
	"./km": 390,
	"./km.js": 390,
	"./kn": 391,
	"./kn.js": 391,
	"./ko": 392,
	"./ko.js": 392,
	"./ku": 393,
	"./ku.js": 393,
	"./ky": 394,
	"./ky.js": 394,
	"./lb": 395,
	"./lb.js": 395,
	"./lo": 396,
	"./lo.js": 396,
	"./lt": 397,
	"./lt.js": 397,
	"./lv": 398,
	"./lv.js": 398,
	"./me": 399,
	"./me.js": 399,
	"./mi": 400,
	"./mi.js": 400,
	"./mk": 401,
	"./mk.js": 401,
	"./ml": 402,
	"./ml.js": 402,
	"./mn": 403,
	"./mn.js": 403,
	"./mr": 404,
	"./mr.js": 404,
	"./ms": 405,
	"./ms-my": 406,
	"./ms-my.js": 406,
	"./ms.js": 405,
	"./mt": 407,
	"./mt.js": 407,
	"./my": 408,
	"./my.js": 408,
	"./nb": 409,
	"./nb.js": 409,
	"./ne": 410,
	"./ne.js": 410,
	"./nl": 411,
	"./nl-be": 412,
	"./nl-be.js": 412,
	"./nl.js": 411,
	"./nn": 413,
	"./nn.js": 413,
	"./pa-in": 414,
	"./pa-in.js": 414,
	"./pl": 415,
	"./pl.js": 415,
	"./pt": 416,
	"./pt-br": 417,
	"./pt-br.js": 417,
	"./pt.js": 416,
	"./ro": 418,
	"./ro.js": 418,
	"./ru": 419,
	"./ru.js": 419,
	"./sd": 420,
	"./sd.js": 420,
	"./se": 421,
	"./se.js": 421,
	"./si": 422,
	"./si.js": 422,
	"./sk": 423,
	"./sk.js": 423,
	"./sl": 424,
	"./sl.js": 424,
	"./sq": 425,
	"./sq.js": 425,
	"./sr": 426,
	"./sr-cyrl": 427,
	"./sr-cyrl.js": 427,
	"./sr.js": 426,
	"./ss": 428,
	"./ss.js": 428,
	"./sv": 429,
	"./sv.js": 429,
	"./sw": 430,
	"./sw.js": 430,
	"./ta": 431,
	"./ta.js": 431,
	"./te": 432,
	"./te.js": 432,
	"./tet": 433,
	"./tet.js": 433,
	"./tg": 434,
	"./tg.js": 434,
	"./th": 435,
	"./th.js": 435,
	"./tl-ph": 436,
	"./tl-ph.js": 436,
	"./tlh": 437,
	"./tlh.js": 437,
	"./tr": 438,
	"./tr.js": 438,
	"./tzl": 439,
	"./tzl.js": 439,
	"./tzm": 440,
	"./tzm-latn": 441,
	"./tzm-latn.js": 441,
	"./tzm.js": 440,
	"./ug-cn": 442,
	"./ug-cn.js": 442,
	"./uk": 443,
	"./uk.js": 443,
	"./ur": 444,
	"./ur.js": 444,
	"./uz": 445,
	"./uz-latn": 446,
	"./uz-latn.js": 446,
	"./uz.js": 445,
	"./vi": 447,
	"./vi.js": 447,
	"./x-pseudo": 448,
	"./x-pseudo.js": 448,
	"./yo": 449,
	"./yo.js": 449,
	"./zh-cn": 450,
	"./zh-cn.js": 450,
	"./zh-hk": 451,
	"./zh-hk.js": 451,
	"./zh-tw": 452,
	"./zh-tw.js": 452
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 820;

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formulario_formulario__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__formulario_formulario__["a" /* FormularioComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__formulario_formulario__["a" /* FormularioComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormularioComponent = (function () {
    function FormularioComponent(formbuilder, db, navCtrl) {
        this.formbuilder = formbuilder;
        this.db = db;
        this.navCtrl = navCtrl;
        this.formulario = this.formbuilder.group({
            assunto: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            tema: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            dica1: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            dica2: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            dica3: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            dica4: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            dica5: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            dica6: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            dica7: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            dica8: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            dica9: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            dica10: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            resposta_correta: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    }
    FormularioComponent.prototype.cadastrar = function () {
        var _this = this;
        console.log(this.formulario.value);
        this.db.database.ref('/formulario').push(this.formulario.value)
            .then(function () {
            console.log('salvou');
            _this.formulario.reset();
        });
    };
    FormularioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'formulario',template:/*ion-inline-start:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\components\formulario\formulario.html"*/`<!-- Generated template for the FormularioComponent component -->\n<div>\n  <form [formGroup]="formulario" (ngSubmit)="cadastrar()">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="Descrição" formControlName="assunto"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="tema" formControlName="tema"></ion-input>\n      </ion-item>\n      \n        <ion-item>\n          <ion-input type="text" placeholder="dica 01" formControlName="dica1"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="dica 02" formControlName="dica2"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="dica 03" formControlName="dica3"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="dica 04" formControlName="dica4"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="dica 05" formControlName="dica5"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="dica 06" formControlName="dica6"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="dica 07" formControlName="dica7"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="dica 08" formControlName="dica8"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="dica 09" formControlName="dica9"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="dica 10" formControlName="dica10"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Resposta" formControlName="resposta_correta"></ion-input>\n        </ion-item>\n\n    </ion-list>\n    <button type="submit" ion-button block>Salvar</button>\n  </form>\n</div>\n\n\n`/*ion-inline-end:"C:\Users\Marcus Vinicius\Documents\Curso ionic\apolo_v5\src\components\formulario\formulario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
    ], FormularioComponent);
    return FormularioComponent;
}());

//# sourceMappingURL=formulario.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosAlunosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DadosAlunosProvider = (function () {
    // public pontDesafio: [];
    // private PATH = 'desafio/'
    function DadosAlunosProvider(http, db, storage) {
        var _this = this;
        this.http = http;
        this.db = db;
        this.storage = storage;
        this.dados_alunos = [];
        this.dados_desafios = [];
        this.pegarDadosAlunos();
        this.pegarDadosDesafios();
        // this.existePontDesafio();
        //console.log("O que tem agora DADOS", this.id_aluno);
        if (this.id_aluno == undefined) {
            this.storage.get('id_alunoStorage')
                .then(function (resolve) {
                _this.id_aluno = resolve;
                //console.log("O que tá no ID ALUNO STORAGE do DADOS ALUNOS PROVEDER: ", this.id_aluno);
                // this.pegarPontuacaoTotal(this.id_aluno);
            });
        }
    }
    DadosAlunosProvider.prototype.carregarRelatorio = function () {
        for (var i = 0; i < this.dados_alunos.length; i++) {
            this.dados_alunos[i]['aluno'];
            this.dados_alunos[i]['pontuacaoTotal'];
        }
    };
    // public pegarChave(){
    //  this.db.object(this.PATH).snapshotChanges()
    //   .map(c => {
    //     console.log("Que diaxo é isso: ", { key: c.key, ...c.payload.val()});
    //    return { key: c.key, ...c.payload.val()};
    //   });
    // }
    DadosAlunosProvider.prototype.pegarDadosAlunos = function () {
        var _this = this;
        this.http.get('https://apolo-19fee.firebaseio.com/alunos.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //console.log(data, 'Dados Alunos');
            //console.log(data);
            if (data !== null && data !== undefined) {
                _this.trataDados(data);
            }
        });
    };
    DadosAlunosProvider.prototype.trataDados = function (ddalunos) {
        this.dados_alunos = Object.keys(ddalunos).map(function (i) {
            ddalunos[i]._id = i;
            // console.log('Array alunos: ', ddalunos[i]);
            return ddalunos[i];
        });
    };
    DadosAlunosProvider.prototype.pegarDadosDesafios = function () {
        var _this = this;
        this.http.get('https://apolo-19fee.firebaseio.com/desafio.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //console.log(data, 'Dados Desafios');
            //console.log(data);
            if (data !== null && data !== undefined) {
                _this.trataDadosDesafio(data);
            }
        });
    };
    DadosAlunosProvider.prototype.trataDadosDesafio = function (dadosfb) {
        this.dados_desafios = Object.keys(dadosfb).map(function (i) { return dadosfb[i]; });
        // console.log('Array Desafios: ', this.dados_desafios);
    };
    DadosAlunosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], DadosAlunosProvider);
    return DadosAlunosProvider;
}());

//# sourceMappingURL=dados-alunos.js.map

/***/ })

},[499]);
//# sourceMappingURL=main.js.map
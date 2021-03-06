(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aula-aula-module"],{

/***/ "./src/app/aula/aula.module.ts":
/*!*************************************!*\
  !*** ./src/app/aula/aula.module.ts ***!
  \*************************************/
/*! exports provided: AulaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AulaPageModule", function() { return AulaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aula_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aula.page */ "./src/app/aula/aula.page.ts");







var routes = [
    {
        path: '',
        component: _aula_page__WEBPACK_IMPORTED_MODULE_6__["AulaPage"]
    }
];
var AulaPageModule = /** @class */ (function () {
    function AulaPageModule() {
    }
    AulaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aula_page__WEBPACK_IMPORTED_MODULE_6__["AulaPage"]]
        })
    ], AulaPageModule);
    return AulaPageModule;
}());



/***/ }),

/***/ "./src/app/aula/aula.page.html":
/*!*************************************!*\
  !*** ./src/app/aula/aula.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"fonte\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>{{ labels.titulo[idiomaPadrao] }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content onload=\"evento()\" padding class=\"fonte\">\n  <ion-card padding>\n    <div *ngIf=\"instrutor.getAulaAberta() == true\">\n      <ion-label style=\"margin-top: 20px;\"\n        >{{ labels.data[idiomaPadrao] }}: {{ data_aula }}</ion-label\n      >\n\n      <ion-label>\n        <h2>{{ labels.tecnicas[idiomaPadrao] }}:</h2>\n      </ion-label>\n      <br />\n\n      <ion-content class=\"lista\">\n        <ion-list *ngFor=\"let _tecnica of tecnicasVimeo\">\n          <ion-item \n            (click)=\"abreVideo(_tecnica.idvimeo, _tecnica.senhavimeo)\"\n            class=\"item item-text-wrap ion-activatable\"\n          >\n            <ion-item class=\"ion-text-wrap\">{{ _tecnica.nome }}</ion-item>\n            <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n          </ion-item>\n        </ion-list>\n      \n      </ion-content>\n\n\n    </div>\n    <div *ngIf=\"instrutor.getAulaAberta() == false\">\n      <ion-card-header text-center>\n        <ion-card-title style=\"font-size:20px\" text-wrap\n          >{{labels.semaulashead[idiomaPadrao]}}.</ion-card-title\n        >\n        <ion-card-subtitle>{{labels.semaulasmsg[idiomaPadrao]}}!</ion-card-subtitle>\n      </ion-card-header>\n    </div>\n  </ion-card>\n\n  <!-- <ion-button size=\"medium\" style=\"--background: #287a9d\" expand=\"block\" class=\"options\">\n   Biblioteca de vídeos\n    <ion-icon name=\"bookmarks\" slot=\"end\"></ion-icon>\n  </ion-button>\n  <ion-button size=\"medium\" style=\"--background: #287a9d\" expand=\"block\" class=\"options\">\n    Evolução dos Alunos\n    <ion-icon name=\"arrow-up\" slot=\"end\"></ion-icon>\n  </ion-button>\n-->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div *ngIf=\"instrutor.getAulaAberta() == true\">\n      <ion-button\n        size=\"default\"\n        color=\"dark\"\n        expand=\"block\"\n        (click)=\"completarAula()\"\n        >{{labels.lista[idiomaPadrao]}} <ion-icon name=\"list\"></ion-icon>\n      </ion-button>\n      <ion-button\n        color=\"dark\"\n        size=\"default\"\n        expand=\"block\"\n        [routerLink]=\"['/qr']\"\n        ><ion-icon slot=\"start\" name=\"qr-scanner\"></ion-icon>{{labels.qr[idiomaPadrao]}}</ion-button\n      >\n      <ion-button color=\"success\" expand=\"block\" (click)=\"checkins()\"\n        >{{labels.ver[idiomaPadrao]}}</ion-button\n      >\n      <ion-button expand=\"block\" size=\"default\" (click)=\"concluir()\"\n        ><ion-icon slot=\"end\" name=\"checkmark\"></ion-icon>{{labels.concluir[idiomaPadrao]}}</ion-button\n      >\n    </div>\n    <div *ngIf=\"instrutor.getAulaAberta() == false\">\n      <ion-button\n        size=\"large\"\n        style=\"--background: black;\"\n        expand=\"block\"\n        (click)=\"novaAula()\"\n        >{{labels.adicionar[idiomaPadrao]}}</ion-button\n      >\n      <ion-button\n        size=\"large\"\n        color=\"success\"\n        expand=\"block\"\n        (click)=\"checkins()\"\n        >{{labels.ver[idiomaPadrao]}}</ion-button\n      >\n    </div>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/aula/aula.page.scss":
/*!*************************************!*\
  !*** ./src/app/aula/aula.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat\");\n.fonte {\n  font-family: 'Montserrat', sans-serif; }\n.options {\n  height: 9%;\n  margin-top: 3vh; }\n.lista {\n  height: 40vh; }\n.centertext {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVsYS9DOlxcVXNlcnNcXEdhYnJpZWxcXERlc2t0b3BcXHByb2pldG9zXFx0b3ppXFx0b3ppX21vYmlsZS9zcmNcXGFwcFxcYXVsYVxcYXVsYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQVk7QUFFWjtFQUNJLHFDQUFxQyxFQUFBO0FBS3pDO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTtBQUluQjtFQUNJLFlBQVksRUFBQTtBQUdoQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXVsYS9hdWxhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCcpO1xuXG4uZm9udGV7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuXG5cbi5vcHRpb25ze1xuICAgIGhlaWdodDogOSU7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuXG59XG5cbi5saXN0YXtcbiAgICBoZWlnaHQ6IDQwdmg7XG59XG5cbi5jZW50ZXJ0ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/aula/aula.page.ts":
/*!***********************************!*\
  !*** ./src/app/aula/aula.page.ts ***!
  \***********************************/
/*! exports provided: aluno, aula_exemplo, conjunto_aula_exemplo, Aula_aberta, tecnicas, aula_nova, AulaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aluno", function() { return aluno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aula_exemplo", function() { return aula_exemplo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjunto_aula_exemplo", function() { return conjunto_aula_exemplo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aula_aberta", function() { return Aula_aberta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tecnicas", function() { return tecnicas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aula_nova", function() { return aula_nova; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AulaPage", function() { return AulaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modalvideo_modalvideo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modalvideo/modalvideo.page */ "./src/app/modalvideo/modalvideo.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _labelsAula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./labelsAula */ "./src/app/aula/labelsAula.ts");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");












var Alunos = /** @class */ (function () {
    function Alunos() {
    }
    return Alunos;
}());
var aula = /** @class */ (function () {
    function aula() {
    }
    return aula;
}());
var aluno = /** @class */ (function () {
    function aluno() {
    }
    return aluno;
}());

var aula_exemplo = /** @class */ (function () {
    function aula_exemplo() {
    }
    return aula_exemplo;
}());

var conjunto_aula_exemplo = /** @class */ (function () {
    function conjunto_aula_exemplo() {
    }
    return conjunto_aula_exemplo;
}());

var Aula_aberta = /** @class */ (function () {
    function Aula_aberta() {
    }
    return Aula_aberta;
}());

var tecnicas = /** @class */ (function () {
    function tecnicas() {
    }
    return tecnicas;
}());

var aula_nova = /** @class */ (function () {
    function aula_nova() {
    }
    return aula_nova;
}());

var erro = /** @class */ (function () {
    function erro() {
    }
    return erro;
}());
var error = /** @class */ (function () {
    function error() {
    }
    return error;
}());
var AulaPage = /** @class */ (function () {
    function AulaPage(modalController, load, menu, httpClient, instrutor, router, _activatedRoute, alertController, storage, platform, statusBar, labels, globalization) {
        this.modalController = modalController;
        this.load = load;
        this.menu = menu;
        this.httpClient = httpClient;
        this.instrutor = instrutor;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.alertController = alertController;
        this.storage = storage;
        this.platform = platform;
        this.statusBar = statusBar;
        this.labels = labels;
        this.globalization = globalization;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "x-version": "1.1.1",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0"
        });
        this.isloading = false;
    }
    AulaPage.prototype.checkIdioma = function () {
        var _this = this;
        this.storage.get("idioma").then(function (res) {
            _this.idiomaPadrao = res;
            if (res == "" || res == null) {
                _this.globalization.getPreferredLanguage().then(function (res) {
                    if (res.value.includes("pt")) {
                        _this.storage.set("idioma", "ptbr");
                        _this.idiomaPadrao = "ptbr";
                    }
                    else if (res.value.includes("en")) {
                        _this.storage.set("idioma", "en");
                        _this.idiomaPadrao = "en";
                    }
                });
            }
        });
    };
    AulaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dismiss();
        this.checkIdioma();
        this.platform.ready().then(function () {
            _this.platform.backButton.subscribeWithPriority(9999, function () {
                document.addEventListener('backbutton', function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    console.log('hello');
                }, false);
            });
            _this.statusBar.styleDefault();
        });
        this.presentLoading();
        this.httpClient
            .get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
            .subscribe(function (data) {
            _this.dismiss();
            _this.idaula = data.id;
            console.log(data);
        });
        this.nome_instrutor = this.instrutor.getNome();
        this.httpClient
            .post(this.instrutor.getUrl() + "/aula.php?idioma=" + this.instrutor.idiomaPadrao, { "": "" }, { responseType: "json", headers: this.headers, observe: "body" })
            .subscribe(function (data) {
            console.log(data);
            _this.data_aula = data.datetime;
            _this.aula_aberta = data.aberto;
            _this.aulaVimeo = data;
            _this.tecnicasVimeo = _this.aulaVimeo.tecnicas;
            _this.instrutor.setAulaAberta(_this.aula_aberta);
            _this.dismiss();
            if (data.aberto == false) {
                _this.aula_nova = data;
            }
            else {
                _this.instrutor.setDatatime(_this.data_aula);
                if (_this.instrutor.getDescricao() == undefined)
                    _this.instrutor.setDescricao(JSON.stringify(data.tecnicas));
            }
        }, function (error) {
            _this.instrutor.error = error.error.error;
            _this.dismiss();
            _this.router.navigate(["/error"]);
        });
    };
    AulaPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modalvideo_modalvideo_page__WEBPACK_IMPORTED_MODULE_6__["ModalvideoPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AulaPage.prototype.msgconcluir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var conclui;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.labels.sucesshead[this.idiomaPadrao],
                            message: this.labels.sucessmsg[this.idiomaPadrao],
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function () {
                                        _this.router.navigateByUrl("/aula");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        conclui = _a.sent();
                        return [4 /*yield*/, conclui.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AulaPage.prototype.msgerroconcluir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var concluierro;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.labels.headererro[this.idiomaPadrao],
                            message: this.labels.headermsg[this.idiomaPadrao],
                            buttons: [{ text: "OK" }]
                        })];
                    case 1:
                        concluierro = _a.sent();
                        return [4 /*yield*/, concluierro.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AulaPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isloading = true;
                        return [4 /*yield*/, this.load.create({
                                message: this.labels.loading[this.idiomaPadrao],
                                duration: 2500
                            })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    AulaPage.prototype.dismiss = function () {
        this.load.dismiss(null, undefined);
    };
    AulaPage.prototype.ngOnInit = function () { };
    AulaPage.prototype.onClick = function () {
        console.log("CLICKOU");
        alert(this.data_aula + "e se está aberta: " + this.aula_aberta);
    };
    AulaPage.prototype.completarAula = function () {
        this.router.navigate(["/manutencao-aula"]);
    };
    AulaPage.prototype.concluir = function () {
        var _this = this;
        if (this.idaula != "") {
            this.presentLoading();
            this.httpClient
                .post(this.instrutor.getUrl() + "/concluir.php", { id: parseInt(this.idaula) }, { observe: "response", headers: this.headers })
                .subscribe(function (data) {
                console.log(data.status);
                _this.instrutor.setAulaAberta(false);
            });
            this.instrutor.setDatatime(this.data_aula);
            this.httpClient
                .post(this.instrutor.getUrl() + "/aula.php?idioma=" + this.idiomaPadrao, { "": "" }, { responseType: "json", headers: this.headers })
                .subscribe(function (data) {
                console.log(data);
                _this.ionViewWillEnter();
            });
            var max;
            this.storage.get("qtdtecnicas").then(function (val) {
                max = val;
            });
            for (var i = 0; i < max; i++) {
                this.storage.remove("tecnica_adicional" + i);
            }
            this.storage.remove("qtdtecnicas");
            this.dismiss();
        }
        else {
            this.msgerroconcluir();
        }
    };
    AulaPage.prototype.formatDate = function (date) {
        var d = new Date(date), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = "0" + month;
        if (day.length < 2)
            day = "0" + day;
        return [year, month, day].join("-");
    };
    AulaPage.prototype.formatZero = function (numero) {
        if (parseInt(numero) < 10) {
            return "0" + numero;
        }
        return numero;
    };
    AulaPage.prototype.novaAula = function () {
        this.presentLoading();
        this.router.navigate(["/nova-aula"]);
    };
    AulaPage.prototype.openMenu = function () {
        alert("aa");
        this.menu.enable(true, "first");
        this.menu.open("first");
    };
    AulaPage.prototype.backPage = function () {
        this.router.navigateByUrl("/aula");
    };
    AulaPage.prototype.abreVideo = function (numeroTecnica, senhavimeo) {
        this.instrutor.setIdVimeo(numeroTecnica);
        this.instrutor.setSenhaVimeo(senhavimeo);
        this.presentModal();
    };
    AulaPage.prototype.checkins = function () {
        this.router.navigateByUrl("/checkins");
    };
    AulaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-aula",
            template: __webpack_require__(/*! ./aula.page.html */ "./src/app/aula/aula.page.html"),
            styles: [__webpack_require__(/*! ./aula.page.scss */ "./src/app/aula/aula.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_3__["NomeInstrutorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
            _labelsAula__WEBPACK_IMPORTED_MODULE_9__["LabelsAula"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_10__["Globalization"]])
    ], AulaPage);
    return AulaPage;
}());



/***/ }),

/***/ "./src/app/aula/labelsAula.ts":
/*!************************************!*\
  !*** ./src/app/aula/labelsAula.ts ***!
  \************************************/
/*! exports provided: Label, LabelsAula */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsAula", function() { return LabelsAula; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsAula = /** @class */ (function () {
    function LabelsAula() {
        this.sucesshead = new Label();
        this.sucessmsg = new Label();
        this.headererro = new Label();
        this.headermsg = new Label();
        this.loading = new Label();
        this.titulo = new Label();
        this.data = new Label();
        this.tecnicas = new Label();
        this.advancadas = new Label();
        this.semaulashead = new Label();
        this.semaulasmsg = new Label();
        this.lista = new Label();
        this.qr = new Label();
        this.ver = new Label();
        this.concluir = new Label();
        this.adicionar = new Label();
        this.sucesshead["ptbr"] = "Sucesso";
        this.sucesshead["en"] = "Success";
        this.sucessmsg["ptbr"] = "Concluido com Sucesso!";
        this.sucessmsg["en"] = "Successfully completed!";
        this.headererro["ptbr"] = "Falhou";
        this.headererro["en"] = "Failed";
        this.headermsg["ptbr"] = "Registre antes de concluir";
        this.headermsg["en"] = "Register before continuing";
        this.loading["ptbr"] = "Aguarde por favor";
        this.loading["en"] = "Please wait";
        this.titulo["ptbr"] = "Página do instrutor";
        this.titulo["en"] = "Instructor page";
        this.data["ptbr"] = "Data da aula";
        this.data["en"] = "Class date";
        this.tecnicas["ptbr"] = "Tecnicas da aula:";
        this.tecnicas["en"] = "Class techniques";
        this.advancadas["ptbr"] = "Avançadas";
        this.advancadas["en"] = "Advanced";
        this.semaulashead["ptbr"] = "Nenhuma aula indentificada";
        this.semaulashead["en"] = "No classes indentified";
        this.semaulasmsg["ptbr"] = "Crie uma aula";
        this.semaulasmsg["en"] = "Create a new class";
        this.lista["ptbr"] = "Lista de Presença";
        this.lista["en"] = "Presence list";
        this.qr["ptbr"] = "Qr code";
        this.qr["en"] = "Qr code";
        this.ver["ptbr"] = "Ver checkins";
        this.ver["en"] = "See checkins";
        this.concluir["ptbr"] = "Concluir aula";
        this.concluir["en"] = "Complete class";
        this.adicionar["ptbr"] = "Adicionar nova aula";
        this.adicionar["en"] = "Add a new class";
    }
    LabelsAula = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsAula);
    return LabelsAula;
}());



/***/ })

}]);
//# sourceMappingURL=aula-aula-module.js.map
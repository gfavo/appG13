(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontdesk-frontdesk-module"],{

/***/ "./src/app/frontdesk/frontdesk.module.ts":
/*!***********************************************!*\
  !*** ./src/app/frontdesk/frontdesk.module.ts ***!
  \***********************************************/
/*! exports provided: FrontdeskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontdeskPageModule", function() { return FrontdeskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _frontdesk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./frontdesk.page */ "./src/app/frontdesk/frontdesk.page.ts");







var routes = [
    {
        path: '',
        component: _frontdesk_page__WEBPACK_IMPORTED_MODULE_6__["FrontdeskPage"]
    }
];
var FrontdeskPageModule = /** @class */ (function () {
    function FrontdeskPageModule() {
    }
    FrontdeskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_frontdesk_page__WEBPACK_IMPORTED_MODULE_6__["FrontdeskPage"]]
        })
    ], FrontdeskPageModule);
    return FrontdeskPageModule;
}());



/***/ }),

/***/ "./src/app/frontdesk/frontdesk.page.html":
/*!***********************************************!*\
  !*** ./src/app/frontdesk/frontdesk.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"fonte\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>{{labels.titulo[idiomaPadrao]}}</ion-title>\n  </ion-toolbar>\n  <ion-item>\n    <ion-label position=\"floating\">{{labels.pesquisenome[idiomaPadrao]}}</ion-label>\n    <ion-input inputmode=\"text\" [(ngModel)]=\"search_string\"></ion-input>\n  </ion-item>\n  <ion-button (click)=\"pesquisa()\" expand=\"block\">\n    {{labels.pesquisar[idiomaPadrao]}}\n    <ion-icon name=\"search\" slot=\"end\"></ion-icon>\n  </ion-button>\n</ion-header>\n<ion-content *ngIf=\"alunos != undefined\" padding>\n  <ion-list *ngFor=\"let aluno of checklist\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>{{ aluno.nome }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button\n          expand=\"block\"\n          class=\"ion-float-right\"\n          (click)=\"checkin(aluno.nome, aluno.id)\"\n        >\n        {{labels.checkin[idiomaPadrao]}}\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/frontdesk/frontdesk.page.scss":
/*!***********************************************!*\
  !*** ./src/app/frontdesk/frontdesk.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZGVzay9mcm9udGRlc2sucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/frontdesk/frontdesk.page.ts":
/*!*********************************************!*\
  !*** ./src/app/frontdesk/frontdesk.page.ts ***!
  \*********************************************/
/*! exports provided: FrontdeskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontdeskPage", function() { return FrontdeskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _labelsFrontdesk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labelsFrontdesk */ "./src/app/frontdesk/labelsFrontdesk.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");








var alunos = /** @class */ (function () {
    function alunos() {
    }
    return alunos;
}());
var conteudo = /** @class */ (function () {
    function conteudo() {
    }
    return conteudo;
}());
var checklist = /** @class */ (function () {
    function checklist() {
    }
    return checklist;
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
var FrontdeskPage = /** @class */ (function () {
    function FrontdeskPage(instrutor, httpClient, alertController, load, storage, globalization, labels) {
        this.instrutor = instrutor;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.load = load;
        this.storage = storage;
        this.globalization = globalization;
        this.labels = labels;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "x-version": "1.1.0",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0"
        });
        this.alunos = undefined;
    }
    FrontdeskPage.prototype.msg = function (head, msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var m;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: head,
                            message: msg,
                            buttons: ["OK"]
                        })];
                    case 1:
                        m = _a.sent();
                        return [4 /*yield*/, m.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FrontdeskPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isloading = true;
                        return [4 /*yield*/, this.load.create({
                                message: this.labels.aguarde[this.idiomaPadrao],
                                duration: 5000
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
    FrontdeskPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isloading = false;
                        return [4 /*yield*/, this.load.dismiss().then(function () { return console.log("dismissed"); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FrontdeskPage.prototype.msgcertezacheckin = function (nome, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var conclui;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.labels.atencao[this.idiomaPadrao],
                            message: this.labels.checkinctz[this.idiomaPadrao] + nome + "?",
                            buttons: [
                                {
                                    text: this.labels.sim[this.idiomaPadrao],
                                    handler: function () {
                                        _this.httpClient
                                            .post(_this.instrutor.getUrl() + "/checkin_frontdesk.php", {
                                            alunoid: id,
                                            aulaid: _this.conteudo.id,
                                            datahorasolicitacao: _this.formatDate(new Date())
                                        }, { responseType: "json", headers: _this.headers, observe: "body" })
                                            .subscribe(function (data) {
                                            console.log(data);
                                            _this.msg(_this.labels.sucesso[_this.idiomaPadrao], _this.labels.checkinsucesso[_this.idiomaPadrao]);
                                        }, function (error) {
                                            _this.msg(_this.labels.erro[_this.idiomaPadrao], error.error.error);
                                        });
                                        _this.alunos = undefined;
                                    }
                                },
                                { text: this.labels.nao[this.idiomaPadrao] }
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
    FrontdeskPage.prototype.formatDate = function (date) {
        var d = new Date(date), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = "0" + month;
        if (day.length < 2)
            day = "0" + day;
        return ([year, month, day].join("-") +
            " " +
            this.formatZero(d.getHours()) +
            ":" +
            this.formatZero(d.getMinutes()));
    };
    FrontdeskPage.prototype.formatZero = function (numero) {
        if (parseInt(numero) < 10) {
            return "0" + numero;
        }
        return numero;
    };
    FrontdeskPage.prototype.ngOnInit = function () { };
    FrontdeskPage.prototype.checkIdioma = function () {
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
    FrontdeskPage.prototype.ionViewWillEnter = function () {
        this.checkIdioma();
    };
    FrontdeskPage.prototype.pesquisa = function () {
        var _this = this;
        this.presentLoading();
        this.httpClient
            .post(this.instrutor.getUrl() + "/aula_filtro.php", { search: this.search_string }, { responseType: "json", headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            _this.alunos = data.alunos;
            _this.checklist = data.alunos;
            _this.conteudo = data;
            _this.checklist.forEach(function (element) { return (element.mandar = false); });
            _this.dismiss();
        });
    };
    FrontdeskPage.prototype.checkin = function (nome, id) {
        this.msgcertezacheckin(nome, id);
    };
    FrontdeskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-frontdesk",
            template: __webpack_require__(/*! ./frontdesk.page.html */ "./src/app/frontdesk/frontdesk.page.html"),
            styles: [__webpack_require__(/*! ./frontdesk.page.scss */ "./src/app/frontdesk/frontdesk.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nome_instrutor_service__WEBPACK_IMPORTED_MODULE_3__["NomeInstrutorService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_7__["Globalization"],
            _labelsFrontdesk__WEBPACK_IMPORTED_MODULE_5__["LabelsFrontdesk"]])
    ], FrontdeskPage);
    return FrontdeskPage;
}());



/***/ }),

/***/ "./src/app/frontdesk/labelsFrontdesk.ts":
/*!**********************************************!*\
  !*** ./src/app/frontdesk/labelsFrontdesk.ts ***!
  \**********************************************/
/*! exports provided: Label, LabelsFrontdesk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsFrontdesk", function() { return LabelsFrontdesk; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsFrontdesk = /** @class */ (function () {
    function LabelsFrontdesk() {
        this.aguarde = new Label();
        this.atencao = new Label();
        this.checkinctz = new Label();
        this.sim = new Label();
        this.sucesso = new Label();
        this.checkinsucesso = new Label();
        this.erro = new Label();
        this.nao = new Label();
        this.titulo = new Label();
        this.pesquisenome = new Label();
        this.pesquisar = new Label();
        this.checkin = new Label();
        this.aguarde["ptbr"] = "Aguarde por favor";
        this.aguarde["en"] = "Please wait";
        this.atencao["ptbr"] = "Atenção";
        this.atencao["en"] = "Warning";
        this.checkinctz["ptbr"] = "Fazer checkin para o aluno";
        this.checkinctz["en"] = "Confirm checkin to";
        this.sim["ptbr"] = "SIM";
        this.sim["en"] = "YES";
        this.sucesso["ptbr"] = "Sucesso";
        this.sucesso["en"] = "Success";
        this.checkinsucesso["ptbr"] = "Seu checkin foi confirmado";
        this.checkinsucesso["ptbr"] = "Your checkin has been confirmed";
        this.erro["ptbr"] = "Erro";
        this.erro["en"] = "Error";
        this.nao["ptbr"] = "Não";
        this.nao["en"] = "No";
        this.titulo["ptbr"] = "Frontdesk";
        this.titulo["en"] = "Frontdesk";
        this.pesquisenome["ptbr"] = "Pesquise pelo seu nome";
        this.pesquisenome["en"] = "Search for your name";
        this.pesquisar["ptbr"] = "Pesquisar";
        this.pesquisar["en"] = "Search";
        this.checkin["ptbr"] = "Checkin";
        this.checkin["en"] = "Checkin";
    }
    LabelsFrontdesk = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsFrontdesk);
    return LabelsFrontdesk;
}());



/***/ })

}]);
//# sourceMappingURL=frontdesk-frontdesk-module.js.map
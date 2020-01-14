(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nova-aula-nova-aula-module"],{

/***/ "./src/app/nova-aula/labelsNovaAula.ts":
/*!*********************************************!*\
  !*** ./src/app/nova-aula/labelsNovaAula.ts ***!
  \*********************************************/
/*! exports provided: Label, LabelsNovaAula */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsNovaAula", function() { return LabelsNovaAula; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsNovaAula = /** @class */ (function () {
    function LabelsNovaAula() {
        this.aulaCriadaHeader = new Label();
        this.aulaCriadaMessage = new Label();
        this.aulaCriadaText = new Label();
        this.alertaDeErroHeader = new Label();
        this.alertaDeErroMessage = new Label();
        this.alertaDeErroText = new Label();
        this.certezaHeader = new Label();
        this.certezaMessage = new Label();
        this.certezaButtonSim = new Label();
        this.certezaButtonNao = new Label();
        this.loadingMessage = new Label();
        this.alertEscolha = new Label();
        this.labelTitulo = new Label();
        this.labelDataDaAula = new Label();
        this.labelAulasSemanais = new Label();
        this.labelDescricaoAula = new Label();
        this.labelTecnicasExtra = new Label();
        this.labelDetalhesAula = new Label();
        this.labelAvancada = new Label();
        this.buttonVoltar = new Label();
        this.buttonCriarAula = new Label();
        this.aguarde = new Label();
        this.aulaCriadaHeader["ptbr"] = "sucesso";
        this.aulaCriadaHeader["en"] = "success";
        this.aulaCriadaMessage["ptbr"] = "Aula criada com sucesso!";
        this.aulaCriadaMessage["en"] = "Class created successfully!";
        this.aulaCriadaText["ptbr"] = "OK";
        this.aulaCriadaText["en"] = "OK";
        this.alertaDeErroHeader["ptbr"] = "Erro";
        this.alertaDeErroHeader["en"] = "Error";
        this.alertaDeErroMessage["ptbr"] = "Adicione uma aula e digite uma descrição para a mesma";
        this.alertaDeErroMessage["en"] = "Add a new class and type a description";
        this.alertaDeErroText["ptbr"] = "OK";
        this.alertaDeErroText["en"] = "OK";
        this.certezaHeader["ptbr"] = "ATENÇÃO";
        this.certezaHeader["en"] = "WARNING";
        this.certezaMessage["ptbr"] = "Tem certeza que deseja criar uma aula?";
        this.certezaMessage["en"] = "Are you sure you want to create a new class?";
        this.certezaButtonSim["ptbr"] = "SIM";
        this.certezaButtonSim["en"] = "YES";
        this.certezaButtonNao["ptbr"] = "NÃO";
        this.certezaButtonNao["en"] = "NO";
        this.aguarde["ptbr"] = "Aguarde por favor";
        this.aguarde["en"] = "Please wait";
        this.alertEscolha["ptbr"] = "Escolha primeiro uma aula semanal!";
        this.alertEscolha["en"] = "Please choose first a weekly class!";
        this.labelTitulo["ptbr"] = "Registre uma nova aula!";
        this.labelTitulo["en"] = "Register a new class!";
        this.labelDataDaAula["ptbr"] = "Data da Aula";
        this.labelDataDaAula["en"] = "Class Date";
        this.labelAulasSemanais["ptbr"] = "Aulas Semanais";
        this.labelAulasSemanais["en"] = "Weekly Classes";
        this.labelDescricaoAula["ptbr"] = "Descrição da aula";
        this.labelDescricaoAula["en"] = "Class description";
        this.labelTecnicasExtra["ptbr"] = "Tecnicas extra";
        this.labelTecnicasExtra["en"] = "Additional techniques";
        this.labelDetalhesAula["ptbr"] = "Detalhes da Aula";
        this.labelDetalhesAula["en"] = "Class Details";
        this.labelAvancada["ptbr"] = "Avançada";
        this.labelAvancada["en"] = "Advanced";
        this.buttonVoltar["ptbr"] = "Voltar";
        this.buttonVoltar["en"] = "Return";
        this.buttonCriarAula["ptbr"] = "Criar aula";
        this.buttonCriarAula["en"] = "Create class";
    }
    LabelsNovaAula = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsNovaAula);
    return LabelsNovaAula;
}());



/***/ }),

/***/ "./src/app/nova-aula/nova-aula.module.ts":
/*!***********************************************!*\
  !*** ./src/app/nova-aula/nova-aula.module.ts ***!
  \***********************************************/
/*! exports provided: NovaAulaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaAulaPageModule", function() { return NovaAulaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nova_aula_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nova-aula.page */ "./src/app/nova-aula/nova-aula.page.ts");







var routes = [
    {
        path: '',
        component: _nova_aula_page__WEBPACK_IMPORTED_MODULE_6__["NovaAulaPage"]
    }
];
var NovaAulaPageModule = /** @class */ (function () {
    function NovaAulaPageModule() {
    }
    NovaAulaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_nova_aula_page__WEBPACK_IMPORTED_MODULE_6__["NovaAulaPage"]]
        })
    ], NovaAulaPageModule);
    return NovaAulaPageModule;
}());



/***/ }),

/***/ "./src/app/nova-aula/nova-aula.page.html":
/*!***********************************************!*\
  !*** ./src/app/nova-aula/nova-aula.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>{{labels.labelTitulo[idiomaPadrao]}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-chip\n    ><ion-label>{{labels.labelDataDaAula[idiomaPadrao]}}: {{ aula.datetime }}</ion-label>\n  </ion-chip>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"backPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <br />\n  <b>{{labels.labelAulasSemanais[idiomaPadrao]}}: </b>\n\n  <ion-item>\n    <ion-select\n      class=\"my-select\"\n      width=\"100%\"\n      placeholder=\"Selecione uma aula\"\n      id=\"_aulaProgramada\"\n      (ionChange)=\"action()\"\n    >\n      <ul *ngFor=\"let aula of aula.aulasProgramadas\">\n        <li>\n          <ion-select-option value=\"{{ aula.titulo }}\">{{\n            aula.titulo\n          }}</ion-select-option>\n        </li>\n      </ul>\n    </ion-select>\n  </ion-item>\n\n  <br />\n\n  <ion-item>\n    <ion-label position=\"stacked\">\n      <h2>{{labels.labelDescricaoAula[idiomaPadrao]}}</h2>\n    </ion-label>\n    <ion-textarea\n      value=\"{{ descricaoPadrao }}\"\n      row=\"2\"\n      id=\"descricao\"\n      required\n    ></ion-textarea>\n  </ion-item>\n\n  <ion-button size=\"default\" (click)=\"mostraModal()\" expand=\"block\">\n    {{labels.labelTecnicasExtra[idiomaPadrao]}}\n  </ion-button>\n\n  <br /><br /><br />\n\n  <ion-footer vertical=\"bottom\">\n    <ion-card *ngIf=\"instrutor.getIdPrograma() != null\" padding>\n      <ion-label position=\"stacked\">\n        <h2><b>{{labels.labelDetalhesAula[idiomaPadrao]}}</b></h2>\n      </ion-label>\n      <h2 id=\"tituloaula\">\n        <b> {{ aula_mostrada.titulo }} -></b>\n      </h2>\n      <ul id=\"tecnicaslista\" *ngFor=\"let _tecnica of aula_mostrada.tecnicas\">\n        <li *ngIf=\"_tecnica.incluir == undefined\" (click)=\"mostracom(_tecnica)\">\n          {{ _tecnica.nome }} <ng-container *ngIf=\"_tecnica.avancada==1\"> - <b>{{labels.labelAvancada[idiomaPadrao]}}</b></ng-container>\n       \n        </li>\n      </ul>\n      <h2 *ngIf=\"this.instrutor.getIdTecnicas().length > 0\">\n        <b> Tecnicas Extra -></b>\n      </h2>\n      <ul id=\"tecnicaslista\" *ngFor=\"let _tecnica of aula_mostrada.tecnicas\">\n        <li *ngIf=\"_tecnica.incluir != undefined\" (click)=\"mostracom(_tecnica)\">\n          {{ _tecnica.nome }}  <ng-container *ngIf=\"_tecnica.avancada==1\"> - <b>{{labels.labelAvancada[idiomaPadrao]}}</b></ng-container>\n        </li>\n      </ul>\n    </ion-card>\n  </ion-footer>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-toolbar>\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-button expand=\"block\" color=\"dark\" (click)=\"voltar()\"\n              ><ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n              {{labels.buttonVoltar[idiomaPadrao]}}\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button expand=\"block\" color=\"dark\" (click)=\"continuar()\"\n              ><ion-icon slot=\"start\" name=\"arrow-forward\"></ion-icon>\n              {{labels.buttonCriarAula[idiomaPadrao]}}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/nova-aula/nova-aula.page.scss":
/*!***********************************************!*\
  !*** ./src/app/nova-aula/nova-aula.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-select {\n  min-width: 70%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92YS1hdWxhL0M6XFxVc2Vyc1xcR2FicmllbFxcRGVza3RvcFxccHJvamV0b3NcXHRvemlcXHRvemlfbW9iaWxlL3NyY1xcYXBwXFxub3ZhLWF1bGFcXG5vdmEtYXVsYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3ZhLWF1bGEvbm92YS1hdWxhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1zZWxlY3Qge1xuICAgIG1pbi13aWR0aDogNzAlO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/nova-aula/nova-aula.page.ts":
/*!*********************************************!*\
  !*** ./src/app/nova-aula/nova-aula.page.ts ***!
  \*********************************************/
/*! exports provided: NovaAulaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaAulaPage", function() { return NovaAulaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modaltecnicas_modaltecnicas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modaltecnicas/modaltecnicas.page */ "./src/app/modaltecnicas/modaltecnicas.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _labelsNovaAula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./labelsNovaAula */ "./src/app/nova-aula/labelsNovaAula.ts");










var NovaAulaPage = /** @class */ (function () {
    function NovaAulaPage(load, http, modalController, instrutor, router, alertController, storage, globalization, labels) {
        this.load = load;
        this.http = http;
        this.modalController = modalController;
        this.instrutor = instrutor;
        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
        this.globalization = globalization;
        this.labels = labels;
        this.data = new Date();
        this.temAdicionais = false;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            "x-version": "1.1.0",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0"
        });
    }
    NovaAulaPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modaltecnicas_modaltecnicas_page__WEBPACK_IMPORTED_MODULE_5__["ModaltecnicasPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NovaAulaPage.prototype.mensagem = function (header, texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: texto,
                            buttons: ["OK"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NovaAulaPage.prototype.aulacriada = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registra;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.labels.aulaCriadaHeader[this.idiomaPadrao],
                            message: this.labels.aulaCriadaMessage[this.idiomaPadrao],
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
                        registra = _a.sent();
                        return [4 /*yield*/, registra.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NovaAulaPage.prototype.alertaDeErro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.labels.alertaDeErroHeader[this.idiomaPadrao],
                            message: this.labels.alertaDeErroMessage[this.idiomaPadrao],
                            buttons: ["OK"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NovaAulaPage.prototype.certeza = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.labels.certezaHeader[this.idiomaPadrao],
                            message: this.labels.certezaMessage[this.idiomaPadrao],
                            buttons: [
                                {
                                    text: this.labels.certezaButtonSim[this.idiomaPadrao],
                                    handler: function () {
                                        //-------------------------------------------------------------------------------
                                        _this.presentLoading();
                                        _this.instrutor.setAulaAberta(true);
                                        _this.http
                                            .post(_this.instrutor.getUrl() + "/registrar.php", {
                                            id: "",
                                            descricao: _this.instrutor.getDescricao(),
                                            datetime: _this.instrutor.getAula().datetime,
                                            idaulaprogramada: _this.instrutor.getIdPrograma(),
                                            alunos: _this.aulaRegistro.alunos,
                                            idtecnicasavulsas: _this.instrutor.getIdTecnicas()
                                        }, { headers: _this.headers })
                                            .subscribe(function (data) {
                                            console.log(data);
                                            _this.dismiss();
                                            _this.aulaRegistro.id = data.id;
                                            _this.aulacriada();
                                            _this.dismiss();
                                        });
                                        //-------------------------------------------------------------------------------
                                    }
                                },
                                { text: this.labels.certezaButtonNao[this.idiomaPadrao] }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NovaAulaPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.load.create({
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
    NovaAulaPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load.dismiss().then(function () { return console.log("dismissed"); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NovaAulaPage.prototype.ngOnInit = function () {
        this.aula = this.instrutor.getAula();
        this.instrutor.setDatatime(this.aula.datetime);
    };
    NovaAulaPage.prototype.checkIdioma = function () {
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
    NovaAulaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.checkIdioma();
        this.http
            .get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
            .subscribe(function (data) {
            _this.dismiss();
            console.log(data);
            _this.aulaRegistro = data;
        });
    };
    NovaAulaPage.prototype.action = function () {
        var _this = this;
        this.aula_escolhida = (document.getElementById("_aulaProgramada")).value;
        this.instrutor.setIdPrograma(this.aula.aulasProgramadas.find(function (x) { return x.titulo === _this.aula_escolhida; }).id);
        this.aula_mostrada = this.aula.aulasProgramadas.find(function (x) { return x.titulo === _this.aula_escolhida; });
        this.instrutor.setAulaSelecionada(this.aula_mostrada);
        this.descricaoPadrao =
            this.aula_escolhida +
                " - " +
                this.instrutor.getNome() +
                " - " +
                this.aula.datetime;
    };
    NovaAulaPage.prototype.continuar = function () {
        this.descricao_aula = (document.getElementById("descricao")).value;
        this.instrutor.setDescricao(this.descricao_aula);
        if (this.instrutor.getIdPrograma() != null && this.descricao_aula != "") {
            this.certeza();
            this.instrutor.setConteudoConcluir(this.aulaRegistro);
        }
        else {
            this.alertaDeErro();
        }
    };
    NovaAulaPage.prototype.voltar = function () {
        this.instrutor.setIdPrograma(null);
        this.router.navigate(["/aula"]);
    };
    NovaAulaPage.prototype.backPage = function () {
        this.router.navigateByUrl("/aula");
    };
    NovaAulaPage.prototype.mostraModal = function () {
        if (this.aula_mostrada != null) {
            this.presentModal();
        }
        else {
            alert(this.labels.alertEscolha[this.idiomaPadrao]);
        }
    };
    NovaAulaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-nova-aula",
            template: __webpack_require__(/*! ./nova-aula.page.html */ "./src/app/nova-aula/nova-aula.page.html"),
            styles: [__webpack_require__(/*! ./nova-aula.page.scss */ "./src/app/nova-aula/nova-aula.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__["NomeInstrutorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_8__["Globalization"],
            _labelsNovaAula__WEBPACK_IMPORTED_MODULE_9__["LabelsNovaAula"]])
    ], NovaAulaPage);
    return NovaAulaPage;
}());



/***/ })

}]);
//# sourceMappingURL=nova-aula-nova-aula-module.js.map
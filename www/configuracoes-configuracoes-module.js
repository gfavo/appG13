(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracoes-configuracoes-module"],{

/***/ "./src/app/configuracoes/configuracoes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfiguracoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracoes.page */ "./src/app/configuracoes/configuracoes.page.ts");







var routes = [
    {
        path: '',
        component: _configuracoes_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracoesPage"]
    }
];
var ConfiguracoesPageModule = /** @class */ (function () {
    function ConfiguracoesPageModule() {
    }
    ConfiguracoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_configuracoes_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracoesPage"]]
        })
    ], ConfiguracoesPageModule);
    return ConfiguracoesPageModule;
}());



/***/ }),

/***/ "./src/app/configuracoes/configuracoes.page.html":
/*!*******************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"fonte\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>{{labels.titulo[idiomaPadrao]}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>{{labels.mudarlingua[idiomaPadrao]}}</ion-label>\n    <ion-select [(ngModel)]=\"idioma\" (ionChange)=\"mudouIdioma()\">\n      <ion-select-option value=\"en\">English</ion-select-option>\n      <ion-select-option value=\"ptbr\">Português</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/configuracoes/configuracoes.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNvZXMvY29uZmlndXJhY29lcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuracoes/configuracoes.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.page.ts ***!
  \*****************************************************/
/*! exports provided: ConfiguracoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPage", function() { return ConfiguracoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _labelsConfiguracoes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labelsConfiguracoes */ "./src/app/configuracoes/labelsConfiguracoes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");







var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(storage, globalization, labels, app, instrutor) {
        this.storage = storage;
        this.globalization = globalization;
        this.labels = labels;
        this.app = app;
        this.instrutor = instrutor;
        this.margemPadrao = "35%";
    }
    ConfiguracoesPage.prototype.ngOnInit = function () { };
    ConfiguracoesPage.prototype.checkIdioma = function () {
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
    ConfiguracoesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.checkIdioma();
        this.storage.get("idioma").then(function (res) {
            _this.idioma = res;
        });
    };
    ConfiguracoesPage.prototype.mudouIdioma = function () {
        this.storage.set("idioma", this.idioma);
        this.app.setIdioma(this.idioma);
        this.instrutor.idiomaPadrao = this.idioma;
    };
    ConfiguracoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-configuracoes",
            template: __webpack_require__(/*! ./configuracoes.page.html */ "./src/app/configuracoes/configuracoes.page.html"),
            styles: [__webpack_require__(/*! ./configuracoes.page.scss */ "./src/app/configuracoes/configuracoes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_4__["Globalization"],
            _labelsConfiguracoes__WEBPACK_IMPORTED_MODULE_5__["LabelsConfiguracao"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__["NomeInstrutorService"]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());



/***/ }),

/***/ "./src/app/configuracoes/labelsConfiguracoes.ts":
/*!******************************************************!*\
  !*** ./src/app/configuracoes/labelsConfiguracoes.ts ***!
  \******************************************************/
/*! exports provided: Label, LabelsConfiguracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsConfiguracao", function() { return LabelsConfiguracao; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsConfiguracao = /** @class */ (function () {
    function LabelsConfiguracao() {
        this.mudarlingua = new Label();
        this.titulo = new Label();
        this.mudarlingua["ptbr"] = "Mudar idioma";
        this.mudarlingua["en"] = "Change language";
        this.titulo["ptbr"] = "Configurações";
        this.titulo["en"] = "Settings";
    }
    LabelsConfiguracao = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsConfiguracao);
    return LabelsConfiguracao;
}());



/***/ })

}]);
//# sourceMappingURL=configuracoes-configuracoes-module.js.map
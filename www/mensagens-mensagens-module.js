(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mensagens-mensagens-module"],{

/***/ "./src/app/mensagens/labelsMensagens.ts":
/*!**********************************************!*\
  !*** ./src/app/mensagens/labelsMensagens.ts ***!
  \**********************************************/
/*! exports provided: Label, LabelsMensagens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsMensagens", function() { return LabelsMensagens; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsMensagens = /** @class */ (function () {
    function LabelsMensagens() {
        this.titulo = new Label();
        this.titulo["ptbr"] = "Mensagens";
        this.titulo["en"] = "Messages";
    }
    LabelsMensagens = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsMensagens);
    return LabelsMensagens;
}());



/***/ }),

/***/ "./src/app/mensagens/mensagens.module.ts":
/*!***********************************************!*\
  !*** ./src/app/mensagens/mensagens.module.ts ***!
  \***********************************************/
/*! exports provided: MensagensPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagensPageModule", function() { return MensagensPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mensagens_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mensagens.page */ "./src/app/mensagens/mensagens.page.ts");







var routes = [
    {
        path: '',
        component: _mensagens_page__WEBPACK_IMPORTED_MODULE_6__["MensagensPage"]
    }
];
var MensagensPageModule = /** @class */ (function () {
    function MensagensPageModule() {
    }
    MensagensPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mensagens_page__WEBPACK_IMPORTED_MODULE_6__["MensagensPage"]]
        })
    ], MensagensPageModule);
    return MensagensPageModule;
}());



/***/ }),

/***/ "./src/app/mensagens/mensagens.page.html":
/*!***********************************************!*\
  !*** ./src/app/mensagens/mensagens.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title style=\"font-size: small\" text-center>{{labels.titulo[idiomaPadrao]}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor=\"let mensagem of mensagens\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>{{ mensagem.datahora }}</ion-card-subtitle>\n        <ion-card-title>{{ mensagem.assunto }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{ mensagem.mensagem }}\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mensagens/mensagens.page.scss":
/*!***********************************************!*\
  !*** ./src/app/mensagens/mensagens.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnNhZ2Vucy9tZW5zYWdlbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/mensagens/mensagens.page.ts":
/*!*********************************************!*\
  !*** ./src/app/mensagens/mensagens.page.ts ***!
  \*********************************************/
/*! exports provided: MensagensPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagensPage", function() { return MensagensPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _labelsMensagens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labelsMensagens */ "./src/app/mensagens/labelsMensagens.ts");







var mensagem = /** @class */ (function () {
    function mensagem() {
    }
    return mensagem;
}());
var MensagensPage = /** @class */ (function () {
    function MensagensPage(instrutor, httpClient, storage, globalization, labels) {
        this.instrutor = instrutor;
        this.httpClient = httpClient;
        this.storage = storage;
        this.globalization = globalization;
        this.labels = labels;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "x-version": "1.1.0",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0"
        });
    }
    MensagensPage.prototype.ngOnInit = function () { };
    MensagensPage.prototype.checkIdioma = function () {
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
    MensagensPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.checkIdioma();
        this.httpClient
            .get(this.instrutor.getUrl() + "/mensagens.php", {
            headers: this.headers
        })
            .subscribe(function (data) {
            console.log(data);
            _this.mensagens = data;
        });
    };
    MensagensPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-mensagens",
            template: __webpack_require__(/*! ./mensagens.page.html */ "./src/app/mensagens/mensagens.page.html"),
            styles: [__webpack_require__(/*! ./mensagens.page.scss */ "./src/app/mensagens/mensagens.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__["NomeInstrutorService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_5__["Globalization"],
            _labelsMensagens__WEBPACK_IMPORTED_MODULE_6__["LabelsMensagens"]])
    ], MensagensPage);
    return MensagensPage;
}());



/***/ })

}]);
//# sourceMappingURL=mensagens-mensagens-module.js.map
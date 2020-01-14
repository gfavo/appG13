(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["painel-painel-module"],{

/***/ "./src/app/painel/painel.module.ts":
/*!*****************************************!*\
  !*** ./src/app/painel/painel.module.ts ***!
  \*****************************************/
/*! exports provided: PainelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelPageModule", function() { return PainelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _painel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./painel.page */ "./src/app/painel/painel.page.ts");







var routes = [
    {
        path: '',
        component: _painel_page__WEBPACK_IMPORTED_MODULE_6__["PainelPage"]
    }
];
var PainelPageModule = /** @class */ (function () {
    function PainelPageModule() {
    }
    PainelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_painel_page__WEBPACK_IMPORTED_MODULE_6__["PainelPage"]]
        })
    ], PainelPageModule);
    return PainelPageModule;
}());



/***/ }),

/***/ "./src/app/painel/painel.page.html":
/*!*****************************************!*\
  !*** ./src/app/painel/painel.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>painel</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-input\n    type=\"text\"\n    class=\"form-control\"\n    id=\"enderecoNovo\"\n    required\n    [(ngModel)]=\"enderecoNovo\"\n  ></ion-input>\n\n  <ion-button (click)=\"mudarUrl()\">\n    Mudar endereço\n  </ion-button>\n\n  <ion-button [routerLink]=\"['/home']\">Voltar para a home</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/painel/painel.page.scss":
/*!*****************************************!*\
  !*** ./src/app/painel/painel.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhaW5lbC9wYWluZWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/painel/painel.page.ts":
/*!***************************************!*\
  !*** ./src/app/painel/painel.page.ts ***!
  \***************************************/
/*! exports provided: PainelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelPage", function() { return PainelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");



var PainelPage = /** @class */ (function () {
    function PainelPage(instrutor) {
        this.instrutor = instrutor;
    }
    PainelPage.prototype.ngOnInit = function () { };
    PainelPage.prototype.mudarUrl = function () {
        this.instrutor.setUrl(this.enderecoNovo);
    };
    PainelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-painel",
            template: __webpack_require__(/*! ./painel.page.html */ "./src/app/painel/painel.page.html"),
            styles: [__webpack_require__(/*! ./painel.page.scss */ "./src/app/painel/painel.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__["NomeInstrutorService"]])
    ], PainelPage);
    return PainelPage;
}());



/***/ })

}]);
//# sourceMappingURL=painel-painel-module.js.map
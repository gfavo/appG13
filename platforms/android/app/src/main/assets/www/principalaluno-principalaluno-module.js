(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principalaluno-principalaluno-module"],{

/***/ "./src/app/principalaluno/principalaluno.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/principalaluno/principalaluno.module.ts ***!
  \*********************************************************/
/*! exports provided: PrincipalalunoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalalunoPageModule", function() { return PrincipalalunoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _principalaluno_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principalaluno.page */ "./src/app/principalaluno/principalaluno.page.ts");







var routes = [
    {
        path: '',
        component: _principalaluno_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalalunoPage"]
    }
];
var PrincipalalunoPageModule = /** @class */ (function () {
    function PrincipalalunoPageModule() {
    }
    PrincipalalunoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_principalaluno_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalalunoPage"]]
        })
    ], PrincipalalunoPageModule);
    return PrincipalalunoPageModule;
}());



/***/ }),

/***/ "./src/app/principalaluno/principalaluno.page.html":
/*!*********************************************************!*\
  !*** ./src/app/principalaluno/principalaluno.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"fonte\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>Pagina do aluno</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid class=\"centro\">\n    <ion-button\n      class=\"botao\"\n      size=\"large\"\n      expand=\"block\"\n      style=\"--background: #287a9d\"\n      (click)=\"abreDiretorio()\"\n    >\n      <ion-icon *ngIf=\"!exibe_diretorio\" name=\"lock\" slot=\"start\"></ion-icon>\n      Diretorio\n      <ion-icon name=\"bookmarks\" slot=\"end\"></ion-icon>\n    </ion-button>\n\n    <ion-button\n      class=\"botao\"\n      size=\"large\"\n      expand=\"block\"\n      style=\"--background: #23996f\"\n      [routerLink]=\"['/calendario']\"\n    >\n      Calendário\n      <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\n    </ion-button>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/principalaluno/principalaluno.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/principalaluno/principalaluno.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centro {\n  margin-top: 20%;\n  vertical-align: middle;\n  text-align: center; }\n\n.botao {\n  margin-top: 40px;\n  height: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbmNpcGFsYWx1bm8vQzpcXFVzZXJzXFxHYWJyaWVsXFxEZXNrdG9wXFxwcm9qZXRvc1xcdG96aVxcdG96aV9tb2JpbGUvc3JjXFxhcHBcXHByaW5jaXBhbGFsdW5vXFxwcmluY2lwYWxhbHVuby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBRWYsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcmluY2lwYWxhbHVuby9wcmluY2lwYWxhbHVuby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJvIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJvdGFve1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/principalaluno/principalaluno.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/principalaluno/principalaluno.page.ts ***!
  \*******************************************************/
/*! exports provided: PrincipalalunoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalalunoPage", function() { return PrincipalalunoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var PrincipalalunoPage = /** @class */ (function () {
    function PrincipalalunoPage(instrutor, router, alertController) {
        this.instrutor = instrutor;
        this.router = router;
        this.alertController = alertController;
        this.exibe_diretorio = true;
    }
    PrincipalalunoPage.prototype.alertaNaoPago = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "",
                            message: this.instrutor.getMensagem("blabla"),
                            buttons: [{ text: "ACESSAR", handler: function () { window.open("https://www.g13bjj.com.br/ct/?adesao"); } }, "FECHAR"]
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
    PrincipalalunoPage.prototype.ngOnInit = function () { };
    PrincipalalunoPage.prototype.ionViewWillEnter = function () {
        if (this.instrutor.getRole() == "ALUNOPAGO") {
            this.exibe_diretorio = true;
        }
        else {
            this.exibe_diretorio = false;
        }
    };
    PrincipalalunoPage.prototype.abreDiretorio = function () {
        if (this.instrutor.getRole() == "ALUNOPAGO") {
            this.router.navigate(["/diretorio"]);
        }
        else {
            this.alertaNaoPago();
        }
    };
    PrincipalalunoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-principalaluno",
            template: __webpack_require__(/*! ./principalaluno.page.html */ "./src/app/principalaluno/principalaluno.page.html"),
            styles: [__webpack_require__(/*! ./principalaluno.page.scss */ "./src/app/principalaluno/principalaluno.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__["NomeInstrutorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], PrincipalalunoPage);
    return PrincipalalunoPage;
}());



/***/ })

}]);
//# sourceMappingURL=principalaluno-principalaluno-module.js.map
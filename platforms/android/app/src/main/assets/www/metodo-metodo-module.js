(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metodo-metodo-module"],{

/***/ "./src/app/metodo/labelsMetodo.ts":
/*!****************************************!*\
  !*** ./src/app/metodo/labelsMetodo.ts ***!
  \****************************************/
/*! exports provided: Label, LabelsMetodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsMetodo", function() { return LabelsMetodo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsMetodo = /** @class */ (function () {
    function LabelsMetodo() {
        this.titulo = new Label();
        this.lista = new Label();
        this.pin = new Label();
        this.qr = new Label();
        this.titulo["ptbr"] = "Metodos";
        this.titulo["en"] = "Methods";
        this.lista["ptbr"] = "Lista";
        this.lista["en"] = "List";
        this.pin["ptbr"] = "PIN";
        this.pin["en"] = "PIN";
        this.qr["ptbr"] = "QR";
        this.qr["en"] = "QR";
    }
    LabelsMetodo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsMetodo);
    return LabelsMetodo;
}());



/***/ }),

/***/ "./src/app/metodo/metodo.module.ts":
/*!*****************************************!*\
  !*** ./src/app/metodo/metodo.module.ts ***!
  \*****************************************/
/*! exports provided: MetodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoPageModule", function() { return MetodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _metodo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metodo.page */ "./src/app/metodo/metodo.page.ts");







var routes = [
    {
        path: '',
        component: _metodo_page__WEBPACK_IMPORTED_MODULE_6__["MetodoPage"]
    }
];
var MetodoPageModule = /** @class */ (function () {
    function MetodoPageModule() {
    }
    MetodoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_metodo_page__WEBPACK_IMPORTED_MODULE_6__["MetodoPage"]]
        })
    ], MetodoPageModule);
    return MetodoPageModule;
}());



/***/ }),

/***/ "./src/app/metodo/metodo.page.html":
/*!*****************************************!*\
  !*** ./src/app/metodo/metodo.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title style=\"font-size: medium\" text-center\n      >{{labels.titulo[idiomaPadrao]}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<style>\n  ion-title {\n    font-size: medium;\n  }\n</style>\n\n<ion-content padding>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"backPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid class=\"centro\">\n    <ion-button\n      class=\"botao\"\n      size=\"large\"\n      expand=\"block\"\n      [routerLink]=\"['/manutencao-aula']\"\n      ><ion-icon slot=\"start\" name=\"list\"></ion-icon>{{labels.lista[idiomaPadrao]}}</ion-button\n    >\n\n    <ion-button\n      class=\"botao\"\n      size=\"large\"\n      expand=\"block\"\n      [routerLink]=\"['/pin']\"\n      ><ion-icon slot=\"start\" name=\"keypad\"></ion-icon>{{labels.pin[idiomaPadrao]}}</ion-button\n    >\n\n    <ion-button class=\"botao\" size=\"large\" expand=\"block\" [routerLink]=\"['/qr']\"\n      ><ion-icon slot=\"start\" name=\"qr-scanner\"></ion-icon>{{labels.qr[idiomaPadrao]}}</ion-button\n    >\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/metodo/metodo.page.scss":
/*!*****************************************!*\
  !*** ./src/app/metodo/metodo.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".botao {\n  margin-top: 40px;\n  height: 60px; }\n\n.centro {\n  margin-top: 20%;\n  vertical-align: middle;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0b2RvL0M6XFxVc2Vyc1xcR2FicmllbFxcRGVza3RvcFxccHJvamV0b3NcXHRvemlcXHRvemlfbW9iaWxlL3NyY1xcYXBwXFxtZXRvZG9cXG1ldG9kby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFFZixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZXRvZG8vbWV0b2RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3Rhb3tcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLmNlbnRybyB7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/metodo/metodo.page.ts":
/*!***************************************!*\
  !*** ./src/app/metodo/metodo.page.ts ***!
  \***************************************/
/*! exports provided: MetodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoPage", function() { return MetodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _labelsMetodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labelsMetodo */ "./src/app/metodo/labelsMetodo.ts");






var MetodoPage = /** @class */ (function () {
    function MetodoPage(router, storage, globalization, labels) {
        this.router = router;
        this.storage = storage;
        this.globalization = globalization;
        this.labels = labels;
    }
    MetodoPage.prototype.ngOnInit = function () { };
    MetodoPage.prototype.checkIdioma = function () {
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
    MetodoPage.prototype.ionViewWillEnter = function () {
        this.checkIdioma();
    };
    MetodoPage.prototype.backPage = function () {
        this.router.navigateByUrl("/aula");
    };
    MetodoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-metodo",
            template: __webpack_require__(/*! ./metodo.page.html */ "./src/app/metodo/metodo.page.html"),
            styles: [__webpack_require__(/*! ./metodo.page.scss */ "./src/app/metodo/metodo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_4__["Globalization"],
            _labelsMetodo__WEBPACK_IMPORTED_MODULE_5__["LabelsMetodo"]])
    ], MetodoPage);
    return MetodoPage;
}());



/***/ })

}]);
//# sourceMappingURL=metodo-metodo-module.js.map
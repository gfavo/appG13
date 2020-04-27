(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sobre-sobre-module"],{

/***/ "./src/app/sobre/labelsSobre.ts":
/*!**************************************!*\
  !*** ./src/app/sobre/labelsSobre.ts ***!
  \**************************************/
/*! exports provided: Label, LabelsSobre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsSobre", function() { return LabelsSobre; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsSobre = /** @class */ (function () {
    function LabelsSobre() {
        this.titulo = new Label();
        this.versao = new Label();
        this.criadopor = new Label();
        this.contato = new Label();
        this.titulo["ptbr"] = "Sobre o app";
        this.titulo["en"] = "About the app";
        this.versao["ptbr"] = "Versão";
        this.versao["en"] = "Version";
        this.criadopor["ptbr"] = "Criado por";
        this.criadopor["en"] = "Created by";
        this.contato["ptbr"] = "Contato";
        this.contato["en"] = "Contact";
    }
    LabelsSobre = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsSobre);
    return LabelsSobre;
}());



/***/ }),

/***/ "./src/app/sobre/sobre.module.ts":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.module.ts ***!
  \***************************************/
/*! exports provided: SobrePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageModule", function() { return SobrePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sobre.page */ "./src/app/sobre/sobre.page.ts");







var routes = [
    {
        path: '',
        component: _sobre_page__WEBPACK_IMPORTED_MODULE_6__["SobrePage"]
    }
];
var SobrePageModule = /** @class */ (function () {
    function SobrePageModule() {
    }
    SobrePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sobre_page__WEBPACK_IMPORTED_MODULE_6__["SobrePage"]]
        })
    ], SobrePageModule);
    return SobrePageModule;
}());



/***/ }),

/***/ "./src/app/sobre/sobre.page.html":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>{{labels.titulo[idiomaPadrao]}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>{{labels.versao[idiomaPadrao]}}: 1.1.1</h2>\n  <h2>{{labels.criadopor[idiomaPadrao]}}: Coisas Digitais</h2>\n  <h2>{{labels.contato[idiomaPadrao]}}: gabriel@coisasdigitais.com.br</h2>\n\n  <div>Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\"             title=\"Flaticon\">www.flaticon.com</a></div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/sobre/sobre.page.scss":
/*!***************************************!*\
  !*** ./src/app/sobre/sobre.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvYnJlL3NvYnJlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sobre/sobre.page.ts":
/*!*************************************!*\
  !*** ./src/app/sobre/sobre.page.ts ***!
  \*************************************/
/*! exports provided: SobrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePage", function() { return SobrePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _labelsSobre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labelsSobre */ "./src/app/sobre/labelsSobre.ts");





var SobrePage = /** @class */ (function () {
    function SobrePage(storage, globalization, labels) {
        this.storage = storage;
        this.globalization = globalization;
        this.labels = labels;
    }
    SobrePage.prototype.checkIdioma = function () {
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
    SobrePage.prototype.ionViewWillEnter = function () {
        this.checkIdioma();
    };
    SobrePage.prototype.ngOnInit = function () { };
    SobrePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sobre",
            template: __webpack_require__(/*! ./sobre.page.html */ "./src/app/sobre/sobre.page.html"),
            styles: [__webpack_require__(/*! ./sobre.page.scss */ "./src/app/sobre/sobre.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_3__["Globalization"],
            _labelsSobre__WEBPACK_IMPORTED_MODULE_4__["LabelsSobre"]])
    ], SobrePage);
    return SobrePage;
}());



/***/ })

}]);
//# sourceMappingURL=sobre-sobre-module.js.map
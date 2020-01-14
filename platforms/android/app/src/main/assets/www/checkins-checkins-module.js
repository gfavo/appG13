(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkins-checkins-module"],{

/***/ "./src/app/checkins/checkins.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkins/checkins.module.ts ***!
  \*********************************************/
/*! exports provided: CheckinsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinsPageModule", function() { return CheckinsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkins_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkins.page */ "./src/app/checkins/checkins.page.ts");







var routes = [
    {
        path: '',
        component: _checkins_page__WEBPACK_IMPORTED_MODULE_6__["CheckinsPage"]
    }
];
var CheckinsPageModule = /** @class */ (function () {
    function CheckinsPageModule() {
    }
    CheckinsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkins_page__WEBPACK_IMPORTED_MODULE_6__["CheckinsPage"]]
        })
    ], CheckinsPageModule);
    return CheckinsPageModule;
}());



/***/ }),

/***/ "./src/app/checkins/checkins.page.html":
/*!*********************************************!*\
  !*** ./src/app/checkins/checkins.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"fonte\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>{{labels.titulo[idiomaPadrao]}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let aluno of conteudo\">\n    <ion-item>\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"aluno.confirmado\"></ion-checkbox>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{labels.confirmapresenca[idiomaPadrao]}} {{ aluno.nome }}?</h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-padding\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row no-padding no-margin>\n        <ion-col size=\"4\">\n          <ion-button expand=\"block\" (click)=\"voltar()\"\n            ><ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n            {{labels.voltar[idiomaPadrao]}}</ion-button\n          >\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button expand=\"block\" (click)=\"checkall()\" class=\"ion-text-wrap\"\n            >{{labels.checktodos[idiomaPadrao]}}!</ion-button\n          >\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button expand=\"block\" (click)=\"confirmar()\"\n            >{{labels.confirma[idiomaPadrao]}}!</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/checkins/checkins.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkins/checkins.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNraW5zL2NoZWNraW5zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/checkins/checkins.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkins/checkins.page.ts ***!
  \*******************************************/
/*! exports provided: CheckinsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinsPage", function() { return CheckinsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _labelsCheckins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labelsCheckins */ "./src/app/checkins/labelsCheckins.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var conteudoCheck = /** @class */ (function () {
    function conteudoCheck() {
    }
    return conteudoCheck;
}());
var CheckinsPage = /** @class */ (function () {
    function CheckinsPage(instrutor, httpClient, router, storage, globalization, labels) {
        this.instrutor = instrutor;
        this.httpClient = httpClient;
        this.router = router;
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
    CheckinsPage.prototype.ngOnInit = function () { };
    CheckinsPage.prototype.checkIdioma = function () {
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
    CheckinsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.checkIdioma();
        this.subscription = this.httpClient
            .get(this.instrutor.getUrl() + "/checkins.php", {
            responseType: "json",
            headers: this.headers
        })
            .subscribe(function (data) {
            _this.conteudo = data;
            console.log(JSON.stringify(_this.conteudo));
        });
    };
    CheckinsPage.prototype.confirmar = function () {
        var _this = this;
        this.subscription = this.httpClient
            .post(this.instrutor.getUrl() + "/confirma.php", this.conteudo, {
            responseType: "json",
            headers: this.headers
        })
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl("/aula");
        });
    };
    CheckinsPage.prototype.voltar = function () {
        this.router.navigateByUrl("/aula");
    };
    CheckinsPage.prototype.checkall = function () {
        this.conteudo.forEach(function (element) {
            element.confirmado = 1;
        });
    };
    CheckinsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-checkins",
            template: __webpack_require__(/*! ./checkins.page.html */ "./src/app/checkins/checkins.page.html"),
            styles: [__webpack_require__(/*! ./checkins.page.scss */ "./src/app/checkins/checkins.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__["NomeInstrutorService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_5__["Globalization"],
            _labelsCheckins__WEBPACK_IMPORTED_MODULE_6__["LabelsCheckins"]])
    ], CheckinsPage);
    return CheckinsPage;
}());



/***/ }),

/***/ "./src/app/checkins/labelsCheckins.ts":
/*!********************************************!*\
  !*** ./src/app/checkins/labelsCheckins.ts ***!
  \********************************************/
/*! exports provided: Label, LabelsCheckins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsCheckins", function() { return LabelsCheckins; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsCheckins = /** @class */ (function () {
    function LabelsCheckins() {
        this.titulo = new Label();
        this.confirmapresenca = new Label();
        this.voltar = new Label();
        this.checktodos = new Label();
        this.confirma = new Label();
        this.titulo["ptbr"] = "Checkins";
        this.titulo["en"] = "Checkins";
        this.confirmapresenca["ptbr"] = "Confirmar presença para";
        this.confirmapresenca["en"] = "Confirm presençe for";
        this.voltar["ptbr"] = "Voltar";
        this.voltar["en"] = "Back";
        this.checktodos["ptbr"] = "Checar todos";
        this.checktodos["en"] = "Check all";
        this.confirma["ptbr"] = "Confirmar";
        this.confirma["en"] = "Confirm";
    }
    LabelsCheckins = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsCheckins);
    return LabelsCheckins;
}());



/***/ })

}]);
//# sourceMappingURL=checkins-checkins-module.js.map
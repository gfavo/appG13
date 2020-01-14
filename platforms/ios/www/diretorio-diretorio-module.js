(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["diretorio-diretorio-module"],{

/***/ "./src/app/diretorio/diretorio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/diretorio/diretorio.module.ts ***!
  \***********************************************/
/*! exports provided: DiretorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiretorioPageModule", function() { return DiretorioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _diretorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diretorio.page */ "./src/app/diretorio/diretorio.page.ts");







var routes = [
    {
        path: '',
        component: _diretorio_page__WEBPACK_IMPORTED_MODULE_6__["DiretorioPage"]
    }
];
var DiretorioPageModule = /** @class */ (function () {
    function DiretorioPageModule() {
    }
    DiretorioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_diretorio_page__WEBPACK_IMPORTED_MODULE_6__["DiretorioPage"]]
        })
    ], DiretorioPageModule);
    return DiretorioPageModule;
}());



/***/ }),

/***/ "./src/app/diretorio/diretorio.page.html":
/*!***********************************************!*\
  !*** ./src/app/diretorio/diretorio.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"fonte\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>Diretorio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor=\"let tecnicas of ConteudoDiretorio\">\n    <ion-button\n      expand=\"full\"\n      (click)=\"openCategoria(tecnicas.categoria)\"\n      color=\"light\"\n      slot=\"start\"\n    >\n      <ion-item>\n        {{ tecnicas.categoria }}\n      </ion-item>\n    </ion-button>\n\n    <ng-container *ngIf=\"tecnicas.expandida\">\n      <ion-list *ngFor=\"let tecnica of tecnicaExpandida.tecnicas\">\n        <ion-label\n          ><ion-item\n            class=\"item item-text-wrap ion-activatable\"\n            (click)=\"abreVideo(tecnica.idvimeo, tecnica.senhavimeo)\"\n            >{{ tecnica.nome }}</ion-item\n          ></ion-label\n        >\n        <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n      </ion-list>\n    </ng-container>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/diretorio/diretorio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/diretorio/diretorio.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item:hover {\n  --background: white !important; }\n\n.item {\n  --background: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZXRvcmlvL0M6XFxVc2Vyc1xcR2FicmllbFxcRGVza3RvcFxccHJvamV0b3NcXHRvemlcXHRvemlfbW9iaWxlL3NyY1xcYXBwXFxkaXJldG9yaW9cXGRpcmV0b3Jpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kaXJldG9yaW8vZGlyZXRvcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtOmhvdmVyXG57XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbXtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/diretorio/diretorio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/diretorio/diretorio.page.ts ***!
  \*********************************************/
/*! exports provided: tecnicasDir, conteudoGetDiretorio, DiretorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tecnicasDir", function() { return tecnicasDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conteudoGetDiretorio", function() { return conteudoGetDiretorio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiretorioPage", function() { return DiretorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _modalvideo_modalvideo_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modalvideo/modalvideo.page */ "./src/app/modalvideo/modalvideo.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var tecnicasDir = /** @class */ (function () {
    function tecnicasDir() {
    }
    return tecnicasDir;
}());

var conteudoGetDiretorio = /** @class */ (function () {
    function conteudoGetDiretorio() {
    }
    return conteudoGetDiretorio;
}());

var DiretorioPage = /** @class */ (function () {
    function DiretorioPage(modalController, httpClient, instrutor) {
        this.modalController = modalController;
        this.httpClient = httpClient;
        this.instrutor = instrutor;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "x-version": "1.0.9",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0"
        });
        this.podeExpandir = false;
    }
    DiretorioPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modalvideo_modalvideo_page__WEBPACK_IMPORTED_MODULE_4__["ModalvideoPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiretorioPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.subscription = this.httpClient
            .get(this.instrutor.getUrl() + "/diretorio.php", {
            responseType: "json",
            headers: this.headers
        })
            .subscribe(function (data) {
            _this.ConteudoDiretorio = data;
            _this.ConteudoDiretorio.forEach(function (element) {
                element.expandida = false;
            });
            console.log(_this.ConteudoDiretorio);
            console.log(data);
        });
    };
    DiretorioPage.prototype.ngOnInit = function () { };
    DiretorioPage.prototype.openCategoria = function (x) {
        this.ConteudoDiretorio.forEach(function (element) {
            if (element.expandida == true && element.categoria != x) {
                element.expandida = false;
            }
        });
        if (this.ConteudoDiretorio.find(function (y) { return y.categoria === x; }).expandida == true) {
            this.ConteudoDiretorio.find(function (y) { return y.categoria === x; }).expandida = false;
        }
        else if (this.ConteudoDiretorio.find(function (y) { return y.categoria === x; }).expandida == false) {
            this.ConteudoDiretorio.find(function (y) { return y.categoria === x; }).expandida = true;
            this.tecnicaExpandida = this.ConteudoDiretorio.find(function (y) { return y.categoria === x; });
        }
    };
    DiretorioPage.prototype.abreVideo = function (numeroTecnica, senhavimeo) {
        this.instrutor.setIdVimeo(numeroTecnica);
        this.instrutor.setSenhaVimeo(senhavimeo);
        this.presentModal();
    };
    DiretorioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-diretorio",
            template: __webpack_require__(/*! ./diretorio.page.html */ "./src/app/diretorio/diretorio.page.html"),
            styles: [__webpack_require__(/*! ./diretorio.page.scss */ "./src/app/diretorio/diretorio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_3__["NomeInstrutorService"]])
    ], DiretorioPage);
    return DiretorioPage;
}());



/***/ })

}]);
//# sourceMappingURL=diretorio-diretorio-module.js.map
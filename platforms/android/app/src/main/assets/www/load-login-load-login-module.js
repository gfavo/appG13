(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["load-login-load-login-module"],{

/***/ "./src/app/load-login/load-login.module.ts":
/*!*************************************************!*\
  !*** ./src/app/load-login/load-login.module.ts ***!
  \*************************************************/
/*! exports provided: LoadLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadLoginPageModule", function() { return LoadLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _load_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./load-login.page */ "./src/app/load-login/load-login.page.ts");







var routes = [
    {
        path: '',
        component: _load_login_page__WEBPACK_IMPORTED_MODULE_6__["LoadLoginPage"]
    }
];
var LoadLoginPageModule = /** @class */ (function () {
    function LoadLoginPageModule() {
    }
    LoadLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_load_login_page__WEBPACK_IMPORTED_MODULE_6__["LoadLoginPage"]]
        })
    ], LoadLoginPageModule);
    return LoadLoginPageModule;
}());



/***/ }),

/***/ "./src/app/load-login/load-login.page.html":
/*!*************************************************!*\
  !*** ./src/app/load-login/load-login.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content padding>\n<ion-spinner></ion-spinner>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/load-login/load-login.page.scss":
/*!*************************************************!*\
  !*** ./src/app/load-login/load-login.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nion-content {\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZC1sb2dpbi9DOlxcVXNlcnNcXEdhYnJpZWxcXERlc2t0b3BcXHByb2pldG9zXFx0b3ppXFx0b3ppX21vYmlsZS9zcmNcXGFwcFxcbG9hZC1sb2dpblxcbG9hZC1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2FkLWxvZ2luL2xvYWQtbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNwaW5uZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/load-login/load-login.page.ts":
/*!***********************************************!*\
  !*** ./src/app/load-login/load-login.page.ts ***!
  \***********************************************/
/*! exports provided: Customer, LoadLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadLoginPage", function() { return LoadLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());

var LoadLoginPage = /** @class */ (function () {
    function LoadLoginPage(load, storage, network, httpClient, router, instrutor, alertController, globalization) {
        this.load = load;
        this.storage = storage;
        this.network = network;
        this.httpClient = httpClient;
        this.router = router;
        this.instrutor = instrutor;
        this.alertController = alertController;
        this.globalization = globalization;
        this.pessoa = new Customer();
    }
    LoadLoginPage.prototype.ngOnInit = function () {
    };
    LoadLoginPage.prototype.checkIdioma = function () {
        var _this = this;
        this.storage.get("idioma").then(function (res) {
            if (res == "" || res == null) {
                _this.globalization.getPreferredLanguage().then(function (res) {
                    if (res.value.includes("pt")) {
                        _this.storage.set("idioma", "ptbr");
                    }
                    else if (res.value.includes("en")) {
                        _this.storage.set("idioma", "en");
                    }
                });
            }
        });
    };
    LoadLoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.pessoa.pass = "";
        this.pessoa.user = "";
        this.status = 0;
        if (this.instrutor.getUrl() == null) {
            this.instrutor.setUrl("https://www.g13bjj.com.br/ct/mobile");
            // this.instrutor.setUrl("https://192.168.15.34/mobile");
        }
        this.storage.get("login").then(function (val) {
            _this.storage.get("login").then(function (val) {
                _this.pessoa.user = val;
            });
            _this.storage.get("senha").then(function (val) {
                _this.pessoa.pass = val;
                _this.httpClient
                    .post(_this.instrutor.getUrl() + "/login.php", JSON.stringify(_this.pessoa), {
                    responseType: "text",
                    observe: "response",
                    withCredentials: true,
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({ "x-version": "1.1.1" })
                })
                    .subscribe(function (response) {
                    _this.status = response.status;
                    _this.instrutor.setRole(response.headers.get("x-role"));
                    if (response.headers.get("x-role") == "INSTRUTOR") {
                        _this.router.navigate(["/aula"]);
                    }
                    else {
                        _this.router.navigate(["/calendario"]);
                    }
                    _this.instrutor.setNome(_this.pessoa.user);
                    _this.instrutor.setToken(response.headers.get("x-auth"));
                }, function (error) {
                    // alert("Login ou senha errados, por favor , tente novamente");
                    _this.status = error.status;
                });
            });
        });
    };
    LoadLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-load-login',
            template: __webpack_require__(/*! ./load-login.page.html */ "./src/app/load-login/load-login.page.html"),
            styles: [__webpack_require__(/*! ./load-login.page.scss */ "./src/app/load-login/load-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_5__["NomeInstrutorService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_6__["Globalization"]])
    ], LoadLoginPage);
    return LoadLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=load-login-load-login-module.js.map
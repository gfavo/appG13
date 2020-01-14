(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title >\n    {{  labels.titulo[idiomaPadrao] }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <form #Form=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form\">\n    <!-- {{pessoa.user}} . {{pessoa.pass}} -->\n\n    <ion-item class=\"form-item\">\n      <ion-label class=\"form-label\" position=\"stacked\">{{labels.usuario[idiomaPadrao]}}</ion-label>\n      <ion-input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"user\"\n        required\n        [(ngModel)]=\"pessoa.user\"\n        name=\"user\"\n      ></ion-input>\n    </ion-item>\n\n    <ion-item class=\"form-item\">\n      <ion-label class=\"form-label\" position=\"stacked\" for=\"pass\"\n        >{{labels.senha[idiomaPadrao]}}</ion-label\n      >\n      <ion-input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"pass\"\n        required\n        [(ngModel)]=\"pessoa.pass\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        name=\"pass\"\n      ></ion-input>\n    </ion-item>\n    <br />\n    <br />\n    <ion-item slot=\"start\"\n      ><b (click)=\"lembrarTrue()\">{{labels.lembrar[idiomaPadrao]}}</b>\n      <ion-checkbox\n        slot=\"end\"\n        name=\"lembrar\"\n        id=\"lembrar\"\n        [(ngModel)]=\"lembrar\"\n      ></ion-checkbox\n    ></ion-item>\n\n    <ion-button\n      color=\"dark\"\n      id=\"login-button\"\n      expand=\"full\"\n      type=\"submit\"\n      class=\"btn btn-success\"\n      ><ion-icon slot=\"start\" name=\"log-in\"></ion-icon>{{labels.login[idiomaPadrao]}}</ion-button\n    >\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat\");\n#login-button {\n  margin-top: 40px;\n  height: 60px; }\n.btn {\n  font-family: \"Montserrat\",sans-serif; }\n.form-label {\n  font-size: 18px;\n  font-family: \"Montserrat\",sans-serif; }\n.form-control {\n  --padding-top: 10px; }\n.form-item {\n  --padding-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEdhYnJpZWxcXERlc2t0b3BcXHByb2pldG9zXFx0b3ppXFx0b3ppX21vYmlsZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQVk7QUFFWjtFQUNJLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7QUFHaEI7RUFFSSxvQ0FBb0MsRUFBQTtBQUd4QztFQUVDLGVBQWU7RUFDZixvQ0FBb0MsRUFBQTtBQUdyQztFQUVJLG1CQUFjLEVBQUE7QUFFbEI7RUFFSSxtQkFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCcpO1xuXG4jbG9naW4tYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uYnRuXG57XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLHNhbnMtc2VyaWY7XG59XG5cbi5mb3JtLWxhYmVsXG57XG4gZm9udC1zaXplOiAxOHB4O1xuIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIixzYW5zLXNlcmlmO1xuIFxufVxuLmZvcm0tY29udHJvbFxue1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7IFxufVxuLmZvcm0taXRlbVxue1xuICAgIC0tcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: Customer, HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _labels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./labels */ "./src/app/home/labels.ts");












var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ teste: "123" });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());

var HomePage = /** @class */ (function () {
    function HomePage(load, storage, network, httpClient, router, instrutor, alertController, labels, globalization) {
        this.load = load;
        this.storage = storage;
        this.network = network;
        this.httpClient = httpClient;
        this.router = router;
        this.instrutor = instrutor;
        this.alertController = alertController;
        this.labels = labels;
        this.globalization = globalization;
        this.pessoa = new Customer();
        this.lembrar = false;
        this.isloading = false;
    }
    HomePage.prototype.alertaDeErro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Erro",
                            message: this.labels.usuarioerrado[this.idiomaPadrao],
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
    HomePage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isloading = true;
                        return [4 /*yield*/, this.load.create({
                                message: this.labels.loading[this.idiomaPadrao],
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
    HomePage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isloading = false;
                        return [4 /*yield*/, this.load.dismiss().then(function () { return console.log("dismissed"); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.checkIdioma = function () {
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
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.checkIdioma();
        this.pessoa.pass = "";
        this.pessoa.user = "";
        this.lembrar = false;
        this.status = 0;
        if (this.instrutor.getUrl() == null) {
            this.instrutor.setUrl("https://www.g13bjj.com.br/ct/mobile");
        }
        this.storage.get("login").then(function (val) {
            if (val != "" && val != null) {
                _this.storage.get("login").then(function (val) {
                    _this.pessoa.user = val;
                });
                _this.storage.get("senha").then(function (val) {
                    _this.pessoa.pass = val;
                    _this.onSubmit();
                });
            }
            else {
                _this.mostrarTela = true;
            }
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        /*this.status = 0;
    
    
        if (this.instrutor.getUrl() == null) {
          this.instrutor.setUrl("https://www.g13bjj.com.br/ct/mobile");
        }
    
    
    
    
        this.storage.get('login').then((val) => {
    
          if (val != "") {
            this.storage.get('login').then((val) => {
              this.pessoa.user = val;
            });
            this.storage.get('senha').then((val) => {
              this.pessoa.pass = val;
              this.onSubmit();
            });
    
          }
        });*/
    };
    //https://www.g13bjj.com.br/ct/mobile/login.php
    HomePage.prototype.mostrarUrl = function () {
        this.testeUrl = this.instrutor.getUrl();
    };
    HomePage.prototype.onSubmit = function () {
        var _this = this;
        if (this.pessoa.user == "painel" && this.pessoa.pass == "painelmaster123") {
            this.router.navigate(["/painel"]);
        }
        else {
            this.presentLoading();
            this.httpClient
                .post(this.instrutor.getUrl() + "/login.php", JSON.stringify(this.pessoa), {
                responseType: "text",
                observe: "response",
                withCredentials: true,
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "x-version": "1.0.9" })
            })
                .subscribe(function (response) {
                _this.dismiss();
                _this.status = response.status;
                if (_this.lembrar == true) {
                    _this.storage.set("login", _this.pessoa.user);
                    _this.storage.set("senha", _this.pessoa.pass);
                }
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
                _this.dismiss();
                // alert("Login ou senha errados, por favor , tente novamente");
                _this.alertaDeErro();
                _this.status = error.status;
            });
        }
    };
    HomePage.prototype.esquece = function () {
        this.storage.set("login", "");
        this.storage.set("senha", "");
    };
    HomePage.prototype.lembrarTrue = function () {
        if (this.lembrar == false) {
            this.lembrar = true;
        }
        else {
            this.lembrar = false;
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_5__["NomeInstrutorService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _labels__WEBPACK_IMPORTED_MODULE_9__["LabelsHome"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_8__["Globalization"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/home/labels.ts":
/*!********************************!*\
  !*** ./src/app/home/labels.ts ***!
  \********************************/
/*! exports provided: Label, LabelsHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsHome", function() { return LabelsHome; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsHome = /** @class */ (function () {
    function LabelsHome() {
        this.loading = new Label();
        this.usuarioerrado = new Label();
        this.titulo = new Label();
        this.usuario = new Label();
        this.senha = new Label();
        this.lembrar = new Label();
        this.login = new Label();
        this.loading["ptbr"] = "Aguarde por favor";
        this.loading["en"] = "Loading";
        this.usuarioerrado["ptbr"] = "Sua senha ou usuario está errado.Favor tentar novamente.";
        this.usuarioerrado["en"] = "Login or password is wrong. Please try again with different credentials.";
        this.titulo["ptbr"] = "Faça seu login";
        this.titulo["en"] = "Please login";
        this.usuario["ptbr"] = "Usuário";
        this.usuario["en"] = "Login";
        this.senha["ptbr"] = "Senha";
        this.senha["en"] = "Password";
        this.lembrar["ptbr"] = "Lembrar login";
        this.lembrar["en"] = "Remember login";
        this.login["ptbr"] = "Login";
        this.login["en"] = "Login";
    }
    LabelsHome = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsHome);
    return LabelsHome;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map
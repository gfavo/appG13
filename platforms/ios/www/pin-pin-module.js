(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pin-pin-module"],{

/***/ "./src/app/pin/pin.module.ts":
/*!***********************************!*\
  !*** ./src/app/pin/pin.module.ts ***!
  \***********************************/
/*! exports provided: PinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPageModule", function() { return PinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pin.page */ "./src/app/pin/pin.page.ts");







var routes = [
    {
        path: '',
        component: _pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]
    }
];
var PinPageModule = /** @class */ (function () {
    function PinPageModule() {
    }
    PinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]],
        })
    ], PinPageModule);
    return PinPageModule;
}());



/***/ }),

/***/ "./src/app/pin/pin.page.html":
/*!***********************************!*\
  !*** ./src/app/pin/pin.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>Digite o codigo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"backPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-button\n    style=\"font-size: 15px;\"\n    expand=\"block\"\n    color=\"dark\"\n    size=\"large\"\n    (click)=\"mostraDetalhes()\"\n    vertical=\"top\"\n    >Mostrar Detalhes da aula</ion-button\n  >\n\n  <ion-input class=\"input_\" type=\"password\" id=\"pincode\" readonly></ion-input>\n\n  <ion-grid text-center>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col>\n        <ion-button\n          id=\"mostrar\"\n          fill=\"outline\"\n          (click)=\"mostrarSenha()\"\n          float-center\n          >Mostrar PIN</ion-button\n        >\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n\n    <ion-card>\n      <ion-row>\n        <ion-col></ion-col>\n\n        <ion-col>\n          <ion-button color=\"dark\" size=\"large\" (click)=\"handleInput('1')\"\n            >1</ion-button\n          >\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button color=\"dark\" size=\"large\" (click)=\"handleInput('2')\"\n            >2</ion-button\n          >\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"dark\" size=\"large\" (click)=\"handleInput('3')\"\n            >3</ion-button\n          >\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col>\n          <ion-button color=\"dark\" size=\"large\" (click)=\"handleInput('4')\"\n            >4</ion-button\n          >\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button color=\"dark\" round size=\"large\" (click)=\"handleInput('5')\"\n            >5</ion-button\n          >\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"dark\" round size=\"large\" (click)=\"handleInput('6')\"\n            >6</ion-button\n          >\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col>\n          <ion-button color=\"dark\" round size=\"large\" (click)=\"handleInput('7')\"\n            >7</ion-button\n          >\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button color=\"dark\" round size=\"large\" (click)=\"handleInput('8')\"\n            >8</ion-button\n          >\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"dark\" round size=\"large\" (click)=\"handleInput('9')\"\n            >9</ion-button\n          >\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col> </ion-col>\n        <ion-col>\n          <ion-button color=\"dark\" round size=\"large\" (click)=\"handleInput('0')\"\n            >0</ion-button\n          >\n        </ion-col>\n\n        <ion-col> </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button\n            style=\"font-size: 15px;\"\n            color=\"dark\"\n            size=\"large\"\n            (click)=\"handleInput('clear')\"\n          >\n            <ion-icon slot=\"start\" name=\"refresh\"></ion-icon>Limpar\n          </ion-button>\n        </ion-col>\n        <ion-col> </ion-col>\n        <ion-col> </ion-col>\n        <ion-col>\n          <ion-button\n            style=\"font-size: 17px;\"\n            ion-ion-button\n            color=\"dark\"\n            size=\"large\"\n            (click)=\"okAluno()\"\n          >\n            <ion-icon slot=\"start\" name=\"person\"></ion-icon>OK\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"tertiary\" size=\"large\" (click)=\"encerra()\"\n          >Encerrar</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pin/pin.page.scss":
/*!***********************************!*\
  !*** ./src/app/pin/pin.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#rounded {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n\n#container {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto; }\n\nion-input {\n  font-size: 40px;\n  text-align: center;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.input_ {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGluL0M6XFxVc2Vyc1xcR2FicmllbFxcRGVza3RvcFxccHJvamV0b3NcXHRvemlcXHRvemlfbW9iaWxlL3NyY1xcYXBwXFxwaW5cXHBpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUdiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNRLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUFBOztBQUd6QjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9waW4vcGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb3VuZGVkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzAwcHg7IFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG59XG5pb24taW5wdXR7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDsgXG4gICAgICAgIG1hcmdpbi1yaWdodDoxMHB4OyBcbn1cblxuLmlucHV0X3tcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pin/pin.page.ts":
/*!*********************************!*\
  !*** ./src/app/pin/pin.page.ts ***!
  \*********************************/
/*! exports provided: PinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPage", function() { return PinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modaldetalhes_modaldetalhes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modaldetalhes/modaldetalhes.page */ "./src/app/modaldetalhes/modaldetalhes.page.ts");








var PinPage = /** @class */ (function () {
    function PinPage(modalController, alertController, router, instrutor, http) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.router = router;
        this.instrutor = instrutor;
        this.http = http;
        this.codigo = "";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "x-version": "1.0.9",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0"
        });
    }
    PinPage.prototype.limpa_codigo = function () {
        document.getElementById("pincode").value = "";
        this.codigo = "";
    };
    PinPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modaldetalhes_modaldetalhes_page__WEBPACK_IMPORTED_MODULE_6__["ModaldetalhesPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PinPage.prototype.mostraDetalhes = function () {
        this.presentModal();
    };
    PinPage.prototype.confirma_aluno = function (nome) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registra;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Confirma",
                            message: "Confirmar presença para:  " + nome.bold() + " ?",
                            buttons: [
                                {
                                    text: "Sim",
                                    handler: function () {
                                        _this.achaAluno(_this.codigo, _this.aula.alunos).presenca = true;
                                        _this.http
                                            .post(_this.instrutor.getUrl() + "/registrar.php", _this.aula, {
                                            headers: _this.headers
                                        })
                                            .subscribe(function (res) {
                                            console.log(res);
                                            _this.aula.id = res.id;
                                        });
                                        _this.limpa_codigo();
                                    }
                                },
                                {
                                    text: "Não",
                                    handler: function () {
                                        _this.limpa_codigo();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        registra = _a.sent();
                        return [4 /*yield*/, registra.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PinPage.prototype.simple_alert = function (message, act) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var presente;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Note",
                            message: message,
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function () {
                                        if (act) {
                                            _this.limpa_codigo();
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        presente = _a.sent();
                        return [4 /*yield*/, presente.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PinPage.prototype.erroconcluir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var presente;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Note",
                            message: "Você deve primeiro registrar uma presença antes de concluir a aula",
                            buttons: ["OK"]
                        })];
                    case 1:
                        presente = _a.sent();
                        return [4 /*yield*/, presente.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PinPage.prototype.sucessoconcluir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var presente;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Note",
                            message: "A aula foi concluida com sucesso!",
                            buttons: [
                                {
                                    text: "Ok",
                                    handler: function () {
                                        _this.router.navigate(["/aula"]);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        presente = _a.sent();
                        return [4 /*yield*/, presente.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PinPage.prototype.aluno_ja_presente = function (nome) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var presente;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Note",
                            message: "O aluno " + nome.bold() + " já está com presença",
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function () {
                                        _this.limpa_codigo();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        presente = _a.sent();
                        return [4 /*yield*/, presente.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PinPage.prototype.encerrrar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var presente;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Note",
                            message: "Deseja concluir?",
                            buttons: [
                                { text: "Não" },
                                {
                                    text: "Sim",
                                    handler: function () {
                                        if (_this.aula.id != null) {
                                            _this.http
                                                .post(_this.instrutor.getUrl() + "/concluir.php", {
                                                id: _this.aula.id,
                                                tecnicasavulsas: _this.instrutor.getIdTecnicas()
                                            }, { observe: "response", headers: _this.headers })
                                                .subscribe(function (data) { return console.log(data.status); });
                                            _this.instrutor.setAulaAberta(false);
                                            _this.sucessoconcluir();
                                        }
                                        else {
                                            _this.erroconcluir();
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        presente = _a.sent();
                        return [4 /*yield*/, presente.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PinPage.prototype.ngOnInit = function () { };
    PinPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.http
            .get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            _this.aula = data;
        });
    };
    PinPage.prototype.handleInput = function (number) {
        if (number == "clear") {
            document.getElementById("pincode").value = "";
            this.codigo = "";
        }
        else {
            if (document.getElementById("pincode").value.length <
                5) {
                this.codigo += number;
                console.log(this.codigo);
                (document.getElementById("pincode")).value += number;
            }
        }
    };
    PinPage.prototype.mostrarSenha = function () {
        if (document.getElementById("pincode").type ==
            "password") {
            document.getElementById("mostrar").fill = "solid";
            document.getElementById("pincode").type = "text";
        }
        else {
            document.getElementById("mostrar").fill =
                "outline";
            document.getElementById("pincode").type =
                "password";
        }
    };
    PinPage.prototype.okAluno = function () {
        var _this = this;
        this.instrutor.setAulaAberta(true);
        if (this.aula.id == null) {
            this.http
                .post(this.instrutor.getUrl() + "/registrar.php", {
                id: "",
                descricao: this.instrutor.getDescricao(),
                datetime: this.instrutor.getAula().datetime,
                idaulaprogramada: this.instrutor.getIdPrograma(),
                alunos: this.aula.alunos
            }, { headers: this.headers })
                .subscribe(function (res) {
                console.log(res);
                _this.aula.id = res.id;
            });
        }
        else {
            this.instrutor.setAulaAberta(true);
            this.http
                .post(this.instrutor.getUrl() + "/registrar.php", {
                id: "",
                descricao: this.instrutor.getDescricao(),
                datetime: this.instrutor.getAula().datetime,
                idaulaprogramada: this.instrutor.getIdPrograma(),
                idtecnicasavulsas: this.instrutor.getIdTecnicas(),
                alunos: this.aula.alunos
            }, { headers: this.headers })
                .subscribe(function (data) {
                console.log(data);
                _this.aula.id = data.id;
            });
        }
        if (this.codigo.length == 5) {
            if (this.procurarAluno(this.codigo, this.aula.alunos) == true) {
                if (this.achaAluno(this.codigo, this.aula.alunos).presenca == false) {
                    this.confirma_aluno(this.achaAluno(this.codigo, this.aula.alunos).nome);
                }
                else {
                    this.aluno_ja_presente(this.achaAluno(this.codigo, this.aula.alunos).nome);
                }
            }
            else {
                console.log("indefinido" + this.codigo + this.aula.alunos[0].nome);
                this.simple_alert("Esse aluno não existe na sua grade!", true);
            }
        }
        else {
            this.simple_alert("Favor digitar o codigo completo!", false);
        }
    };
    PinPage.prototype.encerra = function () {
        this.instrutor.setAulaAberta(false);
        this.encerrrar();
    };
    PinPage.prototype.procurarAluno = function (codigo, alunos) {
        var achou = false;
        var i = 0;
        for (i = 0; i < alunos.length; i++) {
            if (codigo == alunos[i].codigo) {
                achou = true;
            }
        }
        if (achou == true) {
            return true;
        }
        else {
            return false;
        }
    };
    PinPage.prototype.achaAluno = function (codigo, alunos) {
        var i = 0;
        for (i = 0; i < alunos.length; i++) {
            if (codigo == alunos[i].codigo) {
                return alunos[i];
            }
        }
    };
    PinPage.prototype.backPage = function () {
        this.router.navigateByUrl("/aula");
    };
    PinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pin",
            template: __webpack_require__(/*! ./pin.page.html */ "./src/app/pin/pin.page.html"),
            styles: [__webpack_require__(/*! ./pin.page.scss */ "./src/app/pin/pin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_4__["NomeInstrutorService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PinPage);
    return PinPage;
}());



/***/ })

}]);
//# sourceMappingURL=pin-pin-module.js.map
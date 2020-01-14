(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manutencao-aula-manutencao-aula-module"],{

/***/ "./src/app/manutencao-aula/manutencao-aula.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/manutencao-aula/manutencao-aula.module.ts ***!
  \***********************************************************/
/*! exports provided: ManutencaoAulaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManutencaoAulaPageModule", function() { return ManutencaoAulaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manutencao_aula_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manutencao-aula.page */ "./src/app/manutencao-aula/manutencao-aula.page.ts");







var routes = [
    {
        path: '',
        component: _manutencao_aula_page__WEBPACK_IMPORTED_MODULE_6__["ManutencaoAulaPage"]
    }
];
var ManutencaoAulaPageModule = /** @class */ (function () {
    function ManutencaoAulaPageModule() {
    }
    ManutencaoAulaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_manutencao_aula_page__WEBPACK_IMPORTED_MODULE_6__["ManutencaoAulaPage"]]
        })
    ], ManutencaoAulaPageModule);
    return ManutencaoAulaPageModule;
}());



/***/ }),

/***/ "./src/app/manutencao-aula/manutencao-aula.page.html":
/*!***********************************************************!*\
  !*** ./src/app/manutencao-aula/manutencao-aula.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title style=\"font-size: small\" text-center\n      >Complete sua Aula, {{ nomeinstrutor }}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"mostrarBotoes\">\n    <ion-fab-button (click)=\"backPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"mostrarBotoes\">\n    <ion-fab-button (click)=\"refresh()\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-label>\n    <h2>Tecnicas da aula:</h2>\n  </ion-label>\n  <br />\n\n  <ul *ngFor=\"let _tecnica of tecnicasMostrar\">\n    <li *ngIf=\"_tecnica.tecnicaextra == 0\">{{ _tecnica.nome }}</li>\n  </ul>\n\n  <h2 *ngIf=\"temExtra\">Tecnicas Extra:</h2>\n\n  <ul *ngFor=\"let _tecnica of tecnicasMostrar\">\n    <li *ngIf=\"_tecnica.tecnicaextra == 1\">{{ _tecnica.nome }}</li>\n  </ul>\n\n  <ion-chip\n    ><ion-label>Data da aula: {{ aula.datetime }}</ion-label></ion-chip\n  >\n\n  <ion-searchbar\n    [(ngModel)]=\"searchTerm\"\n    (ngModelChange)=\"teste()\"\n  ></ion-searchbar>\n<ion-button (click)=\"filtra()\" expand=\"full\" id=\"pesquisar\">\n  Pesquisar alunos\n</ion-button>\n  <ng-container *ngIf=\"aula\">\n      <ion-card>\n        <ion-content class=\"lista\">\n          <ion-list *ngFor=\"let aluno of aula.alunos\">\n            <ion-item>\n              <ion-checkbox\n                slot=\"end\"\n                (click)=\"onCheck(aluno.nome, aluno.presenca)\"\n                [(ngModel)]=\"aluno.presenca\"\n              ></ion-checkbox>\n              <ion-label>\n                <h2>{{ aluno.nome }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-content>\n      </ion-card>\n  </ng-container>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id=\"center\">\n      <ion-button\n        expanp=\"block\"\n        class=\"botao\"\n        id=\"botao_registrar\"\n        size=\"large\"\n        disabled=\"true\"\n        (click)=\"registrar()\"\n        ><ion-icon slot=\"end\" name=\"clipboard\"></ion-icon>Registrar</ion-button\n      >\n    </div>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/manutencao-aula/manutencao-aula.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/manutencao-aula/manutencao-aula.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".botao {\n  font-size: 15px; }\n\n#center {\n  text-align: center; }\n\n.lista {\n  height: 50vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFudXRlbmNhby1hdWxhL0M6XFxVc2Vyc1xcR2FicmllbFxcRGVza3RvcFxccHJvamV0b3NcXHRvemlcXHRvemlfbW9iaWxlL3NyY1xcYXBwXFxtYW51dGVuY2FvLWF1bGFcXG1hbnV0ZW5jYW8tYXVsYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFudXRlbmNhby1hdWxhL21hbnV0ZW5jYW8tYXVsYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90YW97XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4jY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4ubGlzdGF7XG4gICAgaGVpZ2h0OiA1MHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/manutencao-aula/manutencao-aula.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/manutencao-aula/manutencao-aula.page.ts ***!
  \*********************************************************/
/*! exports provided: Alunos, aula, ManutencaoAulaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alunos", function() { return Alunos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aula", function() { return aula; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManutencaoAulaPage", function() { return ManutencaoAulaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var Alunos = /** @class */ (function () {
    function Alunos() {
    }
    return Alunos;
}());

var aula = /** @class */ (function () {
    function aula() {
    }
    return aula;
}());

var ManutencaoAulaPage = /** @class */ (function () {
    function ManutencaoAulaPage(load, http, instrutor, router, alertController, navCtrl) {
        this.load = load;
        this.http = http;
        this.instrutor = instrutor;
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "x-version": "1.0.9",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0"
        });
        this.mostraLista = true;
        this.isloading = false;
        this.podepesquisar = false;
        this.mostrarBotoes = true;
    }
    ManutencaoAulaPage.prototype.registrado = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registra;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "sucesso",
                            message: "Registrado com Sucesso!",
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function () {
                                        _this.router.navigateByUrl("/aula");
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
    ManutencaoAulaPage.prototype.sucessoReload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registra;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "",
                            message: "Página recarregada com sucesso",
                            buttons: [{ text: "OK" }]
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
    ManutencaoAulaPage.prototype.reload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registra;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Cuidado",
                            message: "Tem certeza que deseja recarregar a página? Perderá tudo não registrado.",
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function () {
                                        _this._ionview();
                                    }
                                },
                                { text: "CANCELAR" }
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
    ManutencaoAulaPage.prototype.msgconcluir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var conclui;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "sucesso",
                            message: "Concluido com Sucesso!",
                            buttons: [
                                {
                                    text: "OK",
                                    handler: function () {
                                        _this.router.navigateByUrl("/aula");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        conclui = _a.sent();
                        return [4 /*yield*/, conclui.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManutencaoAulaPage.prototype.msgerroconcluir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var concluierro;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "falhou",
                            message: "Registre antes de concluir",
                            buttons: [{ text: "OK" }]
                        })];
                    case 1:
                        concluierro = _a.sent();
                        return [4 /*yield*/, concluierro.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManutencaoAulaPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isloading = true;
                        return [4 /*yield*/, this.load.create({
                                message: "Aguarde por favor",
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
    ManutencaoAulaPage.prototype.dismiss = function () {
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
    ManutencaoAulaPage.prototype.alerta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Cuidado",
                            message: "Registrar antes de voltar?",
                            buttons: [
                                {
                                    text: "SIM",
                                    handler: function () {
                                        if (_this.aula.id != null) {
                                            _this.http
                                                .post(_this.instrutor.getUrl() + "/registrar.php", _this.aula, {
                                                headers: _this.headers
                                            })
                                                .subscribe(function (data) {
                                                console.log(data);
                                                _this.registrado();
                                                _this.dismiss();
                                            });
                                        }
                                        else {
                                            _this.instrutor.setAulaAberta(true);
                                            _this.http
                                                .post(_this.instrutor.getUrl() + "/registrar.php", {
                                                id: "",
                                                descricao: _this.instrutor.getDescricao(),
                                                datetime: _this.instrutor.getAula().datetime,
                                                idaulaprogramada: _this.instrutor.getIdPrograma(),
                                                alunos: _this.aula.alunos,
                                                idtecnicasavulsas: _this.instrutor.getIdTecnicas()
                                            }, { headers: _this.headers })
                                                .subscribe(function (data) {
                                                console.log(data);
                                                _this.dismiss();
                                                _this.aula.id = data.id;
                                                _this.registrado();
                                            });
                                        }
                                    }
                                },
                                {
                                    text: "NAO",
                                    handler: function () {
                                        _this.router.navigateByUrl("/aula");
                                    }
                                }
                            ]
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
    ManutencaoAulaPage.prototype.ngOnInit = function () {
        this.tecnicas = JSON.parse(this.instrutor.getDescricao());
        this.data = this.aula.datetime;
    };
    //aluno.nome.toUpperCase().includes(search_aluno.value.toUpperCase())
    ManutencaoAulaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        window.addEventListener('keyboardWillShow', function (event) {
            _this.mostrarBotoes = false;
            // Describe your logic which will be run each time when keyboard is about to be shown.
        });
        window.addEventListener('keyboardWillHide', function () {
            _this.mostrarBotoes = true;
            // Describe your logic which will be run each time when keyboard is about to be closed.
        });
        document.getElementById('pesquisar').disabled = !this.podepesquisar;
        this.search_aluno = document.getElementById("search_aluno");
        this.nomeinstrutor = this.instrutor.getNome();
        this.presentLoading();
        this.http
            .post(this.instrutor.getUrl() + "/aula.php", { "": "" }, { responseType: "json", headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            _this.tecnicasMostrar = data.tecnicas;
            _this.temExtra = _this.checkTemExtra(_this.tecnicasMostrar);
        });
        this.http
            .get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
            .subscribe(function (data) {
            _this.dismiss();
            console.log(data);
            _this.aula = data;
            _this.mostraLista = true;
            _this.itemsFiltrados = _this.aula.alunos;
        });
        this.alunos_original = this.aula.alunos;
        this.dismiss();
    };
    ManutencaoAulaPage.prototype.onCheck = function (nome, presenca) {
        if (this.aula.alunos != this.alunos_original) {
            (document.getElementById("botao_registrar")).disabled = false;
        }
        this.aula.alunos.find(function (x) { return (x.nome = nome); }).presenca = presenca;
    };
    ManutencaoAulaPage.prototype.registrar = function () {
        var _this = this;
        this.presentLoading();
        if (this.aula.id != null) {
            this.http
                .post(this.instrutor.getUrl() + "/registrar.php", this.aula, {
                headers: this.headers
            })
                .subscribe(function (data) {
                console.log(data);
                _this.registrado();
                _this.dismiss();
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
                alunos: this.aula.alunos,
                idtecnicasavulsas: this.instrutor.getIdTecnicas()
            }, { headers: this.headers })
                .subscribe(function (data) {
                console.log(data);
                _this.dismiss();
                _this.aula.id = data.id;
                _this.registrado();
            });
        }
        this.instrutor.setConteudoConcluir(this.aula);
    };
    ManutencaoAulaPage.prototype.concluir = function () {
        if (this.aula.id != null) {
            this.http
                .post(this.instrutor.getUrl() + "/concluir.php", { id: this.aula.id }, { observe: "response", headers: this.headers })
                .subscribe(function (data) { return console.log(data.status); });
            this.instrutor.setAulaAberta(false);
            this.msgconcluir();
        }
        else {
            this.msgerroconcluir();
        }
    };
    ManutencaoAulaPage.prototype.backPage = function () {
        if (document.getElementById("botao_registrar")
            .disabled == false) {
            this.alerta();
        }
        else {
            this.router.navigateByUrl("/aula");
        }
    };
    ManutencaoAulaPage.prototype.refresh = function () {
        this.reload();
    };
    ManutencaoAulaPage.prototype._ionview = function () {
        this.mostraLista = false;
        this.ionViewWillEnter();
        this.sucessoReload();
    };
    ManutencaoAulaPage.prototype.checkTemExtra = function (tecnicas) {
        var tem = false;
        tecnicas.forEach(function (element) {
            if (element.tecnicaextra == 1) {
                tem = true;
            }
        });
        return tem;
    };
    ManutencaoAulaPage.prototype.filtra = function () {
        var _this = this;
        this.presentLoading();
        this.http
            .post(this.instrutor.getUrl() + "/alunos.php", { search: this.searchTerm }, { headers: this.headers })
            .subscribe(function (data) {
            _this.dismiss();
            console.log(data);
            _this.aula = data;
            _this.mostraLista = true;
            _this.dismiss();
        });
    };
    ManutencaoAulaPage.prototype.teste = function () {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if (this.searchTerm.length >= 3) {
            document.getElementById('pesquisar').disabled = false;
        }
        else {
            document.getElementById('pesquisar').disabled = true;
        }
    };
    ManutencaoAulaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-manutencao-aula",
            template: __webpack_require__(/*! ./manutencao-aula.page.html */ "./src/app/manutencao-aula/manutencao-aula.page.html"),
            styles: [__webpack_require__(/*! ./manutencao-aula.page.scss */ "./src/app/manutencao-aula/manutencao-aula.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_3__["NomeInstrutorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], ManutencaoAulaPage);
    return ManutencaoAulaPage;
}());



/***/ })

}]);
//# sourceMappingURL=manutencao-aula-manutencao-aula-module.js.map
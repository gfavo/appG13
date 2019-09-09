import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NomeInstrutorService } from "../nome-instrutor.service";
import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
var Alunos = /** @class */ (function () {
    function Alunos() {
    }
    return Alunos;
}());
export { Alunos };
var aula = /** @class */ (function () {
    function aula() {
    }
    return aula;
}());
export { aula };
var ManutencaoAulaPage = /** @class */ (function () {
    function ManutencaoAulaPage(load, http, instrutor, router, alertController, navCtrl) {
        this.load = load;
        this.http = http;
        this.instrutor = instrutor;
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.headers = new HttpHeaders({ "x-auth": this.instrutor.getToken(), 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0', 'Pragma': 'no-cache', 'Expires': '0' });
        this.mostraLista = true;
        this.isloading = false;
    }
    ManutencaoAulaPage.prototype.registrado = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var registra;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'sucesso',
                            message: 'Registrado com Sucesso!',
                            buttons: [{ text: "OK", handler: function () { _this.router.navigateByUrl("/aula"); } }]
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var registra;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            message: 'Página recarregada com sucesso',
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var registra;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cuidado',
                            message: 'Tem certeza que deseja recarregar a página? Perderá tudo não registrado.',
                            buttons: [{ text: "OK", handler: function () { _this._ionview(); } }, { text: "CANCELAR" }]
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var conclui;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'sucesso',
                            message: 'Concluido com Sucesso!',
                            buttons: [{ text: "OK", handler: function () { _this.router.navigateByUrl("/aula"); } }]
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var concluierro;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'falhou',
                            message: 'Registre antes de concluir',
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isloading = true;
                        return [4 /*yield*/, this.load.create({
                                message: 'Aguarde por favor',
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isloading = false;
                        return [4 /*yield*/, this.load.dismiss().then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ManutencaoAulaPage.prototype.alerta = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cuidado',
                            message: 'Registrar antes de voltar?',
                            buttons: [{
                                    text: 'SIM',
                                    handler: function () {
                                        if (_this.aula.id != null) {
                                            _this.http.post(_this.instrutor.getUrl() + "/registrar.php", _this.aula, { headers: _this.headers })
                                                .subscribe(function (data) {
                                                console.log(data);
                                                _this.registrado();
                                                _this.dismiss();
                                            });
                                        }
                                        else {
                                            _this.instrutor.setAulaAberta(true);
                                            _this.http.post(_this.instrutor.getUrl() + "/registrar.php", { "id": "", "descricao": _this.instrutor.getDescricao(), "datetime": _this.instrutor.getAula().datetime, "idaulaprogramada": _this.instrutor.getIdPrograma(), "alunos": _this.aula.alunos, "idtecnicasavulsas": _this.instrutor.getIdTecnicas() }, { headers: _this.headers })
                                                .subscribe(function (data) {
                                                console.log(data);
                                                _this.dismiss();
                                                _this.aula.id = data.id;
                                                _this.registrado();
                                            });
                                        }
                                    }
                                }, {
                                    text: 'NAO',
                                    handler: function () {
                                        _this.router.navigateByUrl("/aula");
                                    }
                                }]
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
    ManutencaoAulaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.search_aluno = document.getElementById("search_aluno");
        this.nomeinstrutor = this.instrutor.getNome();
        this.presentLoading();
        this.http.get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
            .subscribe(function (data) {
            _this.dismiss();
            console.log(data);
            _this.aula = data;
            _this.mostraLista = true;
        });
        this.alunos_original = this.aula.alunos;
        this.dismiss();
    };
    ManutencaoAulaPage.prototype.onCheck = function () {
        if (this.aula.alunos != this.alunos_original) {
            document.getElementById("botao_registrar").disabled = false;
        }
    };
    ManutencaoAulaPage.prototype.registrar = function () {
        var _this = this;
        this.presentLoading();
        if (this.aula.id != null) {
            this.http.post(this.instrutor.getUrl() + "/registrar.php", this.aula, { headers: this.headers })
                .subscribe(function (data) {
                console.log(data);
                _this.registrado();
                _this.dismiss();
            });
        }
        else {
            this.instrutor.setAulaAberta(true);
            this.http.post(this.instrutor.getUrl() + "/registrar.php", { "id": "", "descricao": this.instrutor.getDescricao(), "datetime": this.instrutor.getAula().datetime, "idaulaprogramada": this.instrutor.getIdPrograma(), "alunos": this.aula.alunos, "idtecnicasavulsas": this.instrutor.getIdTecnicas() }, { headers: this.headers })
                .subscribe(function (data) {
                console.log(data);
                _this.dismiss();
                _this.aula.id = data.id;
                _this.registrado();
            });
        }
    };
    ManutencaoAulaPage.prototype.concluir = function () {
        if (this.aula.id != null) {
            this.http.post(this.instrutor.getUrl() + "/concluir.php", { "id": this.aula.id }, { observe: "response", headers: this.headers })
                .subscribe(function (data) { return console.log(data.status); });
            this.instrutor.setAulaAberta(false);
            this.msgconcluir();
        }
        else {
            this.msgerroconcluir();
        }
    };
    ManutencaoAulaPage.prototype.backPage = function () {
        if (document.getElementById("botao_registrar").disabled == false) {
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
    ManutencaoAulaPage = tslib_1.__decorate([
        Component({
            selector: 'app-manutencao-aula',
            templateUrl: './manutencao-aula.page.html',
            styleUrls: ['./manutencao-aula.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController, HttpClient, NomeInstrutorService, Router, AlertController, NavController])
    ], ManutencaoAulaPage);
    return ManutencaoAulaPage;
}());
export { ManutencaoAulaPage };
//# sourceMappingURL=manutencao-aula.page.js.map
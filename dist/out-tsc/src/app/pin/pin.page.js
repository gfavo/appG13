import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModaldetalhesPage } from '../modaldetalhes/modaldetalhes.page';
var PinPage = /** @class */ (function () {
    function PinPage(modalController, alertController, router, instrutor, http) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.router = router;
        this.instrutor = instrutor;
        this.http = http;
        this.codigo = "";
        this.headers = new HttpHeaders({ "x-auth": this.instrutor.getToken(), 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0', 'Pragma': 'no-cache', 'Expires': '0' });
    }
    PinPage.prototype.limpa_codigo = function () {
        document.getElementById("pincode").value = "";
        this.codigo = "";
    };
    PinPage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModaldetalhesPage,
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var registra;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirma',
                            message: 'Confirmar presença para:  ' + nome.bold() + " ?",
                            buttons: [
                                {
                                    text: "Sim", handler: function () {
                                        _this.achaAluno(_this.codigo, _this.aula.alunos).presenca = true;
                                        _this.http.post(_this.instrutor.getUrl() + "/registrar.php", _this.aula, { headers: _this.headers })
                                            .subscribe(function (res) {
                                            console.log(res);
                                            _this.aula.id = res.id;
                                        });
                                        _this.limpa_codigo();
                                    }
                                },
                                { text: "Não", handler: function () { _this.limpa_codigo(); } }
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var presente;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Note',
                            message: message,
                            buttons: [{ text: 'OK', handler: function () { if (act) {
                                        _this.limpa_codigo();
                                    } } }]
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var presente;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Note',
                            message: "Você deve primeiro registrar uma presença antes de concluir a aula",
                            buttons: ['OK']
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var presente;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Note',
                            message: "A aula foi concluida com sucesso!",
                            buttons: [{ text: "Ok", handler: function () { _this.router.navigate(['/aula']); } }]
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var presente;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Note',
                            message: "O aluno " + nome.bold() + " já está com presença",
                            buttons: [{ text: 'OK', handler: function () { _this.limpa_codigo(); } }]
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var presente;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Note',
                            message: "Deseja concluir?",
                            buttons: [{ text: "Não" }, { text: "Sim", handler: function () {
                                        if (_this.aula.id != null) {
                                            _this.http.post(_this.instrutor.getUrl() + "/concluir.php", { "id": _this.aula.id, "tecnicasavulsas": _this.instrutor.getIdTecnicas() }, { observe: "response", headers: _this.headers })
                                                .subscribe(function (data) { return console.log(data.status); });
                                            _this.instrutor.setAulaAberta(false);
                                            _this.sucessoconcluir();
                                        }
                                        else {
                                            _this.erroconcluir();
                                        }
                                    } }]
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
    PinPage.prototype.ngOnInit = function () {
    };
    PinPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.http.get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
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
            if (document.getElementById("pincode").value.length < 5) {
                this.codigo += number;
                console.log(this.codigo);
                document.getElementById("pincode").value += number;
            }
        }
    };
    PinPage.prototype.mostrarSenha = function () {
        if (document.getElementById("pincode").type == "password") {
            document.getElementById("mostrar").fill = "solid";
            document.getElementById("pincode").type = "text";
        }
        else {
            document.getElementById("mostrar").fill = "outline";
            document.getElementById("pincode").type = "password";
        }
    };
    PinPage.prototype.okAluno = function () {
        var _this = this;
        this.instrutor.setAulaAberta(true);
        if (this.aula.id == null) {
            this.http.post(this.instrutor.getUrl() + "/registrar.php", { "id": "", "descricao": this.instrutor.getDescricao(), "datetime": this.instrutor.getAula().datetime, "idaulaprogramada": this.instrutor.getIdPrograma(), "alunos": this.aula.alunos }, { headers: this.headers })
                .subscribe(function (res) {
                console.log(res);
                _this.aula.id = res.id;
            });
        }
        else {
            this.instrutor.setAulaAberta(true);
            this.http.post(this.instrutor.getUrl() + "/registrar.php", { "id": "", "descricao": this.instrutor.getDescricao(), "datetime": this.instrutor.getAula().datetime, "idaulaprogramada": this.instrutor.getIdPrograma(), "idtecnicasavulsas": this.instrutor.getIdTecnicas(), "alunos": this.aula.alunos }, { headers: this.headers })
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
                console.log('indefinido' + this.codigo + this.aula.alunos[0].nome);
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
    PinPage = tslib_1.__decorate([
        Component({
            selector: 'app-pin',
            templateUrl: './pin.page.html',
            styleUrls: ['./pin.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, AlertController, Router, NomeInstrutorService, HttpClient])
    ], PinPage);
    return PinPage;
}());
export { PinPage };
//# sourceMappingURL=pin.page.js.map
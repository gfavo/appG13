import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { AlertController } from '@ionic/angular';
var QrPage = /** @class */ (function () {
    function QrPage(alertController, instrutor, barCode, http, router) {
        this.alertController = alertController;
        this.instrutor = instrutor;
        this.barCode = barCode;
        this.http = http;
        this.router = router;
        this.scannedCode = null;
        this.codigo = "";
        this.teste_nome = "";
        this.headers = new HttpHeaders({ "x-auth": this.instrutor.getToken(), 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0', 'Pragma': 'no-cache', 'Expires': '0' });
        this.situacao = "";
    }
    QrPage.prototype.simple_alert = function (message, act) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var presente;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Note',
                            message: message,
                            buttons: [{ text: 'OK', handler: function () { if (act) {
                                        _this.router.navigate(['/aula']);
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
    QrPage.prototype.ngOnInit = function () {
    };
    QrPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.http.get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            _this.aula = data;
        });
    };
    QrPage.prototype.scanCode = function () {
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
        this.barCode.scan().then(function (data) {
            _this.scannedCode = data.text;
            _this.aluno_cobaia = _this.achaAluno(_this.scannedCode, _this.aula.alunos);
            if (_this.procurarAluno(_this.scannedCode, _this.aula.alunos) == false) {
                _this.simple_alert("O aluno não existe na sua grade!", false);
            }
            else {
                if (_this.aluno_cobaia.presenca == false) {
                    _this.achaAluno(_this.scannedCode, _this.aula.alunos).presenca = true;
                    _this.http.post(_this.instrutor.getUrl() + "/registrar.php", _this.aula, { headers: _this.headers })
                        .subscribe(function (res) {
                        console.log(res);
                        _this.aula.id = res.id;
                    });
                    _this.simple_alert("O aluno foi presenciado com sucesso!", false);
                }
                else {
                    _this.simple_alert("O aluno existe, porem ja tem presença!", false);
                }
            }
        });
    };
    QrPage.prototype.encerra = function () {
        if (this.aula.id != null) {
            this.http.post(this.instrutor.getUrl() + "/concluir.php", { "id": this.aula.id, "tecnicasavulsas": this.instrutor.getIdTecnicas() }, { observe: "response", headers: this.headers })
                .subscribe(function (data) { return console.log(data.status); });
            this.instrutor.setAulaAberta(false);
            this.simple_alert("Foi concluída com sucesso!", true);
        }
        else {
            this.simple_alert("Primeiro escaneie um aluno!", false);
        }
    };
    QrPage.prototype.procurarAluno = function (codigo, alunos) {
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
    QrPage.prototype.achaAluno = function (codigo, alunos) {
        var i = 0;
        for (i = 0; i < alunos.length; i++) {
            if (codigo == alunos[i].codigo) {
                return alunos[i];
            }
        }
    };
    QrPage.prototype.backPage = function () {
        this.router.navigateByUrl("/aula");
    };
    QrPage = tslib_1.__decorate([
        Component({
            selector: 'app-qr',
            templateUrl: './qr.page.html',
            styleUrls: ['./qr.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController, NomeInstrutorService, BarcodeScanner, HttpClient, Router])
    ], QrPage);
    return QrPage;
}());
export { QrPage };
//# sourceMappingURL=qr.page.js.map
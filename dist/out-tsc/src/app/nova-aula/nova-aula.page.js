import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NomeInstrutorService } from "../nome-instrutor.service";
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ModaltecnicasPage } from '../modaltecnicas/modaltecnicas.page';
var NovaAulaPage = /** @class */ (function () {
    function NovaAulaPage(modalController, instrutor, router, alertController) {
        this.modalController = modalController;
        this.instrutor = instrutor;
        this.router = router;
        this.alertController = alertController;
        this.data = new Date();
    }
    NovaAulaPage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModaltecnicasPage,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NovaAulaPage.prototype.alertaDeErro = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Erro',
                            message: 'Adicione uma aula e digite uma descrição para a mesma',
                            buttons: ['OK']
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
    NovaAulaPage.prototype.ngOnInit = function () {
        this.aula = this.instrutor.getAula();
        this.instrutor.setDatatime(this.aula.datetime);
    };
    NovaAulaPage.prototype.actionProgramadas = function () {
        var _this = this;
        this.aula_escolhida = document.getElementById("_aulaProgramada").value;
        this.instrutor.setIdPrograma(this.aula.aulasProgramadas.find(function (x) { return x.titulo === _this.aula_escolhida; }).id);
        this.aula_mostrada = this.aula.aulasProgramadas.find(function (x) { return x.titulo === _this.aula_escolhida; });
        this.instrutor.setAulaSelecionada(this.aula_mostrada);
    };
    NovaAulaPage.prototype.continuar = function () {
        this.descricao_aula = document.getElementById("descricao").value;
        this.instrutor.setDescricao(this.descricao_aula);
        if (this.instrutor.getIdPrograma() != null && this.descricao_aula != "") {
            this.router.navigate(['/metodo']);
        }
        else {
            this.alertaDeErro();
        }
    };
    NovaAulaPage.prototype.voltar = function () {
        this.instrutor.setIdPrograma(null);
        this.router.navigate(['/aula']);
    };
    NovaAulaPage.prototype.backPage = function () {
        this.router.navigateByUrl("/aula");
    };
    NovaAulaPage.prototype.mostraModal = function () {
        if (this.aula_mostrada != null) {
            this.presentModal();
        }
        else {
            alert('Escolha primeiro uma aula semanal!');
        }
    };
    NovaAulaPage = tslib_1.__decorate([
        Component({
            selector: 'app-nova-aula',
            templateUrl: './nova-aula.page.html',
            styleUrls: ['./nova-aula.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, NomeInstrutorService, Router, AlertController])
    ], NovaAulaPage);
    return NovaAulaPage;
}());
export { NovaAulaPage };
//# sourceMappingURL=nova-aula.page.js.map
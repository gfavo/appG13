import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
var PrincipalalunoPage = /** @class */ (function () {
    function PrincipalalunoPage(instrutor, router, alertController) {
        this.instrutor = instrutor;
        this.router = router;
        this.alertController = alertController;
        this.exibe_diretorio = true;
    }
    PrincipalalunoPage.prototype.alertaNaoPago = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            message: 'Você deve ser um usuario premium para acessar esse conteúdo!',
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
    PrincipalalunoPage.prototype.ngOnInit = function () {
    };
    PrincipalalunoPage.prototype.ionViewWillEnter = function () {
        if (this.instrutor.getRole() == "ALUNOPAGO") {
            this.exibe_diretorio = true;
        }
        else {
            this.exibe_diretorio = false;
        }
    };
    PrincipalalunoPage.prototype.abreDiretorio = function () {
        if (this.instrutor.getRole() == "ALUNOPAGO") {
            this.router.navigate(["/diretorio"]);
        }
        else {
            this.alertaNaoPago();
        }
    };
    PrincipalalunoPage = tslib_1.__decorate([
        Component({
            selector: 'app-principalaluno',
            templateUrl: './principalaluno.page.html',
            styleUrls: ['./principalaluno.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NomeInstrutorService,
            Router,
            AlertController])
    ], PrincipalalunoPage);
    return PrincipalalunoPage;
}());
export { PrincipalalunoPage };
//# sourceMappingURL=principalaluno.page.js.map
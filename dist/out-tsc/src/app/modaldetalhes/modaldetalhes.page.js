import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NomeInstrutorService } from '../nome-instrutor.service';
var ModaldetalhesPage = /** @class */ (function () {
    function ModaldetalhesPage(modalCtrl, instrutor) {
        this.modalCtrl = modalCtrl;
        this.instrutor = instrutor;
    }
    ModaldetalhesPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    ModaldetalhesPage.prototype.ngOnInit = function () {
        this.tecnicas = JSON.parse(this.instrutor.getDescricao());
        this.data = this.instrutor.getDatatime();
    };
    ModaldetalhesPage = tslib_1.__decorate([
        Component({
            selector: 'app-modaldetalhes',
            templateUrl: './modaldetalhes.page.html',
            styleUrls: ['./modaldetalhes.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, NomeInstrutorService])
    ], ModaldetalhesPage);
    return ModaldetalhesPage;
}());
export { ModaldetalhesPage };
//# sourceMappingURL=modaldetalhes.page.js.map
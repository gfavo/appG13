import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NomeInstrutorService } from '../nome-instrutor.service';
var ModalvideoPage = /** @class */ (function () {
    function ModalvideoPage(modalController, instrutor) {
        this.modalController = modalController;
        this.instrutor = instrutor;
    }
    ModalvideoPage.prototype.ngOnInit = function () {
    };
    ModalvideoPage.prototype.ionViewWillEnter = function () {
        this.idvimeo = this.instrutor.getIdVimeo();
        this.senhavimeo = this.instrutor.getSenhaVimeo();
        document.getElementById('player').src = "https://player.vimeo.com/video/" + this.idvimeo;
    };
    ModalvideoPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    ModalvideoPage = tslib_1.__decorate([
        Component({
            selector: 'app-modalvideo',
            templateUrl: './modalvideo.page.html',
            styleUrls: ['./modalvideo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, NomeInstrutorService])
    ], ModalvideoPage);
    return ModalvideoPage;
}());
export { ModalvideoPage };
//# sourceMappingURL=modalvideo.page.js.map
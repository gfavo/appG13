import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { ModalvideoPage } from '../modalvideo/modalvideo.page';
import { ModalController } from '@ionic/angular';
var tecnicasDir = /** @class */ (function () {
    function tecnicasDir() {
    }
    return tecnicasDir;
}());
export { tecnicasDir };
var conteudoGetDiretorio = /** @class */ (function () {
    function conteudoGetDiretorio() {
    }
    return conteudoGetDiretorio;
}());
export { conteudoGetDiretorio };
var DiretorioPage = /** @class */ (function () {
    function DiretorioPage(modalController, httpClient, instrutor) {
        this.modalController = modalController;
        this.httpClient = httpClient;
        this.instrutor = instrutor;
        this.headers = new HttpHeaders({ "x-auth": this.instrutor.getToken(), 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0', 'Pragma': 'no-cache', 'Expires': '0' });
        this.podeExpandir = false;
    }
    DiretorioPage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModalvideoPage,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiretorioPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.subscription = this.httpClient.get(this.instrutor.getUrl() + "/diretorio.php", { responseType: "json", headers: this.headers })
            .subscribe(function (data) {
            _this.ConteudoDiretorio = data;
            _this.ConteudoDiretorio.forEach(function (element) {
                element.expandida = false;
            });
            console.log(_this.ConteudoDiretorio);
            console.log(data);
        });
    };
    DiretorioPage.prototype.ngOnInit = function () {
    };
    DiretorioPage.prototype.openCategoria = function (x) {
        var _this = this;
        this.podeExpandir = true;
        this.ConteudoDiretorio.forEach(function (element) {
            if (element.expandida == true) {
                _this.podeExpandir = false;
            }
        });
        if (this.podeExpandir == true) {
            this.ConteudoDiretorio.find(function (y) { return y.categoria === x; }).expandida = true;
            this.tecnicaExpandida = this.ConteudoDiretorio.find(function (y) { return y.categoria === x; });
        }
        else {
            if (this.ConteudoDiretorio.find(function (y) { return y.categoria === x; }).expandida == true) {
                this.ConteudoDiretorio.find(function (y) { return y.categoria === x; }).expandida = false;
            }
        }
    };
    DiretorioPage.prototype.abreVideo = function (numeroTecnica, senhavimeo) {
        this.instrutor.setIdVimeo(numeroTecnica);
        this.instrutor.setSenhaVimeo(senhavimeo);
        this.presentModal();
    };
    DiretorioPage = tslib_1.__decorate([
        Component({
            selector: 'app-diretorio',
            templateUrl: './diretorio.page.html',
            styleUrls: ['./diretorio.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, HttpClient, NomeInstrutorService])
    ], DiretorioPage);
    return DiretorioPage;
}());
export { DiretorioPage };
//# sourceMappingURL=diretorio.page.js.map
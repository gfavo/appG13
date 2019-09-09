import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NomeInstrutorService } from "../nome-instrutor.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, ModalController } from '@ionic/angular';
import { ModalvideoPage } from '../modalvideo/modalvideo.page';
var aluno = /** @class */ (function () {
    function aluno() {
    }
    return aluno;
}());
export { aluno };
var aula_exemplo = /** @class */ (function () {
    function aula_exemplo() {
    }
    return aula_exemplo;
}());
export { aula_exemplo };
var conjunto_aula_exemplo = /** @class */ (function () {
    function conjunto_aula_exemplo() {
    }
    return conjunto_aula_exemplo;
}());
export { conjunto_aula_exemplo };
var Aula_aberta = /** @class */ (function () {
    function Aula_aberta() {
    }
    return Aula_aberta;
}());
export { Aula_aberta };
var tecnicas = /** @class */ (function () {
    function tecnicas() {
    }
    return tecnicas;
}());
export { tecnicas };
var aula_nova = /** @class */ (function () {
    function aula_nova() {
    }
    return aula_nova;
}());
export { aula_nova };
var AulaPage = /** @class */ (function () {
    function AulaPage(modalController, load, menu, httpClient, instrutor, router, _activatedRoute) {
        this.modalController = modalController;
        this.load = load;
        this.menu = menu;
        this.httpClient = httpClient;
        this.instrutor = instrutor;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.headers = new HttpHeaders({ "x-auth": this.instrutor.getToken(), 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0', 'Pragma': 'no-cache', 'Expires': '0' });
        this.isloading = false;
    }
    AulaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.presentLoading();
        this.nome_instrutor = this.instrutor.getNome();
        this.subscription = this.httpClient.post(this.instrutor.getUrl() + "/aula.php", { '': '' }, { responseType: "json", headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            _this.data_aula = data.datetime;
            _this.aula_aberta = data.aberto;
            _this.aulaVimeo = data;
            _this.tecnicasVimeo = _this.aulaVimeo.tecnicas;
            _this.instrutor.setAulaAberta(_this.aula_aberta);
            _this.dismiss();
            _this.tecnicas = data.tecnicas;
            if (data.aberto == false) {
                _this.aula_nova = data;
            }
            else {
                _this.instrutor.setDatatime(_this.data_aula);
                if (_this.instrutor.getDescricao() == undefined)
                    _this.instrutor.setDescricao(JSON.stringify(data.tecnicas));
            }
        });
    };
    AulaPage.prototype.presentModal = function () {
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
    AulaPage.prototype.presentLoading = function () {
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
    AulaPage.prototype.dismiss = function () {
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
    AulaPage.prototype.ngOnInit = function () { };
    AulaPage.prototype.onClick = function () {
        console.log('CLICKOU');
        alert(this.data_aula + "e se está aberta: " + this.aula_aberta);
    };
    AulaPage.prototype.completarAula = function () {
        this.router.navigate(["/metodo"]);
    };
    AulaPage.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    AulaPage.prototype.formatZero = function (numero) {
        if (parseInt(numero) < 10) {
            return "0" + numero;
        }
        return numero;
    };
    AulaPage.prototype.novaAula = function () {
        this.data = new Date();
        this.aula_nova.datetime = this.formatDate(this.data.toDateString()) + " " + this.data.getHours().toString() + ":" + this.formatZero(this.data.getMinutes().toString()) + ":" + this.formatZero(this.data.getSeconds().toString());
        this.instrutor.setAula(this.aula_nova);
        this.router.navigate(["/nova-aula"]);
    };
    AulaPage.prototype.openMenu = function () {
        alert('aa');
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    AulaPage.prototype.backPage = function () {
        this.router.navigateByUrl("/aula");
    };
    AulaPage.prototype.abreVideo = function (numeroTecnica, senhavimeo) {
        this.instrutor.setIdVimeo(numeroTecnica);
        this.instrutor.setSenhaVimeo(senhavimeo);
        this.presentModal();
    };
    AulaPage = tslib_1.__decorate([
        Component({
            selector: 'app-aula',
            templateUrl: './aula.page.html',
            styleUrls: ['./aula.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, LoadingController, MenuController, HttpClient, NomeInstrutorService, Router, ActivatedRoute])
    ], AulaPage);
    return AulaPage;
}());
export { AulaPage };
//# sourceMappingURL=aula.page.js.map
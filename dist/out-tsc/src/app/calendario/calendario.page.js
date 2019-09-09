import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalController, LoadingController, MenuController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { ModalvideoPage } from '../modalvideo/modalvideo.page';
var conteudo = /** @class */ (function () {
    function conteudo() {
    }
    return conteudo;
}());
var aula_data = /** @class */ (function () {
    function aula_data() {
    }
    return aula_data;
}());
var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(modalController, load, menu, httpClient, instrutor, router, _activatedRoute, alertController) {
        this.modalController = modalController;
        this.load = load;
        this.menu = menu;
        this.httpClient = httpClient;
        this.instrutor = instrutor;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.alertController = alertController;
        this.tecnicasExistem = false;
        this.headers = new HttpHeaders({ "x-auth": this.instrutor.getToken(), 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0', 'Pragma': 'no-cache', 'Expires': '0' });
        this.event = {
            title: '',
            startTime: '',
            endTime: '',
            senhavimeoid: '',
            vimeoid: ''
        };
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
        this.eventSource = [];
    }
    CalendarioPage.prototype.ngOnInit = function () {
    };
    CalendarioPage.prototype.presentModal = function () {
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
    CalendarioPage.prototype.alertaNaoPago = function () {
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
    CalendarioPage.prototype.ionViewWillEnter = function () {
        this.subscription = this.httpClient.get(this.instrutor.getUrl() + "/calendario.php", { responseType: "json", headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    CalendarioPage.prototype.onViewTitleChanged = function (title) {
        var _this = this;
        this.viewTitle = title;
        var i = 0;
        for (i = 0; i < this.viewTitle.length; i++) {
            if (this.viewTitle.charAt(i) == ' ') {
                this.numeroEspaco = i;
            }
        }
        this.mesEscrito = this.viewTitle.substring(0, this.numeroEspaco);
        this.ano = this.viewTitle.substr(this.numeroEspaco + 1);
        switch (this.mesEscrito) {
            case 'January':
                this.mes = "01";
                break;
            case 'February':
                this.mes = "02";
                break;
            case 'March':
                this.mes = "03";
                break;
            case 'April':
                this.mes = "04";
                break;
            case 'May':
                this.mes = "05";
                break;
            case 'June':
                this.mes = "06";
                break;
            case 'July':
                this.mes = "07";
                break;
            case 'August':
                this.mes = "08";
                break;
            case 'September':
                this.mes = "09";
                break;
            case 'October':
                this.mes = "10";
                break;
            case 'November':
                this.mes = "11";
                break;
            case 'December':
                this.mes = "12";
                break;
        }
        this.subscription = this.httpClient.get(this.instrutor.getUrl() + "/calendario.php" + "?mes=" + this.mes + "&ano=" + this.ano, { responseType: "json", headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            _this.aula_datas = data.aula_datas;
            _this.aula_datas.forEach(function (element) {
                _this.addEvent(element.nome, new Date(element.data), element.vimeoid, element.senhavimeoid);
            });
        });
    };
    CalendarioPage.prototype.onEventSelected = function ($event) {
        if (this.instrutor.getRole() == "ALUNOPAGO") {
            this.instrutor.setIdVimeo($event.idvimeo);
            this.instrutor.setSenhaVimeo($event.senhavimeo);
            this.presentModal();
        }
        else {
            this.alertaNaoPago();
        }
    };
    CalendarioPage.prototype.onTimeSelected = function (data) {
        this.currentDate = data.selectedTime;
        this.dia = this.currentDate.getDate().toString();
        this.tecnicasExistem = false;
        if (data.events == null) {
            this.tecnicasDia = "";
        }
        else {
            this.tecnicasDia = data.events;
            this.instrutor.setTecnicasDia(data.events);
        }
        if (this.tecnicasDia != "") {
            this.tecnicasExistem = true;
        }
    };
    CalendarioPage.prototype.resetEvent = function () {
        this.event = {
            title: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            senhavimeoid: '',
            vimeoid: ''
        };
    };
    CalendarioPage.prototype.addEvent = function (nome, data, id, senhavimeo) {
        var eventCopy = {
            title: nome,
            startTime: data,
            endTime: data,
            idvimeo: id,
            senhavimeo: senhavimeo
        };
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    tslib_1.__decorate([
        ViewChild(CalendarComponent),
        tslib_1.__metadata("design:type", CalendarComponent)
    ], CalendarioPage.prototype, "myCal", void 0);
    CalendarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-calendario',
            templateUrl: './calendario.page.html',
            styleUrls: ['./calendario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            LoadingController,
            MenuController,
            HttpClient,
            NomeInstrutorService,
            Router,
            ActivatedRoute,
            AlertController])
    ], CalendarioPage);
    return CalendarioPage;
}());
export { CalendarioPage };
//# sourceMappingURL=calendario.page.js.map
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NomeInstrutorService } from "../nome-instrutor.service";
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
var headers = new HttpHeaders({ 'teste': '123' });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
export { Customer };
var HomePage = /** @class */ (function () {
    function HomePage(load, storage, network, httpClient, router, instrutor, alertController) {
        this.load = load;
        this.storage = storage;
        this.network = network;
        this.httpClient = httpClient;
        this.router = router;
        this.instrutor = instrutor;
        this.alertController = alertController;
        this.pessoa = new Customer;
        this.lembrar = false;
        this.isloading = false;
    }
    HomePage.prototype.alertaDeErro = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Erro',
                            message: 'Sua senha ou usuario está errado.Favor tentar novamente.',
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
    HomePage.prototype.presentLoading = function () {
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
    HomePage.prototype.dismiss = function () {
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
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.pessoa.pass = "";
        this.pessoa.user = "";
        this.lembrar = false;
        this.status = 0;
        if (this.instrutor.getUrl() == null) {
            this.instrutor.setUrl("https://www.g13bjj.com.br/ct/mobile");
        }
        this.storage.get('login').then(function (val) {
            if (val != "") {
                _this.storage.get('login').then(function (val) {
                    _this.pessoa.user = val;
                });
                _this.storage.get('senha').then(function (val) {
                    _this.pessoa.pass = val;
                    _this.onSubmit();
                });
            }
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        /*this.status = 0;
    
    
        if (this.instrutor.getUrl() == null) {
          this.instrutor.setUrl("https://www.g13bjj.com.br/ct/mobile");
        }
    
    
    
    
        this.storage.get('login').then((val) => {
    
          if (val != "") {
            this.storage.get('login').then((val) => {
              this.pessoa.user = val;
            });
            this.storage.get('senha').then((val) => {
              this.pessoa.pass = val;
              this.onSubmit();
            });
    
          }
        });*/
    };
    //https://www.g13bjj.com.br/ct/mobile/login.php
    HomePage.prototype.mostrarUrl = function () {
        this.testeUrl = this.instrutor.getUrl();
    };
    HomePage.prototype.onSubmit = function () {
        var _this = this;
        if (this.pessoa.user == "painel" && this.pessoa.pass == "painelmaster123") {
            this.router.navigate(["/painel"]);
        }
        else {
            this.presentLoading();
            this.httpClient.post(this.instrutor.getUrl() + "/login.php", JSON.stringify(this.pessoa), { responseType: 'text', observe: "response", withCredentials: true })
                .subscribe(function (response) {
                _this.dismiss();
                _this.status = response.status;
                if (_this.lembrar == true) {
                    _this.storage.set('login', _this.pessoa.user);
                    _this.storage.set('senha', _this.pessoa.pass);
                }
                _this.instrutor.setRole(response.headers.get("x-role"));
                if (response.headers.get("x-role") == "INSTRUTOR") {
                    _this.router.navigate(["/aula"]);
                }
                else {
                    _this.router.navigate(["/principalaluno"]);
                }
                _this.instrutor.setNome(_this.pessoa.user);
                _this.instrutor.setToken(response.headers.get("x-auth"));
            }, function (error) {
                _this.dismiss();
                // alert("Login ou senha errados, por favor , tente novamente");
                _this.alertaDeErro();
                _this.status = error.status;
            });
        }
    };
    HomePage.prototype.esquece = function () {
        this.storage.set('login', '');
        this.storage.set('senha', '');
    };
    HomePage.prototype.lembrarTrue = function () {
        if (this.lembrar == false) {
            this.lembrar = true;
        }
        else {
            this.lembrar = false;
        }
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController, Storage, Network, HttpClient, Router, NomeInstrutorService, AlertController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map
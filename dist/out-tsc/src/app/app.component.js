import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NomeInstrutorService } from './nome-instrutor.service';
import { Storage } from '@ionic/storage';
var AppComponent = /** @class */ (function () {
    function AppComponent(storage, intrutor, menu, router, platform, splashScreen, statusBar) {
        this.storage = storage;
        this.intrutor = intrutor;
        this.menu = menu;
        this.router = router;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.logoff = function () {
        this.intrutor.setAula(undefined);
        this.intrutor.setAulaAberta(undefined);
        this.intrutor.setAulaSelecionada(undefined);
        this.intrutor.setDatatime(undefined);
        this.intrutor.setDescricao(undefined);
        this.intrutor.setIdPrograma(undefined);
        this.intrutor.setNome(undefined);
        this.intrutor.setToken(undefined);
        this.intrutor.setUrl(undefined);
        this.storage.set('login', '');
        this.storage.set('senha', '');
        this.menu.toggle();
        this.router.navigate(["/home"]);
    };
    AppComponent.prototype.homepage = function () {
        this.menu.toggle();
        if (this.intrutor.getRole() == "INSTRUTOR") {
            this.router.navigate(["/aula"]);
        }
        else {
            this.router.navigate(["/principalaluno"]);
        }
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage,
            NomeInstrutorService,
            MenuController,
            Router,
            Platform,
            SplashScreen,
            StatusBar])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
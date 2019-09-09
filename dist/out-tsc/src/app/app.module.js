import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModaldetalhesPageModule } from './modaldetalhes/modaldetalhes.module';
import { NgxQRCodeModule } from 'ngx-qrcode3';
import { Network } from '@ionic-native/network/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { ModaltecnicasPageModule } from './modaltecnicas/modaltecnicas.module';
import { ModalvideoPageModule } from './modalvideo/modalvideo.module';
import { NgCalendarModule } from 'ionic2-calendar';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [NgxQRCodeModule, NgCalendarModule, FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ModaltecnicasPageModule, ModaldetalhesPageModule, ModalvideoPageModule, IonicStorageModule.forRoot()],
            providers: [
                Network,
                QRScanner,
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
                BarcodeScanner
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
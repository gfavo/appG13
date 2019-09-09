import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QrPage } from './qr.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode3';
var routes = [
    {
        path: '',
        component: QrPage
    }
];
var QrPageModule = /** @class */ (function () {
    function QrPageModule() {
    }
    QrPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                NgxQRCodeModule,
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [QrPage],
            providers: [BarcodeScanner],
        })
    ], QrPageModule);
    return QrPageModule;
}());
export { QrPageModule };
//# sourceMappingURL=qr.module.js.map
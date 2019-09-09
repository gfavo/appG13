import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalvideoPage } from './modalvideo.page';
var routes = [
    {
        path: '',
        component: ModalvideoPage
    }
];
var ModalvideoPageModule = /** @class */ (function () {
    function ModalvideoPageModule() {
    }
    ModalvideoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalvideoPage]
        })
    ], ModalvideoPageModule);
    return ModalvideoPageModule;
}());
export { ModalvideoPageModule };
//# sourceMappingURL=modalvideo.module.js.map
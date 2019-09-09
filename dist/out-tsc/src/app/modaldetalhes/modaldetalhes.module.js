import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModaldetalhesPage } from './modaldetalhes.page';
var routes = [
    {
        path: '',
        component: ModaldetalhesPage
    }
];
var ModaldetalhesPageModule = /** @class */ (function () {
    function ModaldetalhesPageModule() {
    }
    ModaldetalhesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModaldetalhesPage],
            entryComponents: [ModaldetalhesPage]
        })
    ], ModaldetalhesPageModule);
    return ModaldetalhesPageModule;
}());
export { ModaldetalhesPageModule };
//# sourceMappingURL=modaldetalhes.module.js.map
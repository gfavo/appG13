import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AulaPage } from './aula.page';
var routes = [
    {
        path: '',
        component: AulaPage
    }
];
var AulaPageModule = /** @class */ (function () {
    function AulaPageModule() {
    }
    AulaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AulaPage]
        })
    ], AulaPageModule);
    return AulaPageModule;
}());
export { AulaPageModule };
//# sourceMappingURL=aula.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NovaAulaPage } from './nova-aula.page';
var routes = [
    {
        path: '',
        component: NovaAulaPage
    }
];
var NovaAulaPageModule = /** @class */ (function () {
    function NovaAulaPageModule() {
    }
    NovaAulaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NovaAulaPage]
        })
    ], NovaAulaPageModule);
    return NovaAulaPageModule;
}());
export { NovaAulaPageModule };
//# sourceMappingURL=nova-aula.module.js.map
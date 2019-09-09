import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PainelPage } from './painel.page';
var routes = [
    {
        path: '',
        component: PainelPage
    }
];
var PainelPageModule = /** @class */ (function () {
    function PainelPageModule() {
    }
    PainelPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PainelPage]
        })
    ], PainelPageModule);
    return PainelPageModule;
}());
export { PainelPageModule };
//# sourceMappingURL=painel.module.js.map
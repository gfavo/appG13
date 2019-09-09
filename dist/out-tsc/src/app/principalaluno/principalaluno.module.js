import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PrincipalalunoPage } from './principalaluno.page';
var routes = [
    {
        path: '',
        component: PrincipalalunoPage
    }
];
var PrincipalalunoPageModule = /** @class */ (function () {
    function PrincipalalunoPageModule() {
    }
    PrincipalalunoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PrincipalalunoPage]
        })
    ], PrincipalalunoPageModule);
    return PrincipalalunoPageModule;
}());
export { PrincipalalunoPageModule };
//# sourceMappingURL=principalaluno.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MetodoPage } from './metodo.page';
var routes = [
    {
        path: '',
        component: MetodoPage
    }
];
var MetodoPageModule = /** @class */ (function () {
    function MetodoPageModule() {
    }
    MetodoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MetodoPage]
        })
    ], MetodoPageModule);
    return MetodoPageModule;
}());
export { MetodoPageModule };
//# sourceMappingURL=metodo.module.js.map
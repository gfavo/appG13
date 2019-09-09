import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DiretorioPage } from './diretorio.page';
var routes = [
    {
        path: '',
        component: DiretorioPage
    }
];
var DiretorioPageModule = /** @class */ (function () {
    function DiretorioPageModule() {
    }
    DiretorioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DiretorioPage]
        })
    ], DiretorioPageModule);
    return DiretorioPageModule;
}());
export { DiretorioPageModule };
//# sourceMappingURL=diretorio.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ManutencaoAulaPage } from './manutencao-aula.page';
var routes = [
    {
        path: '',
        component: ManutencaoAulaPage
    }
];
var ManutencaoAulaPageModule = /** @class */ (function () {
    function ManutencaoAulaPageModule() {
    }
    ManutencaoAulaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ManutencaoAulaPage]
        })
    ], ManutencaoAulaPageModule);
    return ManutencaoAulaPageModule;
}());
export { ManutencaoAulaPageModule };
//# sourceMappingURL=manutencao-aula.module.js.map
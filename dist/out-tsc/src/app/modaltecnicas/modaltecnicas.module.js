import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModaltecnicasPage } from './modaltecnicas.page';
var routes = [
    {
        path: '',
        component: ModaltecnicasPage
    }
];
var ModaltecnicasPageModule = /** @class */ (function () {
    function ModaltecnicasPageModule() {
    }
    ModaltecnicasPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModaltecnicasPage]
        })
    ], ModaltecnicasPageModule);
    return ModaltecnicasPageModule;
}());
export { ModaltecnicasPageModule };
//# sourceMappingURL=modaltecnicas.module.js.map
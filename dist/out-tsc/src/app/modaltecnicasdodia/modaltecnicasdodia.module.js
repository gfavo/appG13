import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModaltecnicasdodiaPage } from './modaltecnicasdodia.page';
var routes = [
    {
        path: '',
        component: ModaltecnicasdodiaPage
    }
];
var ModaltecnicasdodiaPageModule = /** @class */ (function () {
    function ModaltecnicasdodiaPageModule() {
    }
    ModaltecnicasdodiaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModaltecnicasdodiaPage]
        })
    ], ModaltecnicasdodiaPageModule);
    return ModaltecnicasdodiaPageModule;
}());
export { ModaltecnicasdodiaPageModule };
//# sourceMappingURL=modaltecnicasdodia.module.js.map
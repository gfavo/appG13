import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'aula', loadChildren: './aula/aula.module#AulaPageModule' },
    { path: 'manutencao-aula', loadChildren: './manutencao-aula/manutencao-aula.module#ManutencaoAulaPageModule' },
    { path: 'nova-aula', loadChildren: './nova-aula/nova-aula.module#NovaAulaPageModule' },
    { path: 'metodo', loadChildren: './metodo/metodo.module#MetodoPageModule' },
    { path: 'pin', loadChildren: './pin/pin.module#PinPageModule' },
    { path: 'qr', loadChildren: './qr/qr.module#QrPageModule' },
    { path: 'modaldetalhes', loadChildren: './modaldetalhes/modaldetalhes.module#ModaldetalhesPageModule' },
    { path: 'painel', loadChildren: './painel/painel.module#PainelPageModule' },
    { path: 'modaltecnicas', loadChildren: './modaltecnicas/modaltecnicas.module#ModaltecnicasPageModule' },
    { path: 'diretorio', loadChildren: './diretorio/diretorio.module#DiretorioPageModule' },
    { path: 'modalvideo', loadChildren: './modalvideo/modalvideo.module#ModalvideoPageModule' },
    { path: 'principalaluno', loadChildren: './principalaluno/principalaluno.module#PrincipalalunoPageModule' },
    { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },
    { path: 'modaltecnicasdodia', loadChildren: './modaltecnicasdodia/modaltecnicasdodia.module#ModaltecnicasdodiaPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
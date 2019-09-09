import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NomeInstrutorService } from '../nome-instrutor.service';
var PainelPage = /** @class */ (function () {
    function PainelPage(instrutor) {
        this.instrutor = instrutor;
    }
    PainelPage.prototype.ngOnInit = function () {
    };
    PainelPage.prototype.mudarUrl = function () {
        this.instrutor.setUrl(this.enderecoNovo);
    };
    PainelPage = tslib_1.__decorate([
        Component({
            selector: 'app-painel',
            templateUrl: './painel.page.html',
            styleUrls: ['./painel.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NomeInstrutorService])
    ], PainelPage);
    return PainelPage;
}());
export { PainelPage };
//# sourceMappingURL=painel.page.js.map
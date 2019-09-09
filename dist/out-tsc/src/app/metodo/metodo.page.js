import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var MetodoPage = /** @class */ (function () {
    function MetodoPage(router) {
        this.router = router;
    }
    MetodoPage.prototype.ngOnInit = function () {
    };
    MetodoPage.prototype.backPage = function () {
        this.router.navigateByUrl("/aula");
    };
    MetodoPage = tslib_1.__decorate([
        Component({
            selector: 'app-metodo',
            templateUrl: './metodo.page.html',
            styleUrls: ['./metodo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], MetodoPage);
    return MetodoPage;
}());
export { MetodoPage };
//# sourceMappingURL=metodo.page.js.map
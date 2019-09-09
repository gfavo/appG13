import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    ClientService.prototype.getConfig = function () {
        return this.http.get(this.url);
    };
    ClientService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ClientService);
    return ClientService;
}());
export { ClientService };
//# sourceMappingURL=client.service.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qr-qr-module"],{

/***/ "./node_modules/ngx-qrcode3/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ngx-qrcode3/index.js ***!
  \*******************************************/
/*! exports provided: NgxQRCodeModule, NgxQRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxQRCodeModule", function() { return NgxQRCodeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxQRCodeComponent", function() { return NgxQRCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var QRCode = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
var NgxQRCodeComponent = (function () {
    /**
     * @param {?} renderer
     */
    function NgxQRCodeComponent(renderer) {
        this.renderer = renderer;
        this.elementType = 'url';
        this.version = '';
        this.correctionLevel = 'H';
        this.cssClass = 'qrcode';
        this.value = 'Techiediaries';
    }
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.ngOnChanges = function () {
        this.createQRCode();
    };
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.toDataURL = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toDataURL(_this.value, { errorCorrectionLevel: _this.correctionLevel, version: _this.version }, function (err, url) {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                else {
                    console.log(url);
                    resolve(url);
                }
            });
        });
    };
    /**
     * @param {?} canvas
     * @return {?}
     */
    NgxQRCodeComponent.prototype.toCanvas = function (canvas) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toCanvas(canvas, _this.value, { errorCorrectionLevel: _this.correctionLevel, version: _this.version }, function (error) {
                if (error) {
                    //console.error(error);
                    reject(error);
                }
                else {
                    //console.log('success!');
                    resolve("success");
                }
            });
        });
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgxQRCodeComponent.prototype.renderElement = function (element) {
        for (var _i = 0, _a = this.qrcElement.nativeElement.childNodes; _i < _a.length; _i++) {
            var node = _a[_i];
            this.renderer.removeChild(this.qrcElement.nativeElement, node);
        }
        this.renderer.appendChild(this.qrcElement.nativeElement, element);
    };
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.createQRCode = function () {
        var _this = this;
        if (!this.value) {
            return;
        }
        
        var /** @type {?} */ element;
        console.log("QR Encoding " + this.value);
        switch (this.elementType) {
            case 'canvas':
                element = this.renderer.createElement('canvas');
                this.toCanvas(element).then(function (v) {
                    console.log(v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
                break;
            case 'url':
            case 'img':
            default:
                element = this.renderer.createElement('img');
                this.toDataURL().then(function (v) {
                    console.log(v);
                    element.setAttribute("src", v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
        }
    };
    return NgxQRCodeComponent;
}());
NgxQRCodeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-qrcode',
                template: "<div #qrcElement [class]=\"cssClass\"></div>",
                styles: []
            },] },
];
/**
 * @nocollapse
 */
NgxQRCodeComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
]; };
NgxQRCodeComponent.propDecorators = {
    'elementType': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['qrc-element-type',] },],
    'version': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['qrc-version',] },],
    'correctionLevel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['qrc-correction-level',] },],
    'cssClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['qrc-class',] },],
    'value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['qrc-value',] },],
    'qrcElement': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['qrcElement',] },],
};

var NgxQRCodeModule = (function () {
    function NgxQRCodeModule() {
    }
    /**
     * @return {?}
     */
    NgxQRCodeModule.forRoot = function () {
        return {
            ngModule: NgxQRCodeModule,
            providers: []
        };
    };
    return NgxQRCodeModule;
}());
NgxQRCodeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    NgxQRCodeComponent,
                ],
                exports: [
                    NgxQRCodeComponent,
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxQRCodeModule.ctorParameters = function () { return []; };




/***/ }),

/***/ "./src/app/qr/qr.module.ts":
/*!*********************************!*\
  !*** ./src/app/qr/qr.module.ts ***!
  \*********************************/
/*! exports provided: QrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrPageModule", function() { return QrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qr.page */ "./src/app/qr/qr.page.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var ngx_qrcode3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-qrcode3 */ "./node_modules/ngx-qrcode3/index.js");









var routes = [
    {
        path: '',
        component: _qr_page__WEBPACK_IMPORTED_MODULE_6__["QrPage"]
    }
];
var QrPageModule = /** @class */ (function () {
    function QrPageModule() {
    }
    QrPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_qrcode3__WEBPACK_IMPORTED_MODULE_8__["NgxQRCodeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_qr_page__WEBPACK_IMPORTED_MODULE_6__["QrPage"]],
            providers: [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"]],
        })
    ], QrPageModule);
    return QrPageModule;
}());



/***/ }),

/***/ "./src/app/qr/qr.page.html":
/*!*********************************!*\
  !*** ./src/app/qr/qr.page.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title style=\"font-size: medium\" text-center\n      >Scan do codigo Qr</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"backPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-grid class=\"centro\">\n    <ion-button\n      color=\"dark\"\n      class=\"botao\"\n      size=\"large\"\n      expand=\"block\"\n      (click)=\"scanCode()\"\n      ><ion-icon slot=\"end\" name=\"qr-scanner\"></ion-icon>Escanear\n      Codigo</ion-button\n    >\n  </ion-grid>\n\n  <ion-card *ngIf=\"scannedCode\">\n    <ion-card-content>\n      Result From Scan: {{ aluno_cobaia.nome }} Presente:\n      {{ aluno_cobaia.presenca }}\n    </ion-card-content>\n  </ion-card>\n\n  <ng-container *ngIf=\"instrutor.getIdPrograma()\">\n    <ion-label>\n      <h2>Descrição da aula:</h2>\n      <h3>\n        <b>{{ instrutor.getDescricao() }}</b>\n      </h3>\n    </ion-label>\n    <br />\n    <h2>\n      <b>\n        <ion-label>{{ instrutor.getAulaSelecionada().titulo }}</ion-label>\n      </b>\n    </h2>\n\n    <ul *ngFor=\"let _tecnica of instrutor.getAulaSelecionada().tecnicas\">\n      <li>{{ _tecnica.nome }}</li>\n    </ul>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/qr/qr.page.scss":
/*!*********************************!*\
  !*** ./src/app/qr/qr.page.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centro {\n  margin-top: 20%;\n  vertical-align: middle;\n  text-align: center; }\n\n.botao {\n  margin-top: 40px;\n  height: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXIvQzpcXFVzZXJzXFxHYWJyaWVsXFxEZXNrdG9wXFxwcm9qZXRvc1xcdG96aVxcdG96aV9tb2JpbGUvc3JjXFxhcHBcXHFyXFxxci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBRWYsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xci9xci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJvIHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYm90YW97XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/qr/qr.page.ts":
/*!*******************************!*\
  !*** ./src/app/qr/qr.page.ts ***!
  \*******************************/
/*! exports provided: QrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrPage", function() { return QrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var sucesso = /** @class */ (function () {
    function sucesso() {
    }
    return sucesso;
}());
var QrPage = /** @class */ (function () {
    function QrPage(alertController, instrutor, barCode, http, router) {
        this.alertController = alertController;
        this.instrutor = instrutor;
        this.barCode = barCode;
        this.http = http;
        this.router = router;
        this.scannedCode = null;
        this.codigo = "";
        this.teste_nome = "";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            "x-version": "1.0.9",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0"
        });
        this.situacao = "";
    }
    QrPage.prototype.alertaSimples = function (mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Atenção",
                            message: mensagem,
                            buttons: ["OK"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QrPage.prototype.ngOnInit = function () { };
    QrPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.http
            .get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            _this.aula = data;
        });
    };
    QrPage.prototype.scanCode = function () {
        var _this = this;
        this.instrutor.setAulaAberta(true);
        this.barCode.scan().then(function (data) {
            _this.scannedCode = data.text;
            _this.http
                .post(_this.instrutor.getUrl() + "/qrcode.php", { "alunoid": parseInt(_this.scannedCode) }, {
                responseType: "json",
                observe: "response",
                withCredentials: true,
                headers: _this.headers
            })
                .subscribe(function (response) {
                console.log(response);
                _this.alertaSimples(response.body.success);
            }, function (error) {
                _this.alertaSimples(error.error.error);
            });
        });
    };
    QrPage.prototype.backPage = function () {
        this.router.navigateByUrl("/aula");
    };
    QrPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-qr",
            template: __webpack_require__(/*! ./qr.page.html */ "./src/app/qr/qr.page.html"),
            styles: [__webpack_require__(/*! ./qr.page.scss */ "./src/app/qr/qr.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_5__["NomeInstrutorService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QrPage);
    return QrPage;
}());



/***/ })

}]);
//# sourceMappingURL=qr-qr-module.js.map
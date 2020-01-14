(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkin-checkin-module"],{

/***/ "./src/app/checkin/checkin.module.ts":
/*!*******************************************!*\
  !*** ./src/app/checkin/checkin.module.ts ***!
  \*******************************************/
/*! exports provided: CheckinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPageModule", function() { return CheckinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin.page */ "./src/app/checkin/checkin.page.ts");







var routes = [
    {
        path: '',
        component: _checkin_page__WEBPACK_IMPORTED_MODULE_6__["CheckinPage"]
    }
];
var CheckinPageModule = /** @class */ (function () {
    function CheckinPageModule() {
    }
    CheckinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkin_page__WEBPACK_IMPORTED_MODULE_6__["CheckinPage"]]
        })
    ], CheckinPageModule);
    return CheckinPageModule;
}());



/***/ }),

/***/ "./src/app/checkin/checkin.page.html":
/*!*******************************************!*\
  !*** ./src/app/checkin/checkin.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"fonte\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>{{labels.titleCheckin[idiomaPadrao]}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"checkin_ == false && temaulainstrutor == false\" padding>\n  <ion-list *ngFor=\"let aula of conteudo\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>{{labels.labelInstrutor[idiomaPadrao]}}: {{ aula.nomeinstrutor }}</ion-card-title>\n        <ion-card-content>\n          {{labels.labelDescricaoAula[idiomaPadrao]}}: {{ aula.descricao }}\n        </ion-card-content>\n        <ion-button (click)=\"checkin(aula.id, aula.idinstrutor)\">\n          {{labels.labelFazerCheckin[idiomaPadrao]}}\n        </ion-button>\n      </ion-card-header>\n    </ion-card>\n  </ion-list>\n</ion-content>\n<ion-content *ngIf=\"checkin_ == false && temaulainstrutor == true\" padding>\n  <ion-list>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>{{labels.labelInstrutor[idiomaPadrao]}}: {{ conteudo[0].nomeinstrutor }}</ion-card-title>\n        <ion-card-content>\n          {{labels.titleCheckin[idiomaPadrao]}}: {{ conteudo[0].descricao }}\n        </ion-card-content>\n        <ion-button (click)=\"checkin(conteudo[0].id, conteudo[0].idinstrutor)\">\n          {{labels.labelFazerCheckin[idiomaPadrao]}}\n        </ion-button>\n      </ion-card-header>\n    </ion-card>\n<ion-button (click)=\"mostra_avulsas()\" expand=\"full\" *ngIf=\"mostraravulsas==false\">\n  {{labels.labelMostrarOutras[idiomaPadrao]}}\n</ion-button>\n  </ion-list>\n  <ng-container *ngIf=\"mostraravulsas\">\n\n  <ion-list  *ngFor=\"let aula of conteudo\">\n    <ion-card *ngIf=\"aula != conteudo[0]\">\n      <ion-card-header>\n        <ion-card-title>{{labels.labelInstrutor[idiomaPadrao]}}: {{ aula.nomeinstrutor }}</ion-card-title>\n        <ion-card-content>\n          {{labels.labelDescricaoAula[idiomaPadrao]}}: {{ aula.descricao }}\n        </ion-card-content>\n        <ion-button (click)=\"checkin(aula.id,aula.idinstrutor)\">\n          {{labels.labelFazerCheckin[idiomaPadrao]}}\n        </ion-button>\n      </ion-card-header>\n    </ion-card>\n  </ion-list></ng-container>\n</ion-content>\n\n\n<ion-content *ngIf=\"checkin_\" padding>\n  <ion-list *ngFor=\"let aula of conteudo\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>{{labels.labelInstrutor[idiomaPadrao]}}: {{ aula.nomeinstrutor }}</ion-card-title>\n        <ion-card-content>\n          {{labels.labelDescricaoAula[idiomaPadrao]}}: {{ aula.descricao }}\n        </ion-card-content>\n        <ion-button (click)=\"cancelar(aula.idcheckin)\">\n          {{labels.labelCancelarChekin[idiomaPadrao]}}!\n        </ion-button>\n      </ion-card-header>\n    </ion-card>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/checkin/checkin.page.scss":
/*!*******************************************!*\
  !*** ./src/app/checkin/checkin.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNraW4vY2hlY2tpbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/checkin/checkin.page.ts":
/*!*****************************************!*\
  !*** ./src/app/checkin/checkin.page.ts ***!
  \*****************************************/
/*! exports provided: CheckinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPage", function() { return CheckinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _labelsCheckin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./labelsCheckin */ "./src/app/checkin/labelsCheckin.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var conteudoAulasAtivas = /** @class */ (function () {
    function conteudoAulasAtivas() {
    }
    return conteudoAulasAtivas;
}());
var CheckinPage = /** @class */ (function () {
    function CheckinPage(instrutor, httpClient, router, alertController, storage, globalization, labels) {
        this.instrutor = instrutor;
        this.httpClient = httpClient;
        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
        this.globalization = globalization;
        this.labels = labels;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            "x-version": "1.1.0",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0"
        });
        this.mostraravulsas = false;
    }
    CheckinPage.prototype.mostrarErro = function (erro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registra;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "",
                            message: erro,
                            buttons: [{ text: "OK" }]
                        })];
                    case 1:
                        registra = _a.sent();
                        return [4 /*yield*/, registra.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckinPage.prototype.ngOnInit = function () { };
    CheckinPage.prototype.checkIdioma = function () {
        var _this = this;
        this.storage.get("idioma").then(function (res) {
            _this.idiomaPadrao = res;
            if (res == "" || res == null) {
                _this.globalization.getPreferredLanguage().then(function (res) {
                    if (res.value.includes("pt")) {
                        _this.storage.set("idioma", "ptbr");
                        _this.idiomaPadrao = "ptbr";
                    }
                    else if (res.value.includes("en")) {
                        _this.storage.set("idioma", "en");
                        _this.idiomaPadrao = "en";
                    }
                });
            }
        });
    };
    CheckinPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.checkIdioma();
        this.subscription = this.httpClient
            .get(this.instrutor.getUrl() + "/aulasativas.php?idioma=" + this.instrutor.idiomaPadrao, {
            responseType: "json",
            headers: this.headers
        })
            .subscribe(function (data) {
            _this.conteudo = data;
            _this.temaulainstrutor = false;
            _this.conteudo.forEach(function (element) {
                if (element.auladoinstrutor)
                    _this.temaulainstrutor = true;
            });
            console.log(data);
            _this.checkin_ = false;
            data.forEach(function (element) {
                if (element.checkin)
                    _this.checkin_ = true;
            });
        });
    };
    CheckinPage.prototype.formatDate = function (date) {
        var d = new Date(date), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = "0" + month;
        if (day.length < 2)
            day = "0" + day;
        return ([year, month, day].join("-") +
            " " +
            this.formatZero(d.getHours()) +
            ":" +
            this.formatZero(d.getMinutes()));
    };
    CheckinPage.prototype.formatZero = function (numero) {
        if (parseInt(numero) < 10) {
            return "0" + numero;
        }
        return numero;
    };
    CheckinPage.prototype.checkin = function (aulaid, instrutorid) {
        var _this = this;
        this.subscription = this.httpClient
            .post(this.instrutor.getUrl() + "/checkin.php", {
            aulaid: aulaid,
            instrutorid: instrutorid,
            datahorasolicitacao: this.formatDate(new Date())
        }, { observe: "response", responseType: "json", headers: this.headers })
            .subscribe(function (data) {
            console.log(JSON.stringify(data.body));
            _this.mostrarErro(_this.labels.msgSucessoCheckin[_this.idiomaPadrao]);
            _this.subscription = _this.httpClient
                .get(_this.instrutor.getUrl() + "/aulasativas.php?idioma=" + _this.instrutor.idiomaPadrao, {
                responseType: "json",
                headers: _this.headers
            })
                .subscribe(function (data) {
                _this.conteudo = data;
                console.log(data);
                _this.checkin_ = false;
                data.forEach(function (element) {
                    if (element.checkin)
                        _this.checkin_ = true;
                });
            });
        }, function (error) {
            _this.mostrarErro(error.error.error);
            _this.subscription = _this.httpClient
                .get(_this.instrutor.getUrl() + "/aulasativas.php?idioma=" + _this.instrutor.idiomaPadrao, {
                responseType: "json",
                headers: _this.headers
            })
                .subscribe(function (data) {
                _this.conteudo = data;
                console.log(data);
                _this.checkin_ = false;
                data.forEach(function (element) {
                    if (element.checkin)
                        _this.checkin_ = true;
                });
            });
        });
    };
    CheckinPage.prototype.cancelar = function (idcheckin) {
        var _this = this;
        this.subscription = this.httpClient
            .post(this.instrutor.getUrl() + "/cancelar_checkin.php", { idcheckin: idcheckin }, { headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            _this.mostrarErro(_this.labels.msgSucessoCheckinCancelado[_this.idiomaPadrao]);
            _this.subscription = _this.httpClient
                .get(_this.instrutor.getUrl() + "/aulasativas.php?idioma=" + _this.instrutor.idiomaPadrao, {
                responseType: "json",
                headers: _this.headers
            })
                .subscribe(function (data) {
                _this.conteudo = data;
                console.log(data);
                _this.checkin_ = false;
                data.forEach(function (element) {
                    if (element.checkin)
                        _this.checkin_ = true;
                });
            });
        }, function (error) {
            console.log(error);
            _this.subscription = _this.httpClient
                .get(_this.instrutor.getUrl() + "/aulasativas.php?idioma=" + _this.instrutor.idiomaPadrao, {
                responseType: "json",
                headers: _this.headers
            })
                .subscribe(function (data) {
                _this.conteudo = data;
                console.log(data);
                _this.checkin_ = false;
                data.forEach(function (element) {
                    if (element.checkin)
                        _this.checkin_ = true;
                });
            });
        });
    };
    CheckinPage.prototype.mostra_avulsas = function () {
        this.mostraravulsas = !this.mostraravulsas;
    };
    CheckinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-checkin",
            template: __webpack_require__(/*! ./checkin.page.html */ "./src/app/checkin/checkin.page.html"),
            styles: [__webpack_require__(/*! ./checkin.page.scss */ "./src/app/checkin/checkin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nome_instrutor_service__WEBPACK_IMPORTED_MODULE_2__["NomeInstrutorService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_6__["Globalization"],
            _labelsCheckin__WEBPACK_IMPORTED_MODULE_7__["LabelsCheckin"]])
    ], CheckinPage);
    return CheckinPage;
}());



/***/ }),

/***/ "./src/app/checkin/labelsCheckin.ts":
/*!******************************************!*\
  !*** ./src/app/checkin/labelsCheckin.ts ***!
  \******************************************/
/*! exports provided: Label, LabelsCheckin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsCheckin", function() { return LabelsCheckin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsCheckin = /** @class */ (function () {
    function LabelsCheckin() {
        this.labelMostrarOutras = new Label();
        this.labelCancelarChekin = new Label();
        this.labelFazerCheckin = new Label();
        this.labelDescricaoAula = new Label();
        this.labelInstrutor = new Label();
        this.titleCheckin = new Label();
        this.msgSucessoCheckinCancelado = new Label();
        this.msgSucessoCheckin = new Label();
        this.labelMostrarOutras["ptbr"] = "Mostrar outras";
        this.labelMostrarOutras["en"] = "Show others";
        this.labelCancelarChekin["ptbr"] = "Cancelar checkin!";
        this.labelCancelarChekin["en"] = "Cancel checkin!";
        this.labelFazerCheckin["ptbr"] = "Fazer Checkin";
        this.labelFazerCheckin["en"] = "Do Checkin";
        this.labelDescricaoAula["ptbr"] = "Descrição da aula";
        this.labelDescricaoAula["en"] = "Class description";
        this.labelInstrutor["ptbr"] = "Instrutor";
        this.labelInstrutor["en"] = "Instructor";
        this.titleCheckin["ptbr"] = "Checkin";
        this.titleCheckin["en"] = "Checkin";
        this.msgSucessoCheckinCancelado["ptbr"] = "Checkin cancelado com sucesso!";
        this.msgSucessoCheckinCancelado["en"] = "Checkin cancelled successfully!";
        this.msgSucessoCheckin["ptbr"] = "Sucesso! Seu checkin foi efetuado.";
        this.msgSucessoCheckin["en"] = "Success! Checkin done.";
    }
    LabelsCheckin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsCheckin);
    return LabelsCheckin;
}());



/***/ })

}]);
//# sourceMappingURL=checkin-checkin-module.js.map
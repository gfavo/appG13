(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendario-calendario-module"],{

/***/ "./src/app/calendario/calendario.module.ts":
/*!*************************************************!*\
  !*** ./src/app/calendario/calendario.module.ts ***!
  \*************************************************/
/*! exports provided: CalendarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageModule", function() { return CalendarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendario.page */ "./src/app/calendario/calendario.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");









var routes = [
    {
        path: '',
        component: _calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]
    }
];
var CalendarioPageModule = /** @class */ (function () {
    function CalendarioPageModule() {
    }
    CalendarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_8__["NgxQRCodeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]]
        })
    ], CalendarioPageModule);
    return CalendarioPageModule;
}());



/***/ }),

/***/ "./src/app/calendario/calendario.page.html":
/*!*************************************************!*\
  !*** ./src/app/calendario/calendario.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"fonte\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-thumbnail slot=\"end\">\n      <img src=\"../assets/images/logobola.png\" />\n    </ion-thumbnail>\n    <ion-title text-center>{{labelsCalendario.titulo[idiomaPadrao]}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ng-template\n    #template\n    let-showEventDetail=\"showEventDetail\"\n    let-selectedDate=\"selectedDate\"\n    let-noEventsLabel=\"noEventsLabel\"\n  >\n    <br />\n    <ng-container *ngIf=\"tecnicasExistem == true\">\n      <div class=\"ion-text-center\">\n        <ion-button (click)=\"abreTecnicas()\">\n          {{labelsCalendario.vertecnicasdia[idiomaPadrao]}} {{ dia }}\n        </ion-button>\n      </div>\n    </ng-container>\n  </ng-template>\n  <div class=\"center\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"4\"> <img src=\"{{ url }}\" class=\"img circle-border\"\n        /></ion-col>\n      <ion-col size=\"7\"><ion-item><h4>{{ nomealuno }}</h4></ion-item></ion-col>\n    </ion-row>\n  </ion-grid>\n    <div>\n      <img src=\"{{ urlFaixa }}\" class=\"center faixa\" />\n    </div>\n  \n  </div>\n\n<h2 class=\"centertext\">{{labelsCalendario.cursos[idiomaPadrao]}}</h2>\n\n<div class=\"container margin-bottom\" >\n  <div class=\"square\" id=\"fundamentals\"><svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    viewBox=\"0 0 419.362 419.362\" style=\"enable-background:new 0 0 419.362 419.362;\" xml:space=\"preserve\">\n <g>\n   <path d=\"M394.159,202.181H308.99c1.388-3.122,2.166-6.572,2.166-10.203V39.435c0-13.897-11.306-25.203-25.203-25.203H133.41\n     c-13.897,0-25.203,11.306-25.203,25.203v152.543c0,3.631,0.778,7.081,2.166,10.203h-85.17C11.306,202.181,0,213.487,0,227.384\n     v152.543c0,13.897,11.306,25.203,25.203,25.203h152.543c13.897,0,25.203-11.306,25.203-25.203V227.384\n     c0-3.631-0.778-7.081-2.166-10.203h17.795c-1.388,3.122-2.166,6.572-2.166,10.203v152.543c0,13.897,11.306,25.203,25.203,25.203\n     h152.543c13.897,0,25.203-11.306,25.203-25.203V227.384C419.362,213.487,408.057,202.181,394.159,202.181z M123.207,191.978V39.435\n     c0-5.626,4.577-10.203,10.203-10.203h152.543c5.626,0,10.203,4.577,10.203,10.203v152.543c0,5.626-4.577,10.203-10.203,10.203\n     H133.41C127.784,202.181,123.207,197.604,123.207,191.978z M187.949,227.384v152.543c0,5.626-4.577,10.203-10.203,10.203H25.203\n     c-5.626,0-10.203-4.577-10.203-10.203V227.384c0-5.626,4.577-10.203,10.203-10.203h152.543\n     C183.372,217.181,187.949,221.758,187.949,227.384z M404.362,379.927c0,5.626-4.577,10.203-10.203,10.203H241.616\n     c-5.626,0-10.203-4.577-10.203-10.203V227.384c0-5.626,4.577-10.203,10.203-10.203h152.543c5.626,0,10.203,4.577,10.203,10.203\n     V379.927z\"/>\n   <path d=\"M310.91,245.983l-43.304,109.844l13.955,5.501l10.042-25.472h52.569l10.042,25.473l13.955-5.501l-43.305-109.844H310.91z\n      M297.517,320.856l20.371-51.673l20.371,51.673H297.517z\"/>\n   <path d=\"M119.103,298.678c5.122-6.083,8.217-13.927,8.217-22.484c0-19.277-15.684-34.961-34.961-34.961H61.9v124.844h44.188\n     c19.277,0,34.961-15.684,34.961-34.961C141.05,316.438,131.952,303.852,119.103,298.678z M76.9,256.233h15.458\n     c11.007,0,19.961,8.955,19.961,19.961c0,11.006-8.954,19.961-19.961,19.961H76.9V256.233z M106.089,351.078H76.9v-39.922h15.458\n     h13.73c11.007,0,19.961,8.955,19.961,19.961S117.096,351.078,106.089,351.078z\"/>\n   <path d=\"M209.682,178.128c20.875,0,37.857-16.982,37.857-37.857h-15c0,12.604-10.254,22.857-22.857,22.857\n     s-22.857-10.253-22.857-22.857v-49.13c0-12.604,10.254-22.857,22.857-22.857s22.857,10.254,22.857,22.857h15\n     c0-20.875-16.982-37.857-37.857-37.857s-37.857,16.983-37.857,37.857v49.13C171.824,161.146,188.807,178.128,209.682,178.128z\"/>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n </svg></div>\n  <div class=\"square\" id=\"modulo1\"><svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    viewBox=\"0 0 465 465\" style=\"enable-background:new 0 0 465 465;\" xml:space=\"preserve\">\n <g>\n   <path d=\"M240,356.071V132.12c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v223.951c0,4.143,3.357,7.5,7.5,7.5\n     S240,360.214,240,356.071z\"/>\n   <path d=\"M457.5,75.782c-15.856,0-35.614-6.842-56.533-14.085c-26.492-9.174-56.521-19.571-87.663-19.571\n     c-36.035,0-58.019,15.791-70.115,29.038c-4.524,4.956-8.03,9.922-10.688,14.327c-2.658-4.405-6.164-9.371-10.688-14.327\n     c-12.097-13.247-34.08-29.038-70.115-29.038c-31.143,0-61.171,10.397-87.663,19.571C43.114,68.94,23.356,75.782,7.5,75.782\n     c-4.143,0-7.5,3.357-7.5,7.5v302.092c0,4.143,3.357,7.5,7.5,7.5c18.38,0,39.297-7.243,61.441-14.911\n     c25.375-8.786,54.136-18.745,82.755-18.745c24.54,0,44.403,8.126,59.038,24.152c2.792,3.058,7.537,3.273,10.596,0.48\n     s3.273-7.537,0.48-10.596c-12.097-13.246-34.08-29.037-70.114-29.037c-31.143,0-61.171,10.397-87.663,19.571\n     C46.298,369.931,29.396,375.782,15,377.422V90.41c16.491-1.571,34.755-7.896,53.941-14.539\n     c25.375-8.786,54.136-18.745,82.755-18.745c57.881,0,73.025,45.962,73.634,47.894c0.968,3.148,3.876,5.298,7.17,5.298\n     s6.202-2.149,7.17-5.298c0.146-0.479,15.383-47.894,73.634-47.894c28.619,0,57.38,9.959,82.755,18.745\n     c19.187,6.644,37.45,12.968,53.941,14.539v287.012c-14.396-1.64-31.298-7.491-49.033-13.633\n     c-26.492-9.174-56.521-19.571-87.663-19.571c-36.036,0-58.02,15.791-70.115,29.038c-2.793,3.06-2.578,7.803,0.48,10.596\n     c3.06,2.793,7.804,2.578,10.596-0.48c14.635-16.027,34.498-24.153,59.039-24.153c28.619,0,57.38,9.959,82.755,18.745\n     c22.145,7.668,43.062,14.911,61.441,14.911c4.143,0,7.5-3.357,7.5-7.5V83.282C465,79.14,461.643,75.782,457.5,75.782z\"/>\n   <path d=\"M457.5,407.874c-15.856,0-35.614-6.842-56.533-14.085c-26.492-9.174-56.521-19.571-87.663-19.571\n     c-33.843,0-55.291,13.928-67.796,26.596l-26.017-0.001c-12.505-12.668-33.954-26.595-67.795-26.595\n     c-31.143,0-61.171,10.397-87.663,19.571c-20.919,7.243-40.677,14.085-56.533,14.085c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5\n     c18.38,0,39.297-7.243,61.441-14.911c25.375-8.786,54.136-18.745,82.755-18.745c24.54,0,44.403,8.126,59.038,24.152\n     c1.421,1.556,3.431,2.442,5.538,2.442l32.454,0.001c2.107,0,4.117-0.887,5.538-2.442c14.635-16.027,34.498-24.153,59.039-24.153\n     c28.619,0,57.38,9.959,82.755,18.745c22.145,7.668,43.062,14.911,61.441,14.911c4.143,0,7.5-3.357,7.5-7.5\n     S461.643,407.874,457.5,407.874z\"/>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n </svg>\n </div>\n  <div class=\"square\" id=\"modulo2\">\n      <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 463 463\" style=\"enable-background:new 0 0 463 463;\" xml:space=\"preserve\">\n   <g>\n     <path d=\"M183.5,136c-52.659,0-95.5,42.841-95.5,95.5s42.841,95.5,95.5,95.5s95.5-42.841,95.5-95.5S236.159,136,183.5,136z\n        M183.5,312c-44.388,0-80.5-36.112-80.5-80.5s36.112-80.5,80.5-80.5s80.5,36.112,80.5,80.5S227.888,312,183.5,312z\"/>\n     <path d=\"M183.5,168c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5c26.743,0,48.5,21.757,48.5,48.5c0,4.142,3.358,7.5,7.5,7.5\n       s7.5-3.358,7.5-7.5C247,196.486,218.514,168,183.5,168z\"/>\n     <path d=\"M455.5,96h-168c-4.142,0-7.5,3.358-7.5,7.5v8c0,4.687-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5v-8c0-4.142-3.358-7.5-7.5-7.5\n       h-68.708c-67.508,0-124.22,47.67-136.379,110.327C45.142,202.357,38.591,200,31.5,200C14.131,200,0,214.131,0,231.5\n       S14.131,263,31.5,263c7.055,0,13.576-2.331,18.832-6.264c4.972,26.576,17.792,51.015,37.355,70.577\n       c25.622,25.622,59.599,39.689,95.801,39.687c0.391,0,0.788-0.002,1.18-0.005C258.739,366.37,319,304.111,319,228.209v-18.825\n       c0-15.953,11.421-29.435,27.157-32.058l90.521-15.087C451.93,159.698,463,146.631,463,131.169V103.5\n       C463,99.358,459.642,96,455.5,96z M31.5,248c-9.098,0-16.5-7.402-16.5-16.5S22.402,215,31.5,215S48,222.402,48,231.5\n       S40.598,248,31.5,248z M448,131.169c0,8.099-5.798,14.944-13.788,16.275l-90.521,15.087C320.692,166.364,304,186.069,304,209.385\n       v18.825c0,67.7-53.589,123.23-119.459,123.786c-0.35,0.003-0.699,0.004-1.049,0.004c-32.194,0-62.415-12.51-85.198-35.294\n       c-23.032-23.031-35.564-53.661-35.29-86.247C63.56,164.589,119.091,111,186.792,111H248v0.5c0,12.958,10.542,23.5,23.5,23.5\n       s23.5-10.542,23.5-23.5V111h153V131.169z\"/>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   <g>\n   </g>\n   </svg>\n   \n </div>\n  <div class=\"square\" id=\"modulo3\"><svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n <g>\n   <g>\n     <path d=\"M396,236c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S401.52,236,396,236z\"/>\n   </g>\n </g>\n <g>\n   <g>\n     <path d=\"M116,236c-5.52,0-10,4.48-10,10s4.48,10,10,10s10-4.48,10-10S121.52,236,116,236z\"/>\n   </g>\n </g>\n <g>\n   <g>\n     <path d=\"M346,276h-50v-50c0-5.522-4.478-10-10-10h-60c-5.522,0-10,4.478-10,10v50h-50c-5.522,0-10,4.478-10,10v60\n       c0,5.522,4.478,10,10,10h50v50c0,5.522,4.478,10,10,10h60c5.522,0,10-4.478,10-10v-50h50c5.522,0,10-4.478,10-10v-60\n       C356,280.478,351.522,276,346,276z M336,336h-50c-5.522,0-10,4.478-10,10v50h-40v-50c0-5.522-4.478-10-10-10h-50v-40h50\n       c5.522,0,10-4.478,10-10v-50h40v50c0,5.522,4.478,10,10,10h50V336z\"/>\n   </g>\n </g>\n <g>\n   <g>\n     <path d=\"M462,136h-76V76c0-33.084-26.916-60-60-60H186c-33.084,0-60,26.916-60,60v60H50c-27.57,0-50,22.43-50,50v260\n       c0,27.57,22.43,50,50,50h412c27.57,0,50-22.43,50-50V186C512,158.43,489.57,136,462,136z M146,76c0-22.056,17.944-40,40-40h140\n       c22.056,0,40,17.944,40,40v60h-20V86c0-16.542-13.458-30-30-30H196c-16.542,0-30,13.458-30,30v50h-20V76z M326,86v50H186V86\n       c0-5.514,4.486-10,10-10h120C321.514,76,326,80.486,326,86z M66,476H50c-16.542,0-30-13.458-30-30V186c0-16.542,13.458-30,30-30\n       h16V476z M426,476h-20V286c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10v190H126V286c0-5.522-4.478-10-10-10\n       c-5.522,0-10,4.478-10,10v190H86V156h20v50c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10v-50h260v50c0,5.522,4.478,10,10,10\n       c5.522,0,10-4.478,10-10v-50h20V476z M492,446c0,16.542-13.458,30-30,30h-16V156h16c16.542,0,30,13.458,30,30V446z\"/>\n   </g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n <g>\n </g>\n </svg>\n </div>\n</div>\n  \n<ng-container *ngIf=\"conteudo.total_aulas_mudar_faixa!=undefined\">\n<ion-item>\n  <ion-label>{{labelsCalendario.aulasatendidas[idiomaPadrao]}}: {{conteudo.num_aulas}} </ion-label>\n</ion-item>\n<ion-item>\n  <ion-label>{{labelsCalendario.totalaulas[idiomaPadrao]}}: {{conteudo.total_aulas_mudar_faixa}} </ion-label>\n</ion-item>\n<ion-item>\n  <ion-label>{{labelsCalendario.restando[idiomaPadrao]}}: {{conteudo.restando}} </ion-label>\n</ion-item>\n</ng-container>\n\n  <div class=\"calendario ion-justify-content-end\">\n    <div class=\"ion-text-center\">\n      <h2>\n        <ion-button\n          class=\"ion-text-left ion-margin-end ion-margin-bottom\"\n          size=\"small\"\n          (click)=\"voltaMes()\"\n          ><ion-icon name=\"arrow-dropleft\"></ion-icon\n        ></ion-button>\n        {{ viewTitle }}\n        <ion-button\n          size=\"small\"\n          class=\"ion-text-left ion-margin-start ion-margin-bottom\"\n          (click)=\"avancaMes()\"\n          ><ion-icon name=\"arrow-dropright\"></ion-icon\n        ></ion-button>\n      </h2>\n    </div>\n    <calendar\n      [eventSource]=\"eventSource\"\n      [calendarMode]=\"calendar.mode\"\n      [currentDate]=\"calendar.currentDate\"\n      [monthviewEventDetailTemplate]=\"template\"\n      (onEventSelected)=\"onEventSelected($event)\"\n      (onTitleChanged)=\"onViewTitleChanged($event)\"\n      (onTimeSelected)=\"onTimeSelected($event)\"\n      startHour=\"6\"\n      endHour=\"20\"\n      step=\"30\"\n      startingDayWeek=\"1\"\n    >\n    </calendar>\n  </div>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col> <ngx-qrcode\n        qrc-value=\"{{ codigoQr }}\"\n        qrc-element-type=\"text\"\n        qrc-class = \"test-class\"\n      ></ngx-qrcode\n    ></ion-col>\n      <ion-col\n        ></ion-col>\n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/calendario/calendario.page.scss":
/*!*************************************************!*\
  !*** ./src/app/calendario/calendario.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calendario {\n  margin-top: 20%; }\n\nion-img {\n  width: 50%; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n.centertext {\n  text-align: center; }\n\n.img {\n  height: 100px;\n  width: 100px; }\n\n.circle-border {\n  border: 4px solid #981b1e;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 2px 2px 5px 0px black; }\n\n.faixa {\n  max-width: 50%;\n  max-height: 50%;\n  height: auto;\n  width: auto; }\n\n.square {\n  width: 16vw;\n  border: 1px solid black;\n  padding: 2%; }\n\n.square:after {\n  content: \"\";\n  display: block; }\n\n.container {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex; }\n\n.margin-bottom {\n  margin-bottom: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXJpby9DOlxcVXNlcnNcXEdhYnJpZWxcXERlc2t0b3BcXHByb2pldG9zXFx0b3ppXFx0b3ppX21vYmlsZS9zcmNcXGFwcFxcY2FsZW5kYXJpb1xcY2FsZW5kYXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBTW5CO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFHakIsaUNBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLHVCQUF1QjtFQUMzQixXQUFXLEVBQUE7O0FBSVQ7RUFDRSxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHdCQUF3QjtVQUF4Qix1QkFBd0I7RUFDeEIsb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBSWY7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyaW8vY2FsZW5kYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsZW5kYXJpb3tcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICBcbn1cblxuXG5cbmlvbi1pbWd7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2VudGVydGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWd7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG5cbn1cbi5jaXJjbGUtYm9yZGVye1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICM5ODFiMWU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAxKTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAxKTtcbn1cblxuLmZhaXhhe1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5zcXVhcmUge1xuICAgIHdpZHRoOiAxNnZ3O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xucGFkZGluZzogMiU7XG5cbiAgfVxuXG4gIC5zcXVhcmU6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogIGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gIH1cblxuICAubWFyZ2luLWJvdHRvbXtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/calendario/calendario.page.ts":
/*!***********************************************!*\
  !*** ./src/app/calendario/calendario.page.ts ***!
  \***********************************************/
/*! exports provided: CalendarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPage", function() { return CalendarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nome-instrutor.service */ "./src/app/nome-instrutor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _modaltecnicasdodia_modaltecnicasdodia_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modaltecnicasdodia/modaltecnicasdodia.page */ "./src/app/modaltecnicasdodia/modaltecnicasdodia.page.ts");
/* harmony import */ var _labelsCalendario__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./labelsCalendario */ "./src/app/calendario/labelsCalendario.ts");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");











var conteudo = /** @class */ (function () {
    function conteudo() {
    }
    return conteudo;
}());
var aula_data = /** @class */ (function () {
    function aula_data() {
    }
    return aula_data;
}());
var erro = /** @class */ (function () {
    function erro() {
    }
    return erro;
}());
var error = /** @class */ (function () {
    function error() {
    }
    return error;
}());
var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(modalController, load, menu, httpClient, instrutor, router, _activatedRoute, alertController, labelsCalendario, globalization, storage) {
        this.modalController = modalController;
        this.load = load;
        this.menu = menu;
        this.httpClient = httpClient;
        this.instrutor = instrutor;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.alertController = alertController;
        this.labelsCalendario = labelsCalendario;
        this.globalization = globalization;
        this.storage = storage;
        this.tecnicasExistem = false;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "x-version": "1.1.0",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0"
        });
        this.event = {
            title: "",
            startTime: "",
            endTime: "",
            senhavimeoid: "",
            vimeoid: ""
        };
        this.calendar = {
            mode: "month",
            currentDate: new Date()
        };
        this.eventSource = [];
    }
    CalendarioPage.prototype.ngOnInit = function () {
    };
    CalendarioPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modaltecnicasdodia_modaltecnicasdodia_page__WEBPACK_IMPORTED_MODULE_7__["ModaltecnicasdodiaPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CalendarioPage.prototype.alertaNaoPago = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "",
                            message: this.labelsCalendario[this.idiomaPadrao],
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
    CalendarioPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load.dismiss().then(function () { return console.log("dismissed"); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CalendarioPage.prototype.checkIdioma = function () {
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
    CalendarioPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dismiss();
        this.checkIdioma();
        this.tecnicasExistem = false;
        this.subscription = this.httpClient
            .get(this.instrutor.getUrl() + "/calendario.php" + "?idioma=" + this.instrutor.idiomaPadrao, {
            responseType: "json",
            headers: this.headers
        })
            .subscribe(function (data) {
            console.log(data);
            _this.conteudo = data;
            _this.verde_cinza('fundamentals', _this.conteudo.fundamentals);
            _this.verde_cinza('modulo1', _this.conteudo.modulo1);
            _this.verde_cinza('modulo2', _this.conteudo.modulo2);
            _this.verde_cinza('modulo3', _this.conteudo.modulo3);
            _this.nomealuno = data.nomealuno;
            _this.url = data.foto;
            _this.urlFaixa = data.faixa;
            _this.codigoQr =
                data.id + ";" + data.nomealuno;
        }, function (error) {
            _this.instrutor.error = _this.instrutor.error = (error).error.error;
            _this.router.navigate(["/error"]);
        });
        this.eventSource = [];
        this.subscription = this.httpClient
            .get(this.instrutor.getUrl() +
            "/calendario.php" +
            "?mes=" +
            this.mes +
            "&ano=" +
            this.ano + "&idioma=" + this.instrutor.idiomaPadrao, { responseType: "json", headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            _this.aula_datas = data.aula_datas;
            _this.aula_datas.forEach(function (element) {
                _this.data = new Date(element.data);
                _this.data.setDate(_this.data.getDate() + 1);
                _this.addEvent(element.nome, _this.data, element.vimeoid, element.senhavimeoid);
            });
        });
    };
    CalendarioPage.prototype.onViewTitleChanged = function (title) {
        var _this = this;
        this.eventSource = [];
        this.viewTitle = title;
        var i = 0;
        for (i = 0; i < this.viewTitle.length; i++) {
            if (this.viewTitle.charAt(i) == " ") {
                this.numeroEspaco = i;
            }
        }
        this.mesEscrito = this.viewTitle.substring(0, this.numeroEspaco);
        this.ano = this.viewTitle.substr(this.numeroEspaco + 1);
        switch (this.mesEscrito) {
            case "January":
                this.mes = "01";
                break;
            case "February":
                this.mes = "02";
                break;
            case "March":
                this.mes = "03";
                break;
            case "April":
                this.mes = "04";
                break;
            case "May":
                this.mes = "05";
                break;
            case "June":
                this.mes = "06";
                break;
            case "July":
                this.mes = "07";
                break;
            case "August":
                this.mes = "08";
                break;
            case "September":
                this.mes = "09";
                break;
            case "October":
                this.mes = "10";
                break;
            case "November":
                this.mes = "11";
                break;
            case "December":
                this.mes = "12";
                break;
        }
        this.subscription = this.httpClient
            .get(this.instrutor.getUrl() +
            "/calendario.php" +
            "?mes=" +
            this.mes +
            "&ano=" +
            this.ano + "&idioma=" + this.instrutor.idiomaPadrao, { responseType: "json", headers: this.headers })
            .subscribe(function (data) {
            console.log(data);
            _this.aula_datas = data.aula_datas;
            _this.aula_datas.forEach(function (element) {
                _this.data = new Date(element.data);
                _this.data.setDate(_this.data.getDate() + 1);
                _this.addEvent(element.nome, _this.data, element.vimeoid, element.senhavimeoid);
            });
        });
    };
    CalendarioPage.prototype.onEventSelected = function ($event) {
        if (this.instrutor.getRole() == "ALUNOPAGO") {
            this.instrutor.setIdVimeo($event.idvimeo);
            this.instrutor.setSenhaVimeo($event.senhavimeo);
            this.presentModal();
        }
        else {
            this.alertaNaoPago();
        }
    };
    CalendarioPage.prototype.onTimeSelected = function (data) {
        console.log("Data selecionada:" + JSON.stringify(data));
        this.currentDate = data.selectedTime;
        this.dia = this.currentDate.getDate().toString();
        this.instrutor.setDiaMes(this.dia, this.mes);
        this.tecnicasExistem = false;
        if (data.events == null) {
            this.tecnicasDia = "";
        }
        else {
            this.tecnicasDia = data.events;
            this.instrutor.setTecnicasDia(data.events);
        }
        if (this.tecnicasDia != "") {
            this.tecnicasExistem = true;
        }
    };
    CalendarioPage.prototype.resetEvent = function () {
        this.event = {
            title: "",
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            senhavimeoid: "",
            vimeoid: ""
        };
    };
    CalendarioPage.prototype.addEvent = function (nome, data, id, senhavimeo) {
        var eventCopy = {
            title: nome,
            startTime: data,
            endTime: data,
            idvimeo: id,
            senhavimeo: senhavimeo
        };
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    CalendarioPage.prototype.abreTecnicas = function () {
        this.presentModal();
    };
    CalendarioPage.prototype.voltaMes = function () {
        var mySwiper = document.querySelector(".swiper-container")["swiper"];
        mySwiper.slidePrev();
    };
    CalendarioPage.prototype.avancaMes = function () {
        var mySwiper = document.querySelector(".swiper-container")["swiper"];
        mySwiper.slideNext();
    };
    CalendarioPage.prototype.verde_cinza = function (nome, concluido) {
        if (concluido == true) {
            //document.getElementById(nome).style.backgroundColor = "#25D366";
            document.getElementById(nome).style.backgroundColor = "#25D366";
        }
        else {
            document.getElementById(nome).style.backgroundColor = "rgb(190,190,190)";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"])
    ], CalendarioPage.prototype, "myCal", void 0);
    CalendarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-calendario",
            template: __webpack_require__(/*! ./calendario.page.html */ "./src/app/calendario/calendario.page.html"),
            styles: [__webpack_require__(/*! ./calendario.page.scss */ "./src/app/calendario/calendario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _nome_instrutor_service__WEBPACK_IMPORTED_MODULE_4__["NomeInstrutorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _labelsCalendario__WEBPACK_IMPORTED_MODULE_8__["LabelsCalendario"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_9__["Globalization"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]])
    ], CalendarioPage);
    return CalendarioPage;
}());



/***/ }),

/***/ "./src/app/calendario/labelsCalendario.ts":
/*!************************************************!*\
  !*** ./src/app/calendario/labelsCalendario.ts ***!
  \************************************************/
/*! exports provided: Label, LabelsCalendario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsCalendario", function() { return LabelsCalendario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Label = /** @class */ (function () {
    function Label() {
    }
    return Label;
}());

var LabelsCalendario = /** @class */ (function () {
    function LabelsCalendario() {
        this.naopago = new Label();
        this.titulo = new Label();
        this.vertecnicasdia = new Label();
        this.cursos = new Label();
        this.aulasatendidas = new Label();
        this.totalaulas = new Label();
        this.restando = new Label();
        this.tecnicas = new Label();
        this.advançadas = new Label();
        this.semaulashead = new Label();
        this.naopago["ptbr"] = "Você deve ser um usuario premium para acessar esse conteúdo!";
        this.naopago["en"] = "You must be a premium user to have access!";
        this.titulo["ptbr"] = "Início";
        this.titulo["en"] = "Home";
        this.vertecnicasdia["ptbr"] = "Ver tecnicas do dia ";
        this.vertecnicasdia["en"] = "See techniques from day";
        this.cursos["ptbr"] = "Cursos";
        this.cursos["en"] = "Courses";
        this.aulasatendidas["ptbr"] = "Aulas atendidas";
        this.aulasatendidas["en"] = "Classes attended";
        this.totalaulas["ptbr"] = "Total aulas para mudar de faixa";
        this.totalaulas["en"] = "Total classes necessary for a belt change";
        this.restando["ptbr"] = "Aulas restando";
        this.restando["en"] = "Classes left";
    }
    LabelsCalendario = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsCalendario);
    return LabelsCalendario;
}());



/***/ })

}]);
//# sourceMappingURL=calendario-calendario-module.js.map
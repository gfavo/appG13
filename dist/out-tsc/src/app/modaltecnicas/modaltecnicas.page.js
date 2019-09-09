import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NomeInstrutorService } from '../nome-instrutor.service';
var tecnicaId = /** @class */ (function () {
    function tecnicaId() {
    }
    return tecnicaId;
}());
export { tecnicaId };
var ModaltecnicasPage = /** @class */ (function () {
    function ModaltecnicasPage(modalCtrl, instrutor) {
        this.modalCtrl = modalCtrl;
        this.instrutor = instrutor;
    }
    ModaltecnicasPage.prototype.ngOnInit = function () { };
    ModaltecnicasPage.prototype.ionViewWillEnter = function () {
        this.search_tecnica = document.getElementById('search_tecnica');
        this.aula = this.instrutor.getAula();
        this.tecnicasBool = this.aula.tecnicasAvulsas;
        this.tecnicasBool.forEach(function (element) {
            element.incluir = false;
        });
    };
    ModaltecnicasPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    ModaltecnicasPage.prototype.temTecnicas = function (tecnicaAvulsa, tecnicas) {
        var _this = this;
        tecnicas.forEach(function (element) {
            if (element.nome == tecnicaAvulsa.nome) {
                _this.tem = true;
            }
        });
        if (this.tem == true) {
            return true;
        }
        else {
            return false;
        }
    };
    ModaltecnicasPage.prototype.adicionar = function () {
        var _this = this;
        this.aulaComTecnicasAdicionais = this.instrutor.getAulaSelecionada();
        this.tecnicasBool.forEach(function (tecnica) {
            _this.tem = false;
            if (tecnica.incluir == true && _this.temTecnicas(tecnica, _this.aulaComTecnicasAdicionais.tecnicas) == false) {
                _this.aulaComTecnicasAdicionais.tecnicas.push(tecnica);
                _this.instrutor.setIdTecnicas(tecnica.id);
            }
        });
        console.log(JSON.stringify(this.instrutor.getIdTecnicas()));
        this.instrutor.setAulaSelecionada(this.aulaComTecnicasAdicionais);
    };
    ModaltecnicasPage = tslib_1.__decorate([
        Component({
            selector: 'app-modaltecnicas',
            templateUrl: './modaltecnicas.page.html',
            styleUrls: ['./modaltecnicas.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, NomeInstrutorService])
    ], ModaltecnicasPage);
    return ModaltecnicasPage;
}());
export { ModaltecnicasPage };
//# sourceMappingURL=modaltecnicas.page.js.map
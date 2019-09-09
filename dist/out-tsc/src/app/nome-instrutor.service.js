import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var NomeInstrutorService = /** @class */ (function () {
    function NomeInstrutorService() {
        this.tecnicas = [];
    }
    NomeInstrutorService.prototype.setNome = function (nome) {
        this.nome_instrutor = nome;
    };
    NomeInstrutorService.prototype.getNome = function () {
        return this.nome_instrutor;
    };
    NomeInstrutorService.prototype.setToken = function (token) {
        this.token = token;
    };
    NomeInstrutorService.prototype.getToken = function () {
        return this.token;
    };
    NomeInstrutorService.prototype.setAula = function (aula) {
        this.aula = aula;
    };
    NomeInstrutorService.prototype.getAula = function () {
        return this.aula;
    };
    NomeInstrutorService.prototype.setIdPrograma = function (idprograma) {
        this.idprograma = idprograma;
    };
    NomeInstrutorService.prototype.getIdPrograma = function () {
        return this.idprograma;
    };
    NomeInstrutorService.prototype.setDescricao = function (descricaoaula) {
        this.descricaoaula = descricaoaula;
    };
    NomeInstrutorService.prototype.getDescricao = function () {
        return this.descricaoaula;
    };
    NomeInstrutorService.prototype.setAulaSelecionada = function (aula) {
        this.aula_exemplo = aula;
    };
    NomeInstrutorService.prototype.getAulaSelecionada = function () {
        return this.aula_exemplo;
    };
    NomeInstrutorService.prototype.setAulaAberta = function (aberto) {
        this.aberto = aberto;
    };
    NomeInstrutorService.prototype.getAulaAberta = function () {
        return this.aberto;
    };
    NomeInstrutorService.prototype.setDatatime = function (data) {
        this.data = data;
    };
    NomeInstrutorService.prototype.getDatatime = function () {
        return this.data;
    };
    NomeInstrutorService.prototype.setUrl = function (url) {
        this.url = url;
    };
    NomeInstrutorService.prototype.getUrl = function () {
        return this.url;
    };
    NomeInstrutorService.prototype.setIdTecnicas = function (tecnica) {
        this.tecnicas.push(tecnica);
    };
    NomeInstrutorService.prototype.getIdTecnicas = function () {
        return this.tecnicas;
    };
    NomeInstrutorService.prototype.setIdVimeo = function (idvimeo) {
        this.idvimeo = idvimeo;
    };
    NomeInstrutorService.prototype.getIdVimeo = function () {
        return this.idvimeo;
    };
    NomeInstrutorService.prototype.setSenhaVimeo = function (senhavimeo) {
        this.senhavimeo = senhavimeo;
    };
    NomeInstrutorService.prototype.getSenhaVimeo = function () {
        return this.senhavimeo;
    };
    NomeInstrutorService.prototype.setRole = function (role) {
        this.role = role;
    };
    NomeInstrutorService.prototype.getRole = function () {
        return this.role;
    };
    NomeInstrutorService.prototype.setTecnicasDia = function (tecnicas) {
        this.tecnicasdia = tecnicas;
    };
    NomeInstrutorService.prototype.getTecnicasDia = function () {
        return this.tecnicasdia;
    };
    NomeInstrutorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NomeInstrutorService);
    return NomeInstrutorService;
}());
export { NomeInstrutorService };
//# sourceMappingURL=nome-instrutor.service.js.map
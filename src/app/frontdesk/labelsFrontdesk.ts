import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsFrontdesk {
    
 
  aguarde: Label = new Label();
  atencao: Label = new Label();
  checkinctz: Label = new Label();
  sim: Label = new Label();
  sucesso: Label = new Label();
  checkinsucesso: Label = new Label();
  erro: Label = new Label();
  nao: Label = new Label();
  titulo: Label = new Label();
  pesquisenome: Label = new Label();
  pesquisar: Label = new Label();
  checkin: Label = new Label();

constructor(){

  this.aguarde["ptbr"] = "Aguarde por favor";
  this.aguarde["en"] = "Please wait";
  this.atencao["ptbr"] = "Atenção";
  this.atencao["en"] = "Warning";
  this.checkinctz["ptbr"] = "Fazer checkin para o aluno"
  this.checkinctz["en"] = "Confirm checkin to"
  this.sim["ptbr"] = "SIM"
  this.sim["en"] = "YES"
  this.sucesso["ptbr"] = "Sucesso"
  this.sucesso["en"] = "Success"
  this.checkinsucesso["ptbr"] = "Seu checkin foi confirmado"
  this.checkinsucesso["ptbr"] = "Your checkin has been confirmed"
  this.erro["ptbr"] = "Erro";
  this.erro["en"] = "Error";
  this.nao["ptbr"] = "Não";
  this.nao["en"] = "No";
  this.titulo["ptbr"] = "Frontdesk";
  this.titulo["en"] = "Frontdesk";
  this.pesquisenome["ptbr"] = "Pesquise pelo seu nome";
  this.pesquisenome["en"] = "Search for your name";
  this.pesquisar["ptbr"] = "Pesquisar";
  this.pesquisar["en"] = "Search";
  this.checkin["ptbr"] = "Checkin";
  this.checkin["en"] = "Checkin";
}


}
import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsAula {


  sucesshead: Label = new Label();
  sucessmsg: Label = new Label();
  headererro: Label = new Label();
  headermsg: Label = new Label();
  loading: Label = new Label();
  titulo: Label = new Label();
  data: Label = new Label();
  tecnicas: Label = new Label();
  advancadas: Label = new Label();
  semaulashead: Label = new Label();
  semaulasmsg: Label = new Label();
  lista: Label = new Label();
  qr: Label = new Label();
  ver: Label = new Label();
  concluir: Label = new Label();
  adicionar: Label = new Label();


constructor(){
  this.sucesshead["ptbr"] = "Sucesso";
  this.sucesshead["en"] = "Success";
  this.sucessmsg["ptbr"] = "Concluido com Sucesso!";
  this.sucessmsg["en"] = "Successfully completed!";
  this.headererro["ptbr"] = "Falhou";
  this.headererro["en"] = "Failed";
  this.headermsg["ptbr"] = "Registre antes de concluir"; 
  this.headermsg["en"] = "Register before continuing";
  this.loading["ptbr"] = "Aguarde por favor";
  this.loading["en"] = "Please wait";
  this.titulo["ptbr"] = "Página do instrutor";
  this.titulo["en"] = "Instructor page";
  this.data["ptbr"] = "Data da aula";
  this.data["en"] = "Class date";
  this.tecnicas["ptbr"] = "Tecnicas da aula:";
  this.tecnicas["en"] =  "Class techniques";
  this.advancadas["ptbr"] = "Avançadas";
  this.advancadas["en"] = "Advanced";
  this.semaulashead["ptbr"] = "Nenhuma aula indentificada";
  this.semaulashead["en"] = "No classes indentified";
  this.semaulasmsg["ptbr"] = "Crie uma aula";
  this.semaulasmsg["en"] = "Create a new class";
  this.lista["ptbr"] = "Lista de Presença";
  this.lista["en"] = "Presence list";
  this.qr["ptbr"] = "Qr code";
  this.qr["en"] = "Qr code";
  this.ver["ptbr"] = "Ver checkins";
  this.ver["en"] = "See checkins";
  this.concluir["ptbr"] = "Concluir aula";
  this.concluir["en"] = "Complete class";
  this.adicionar["ptbr"] = "Adicionar nova aula";
  this.adicionar["en"] = "Add a new class";


}


}
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
  advançadas: Label = new Label();
  semaulashead: Label = new Label();

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
  this.tecnicas["en"] =  "Class technics";
  this.advançadas["ptbr"] = "Avançadas";
  this.advançadas["en"] = "Advanced";
  this.semaulashead["ptbr"] = "Nenhuma aula indentificada";
  this.semaulashead["en"] = "No classes indentified";


}


}
import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsApp{
    
  acessar: Label = new Label();
  home: Label = new Label();
  biblioteca: Label = new Label();
  mensagens: Label = new Label();
  checkin: Label = new Label();
  logout: Label = new Label();
  sobre: Label = new Label();
  idioma: Label = new Label();
  frontdesk: Label = new Label();
  modonormal: Label = new Label();
  fechar: Label = new Label();


constructor(){

  this.acessar["ptbr"] = "Acessar";
  this.acessar["en"] = "Access";
  this.home["ptbr"] = "Início";
  this.home["en"] = "Home";
  this.biblioteca["ptbr"] = "Diretorio";
  this.biblioteca["en"] = "Library";
  this.mensagens["ptbr"] = "Mensagens";
  this.mensagens["en"] = "Messages";
  this.checkin["ptbr"] = "Checkin";
  this.checkin["en"] = "Checkin";
  this.logout["ptbr"] = "Logout";
  this.logout["en"] = "Logout";
  this.sobre["ptbr"] = "Sobre";
  this.sobre["en"] = "About";
  this.idioma["ptbr"] = "Idioma/Language";
  this.idioma["en"] = "Language/Idioma";
  this.frontdesk["ptbr"] = "Frontdesk";
  this.frontdesk["en"] = "Frontdesk";
  this.modonormal["ptbr"] = "Modo normal";
  this.modonormal["en"] = "Normal mode";
  this.fechar["ptbr"] = "Fechar";
  this.fechar["en"] = "Close";
}


}
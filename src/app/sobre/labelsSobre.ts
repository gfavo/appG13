import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsSobre {
    
  titulo: Label = new Label();
  versao: Label = new Label();
  criadopor: Label = new Label();
  contato: Label = new Label();


constructor(){

  this.titulo["ptbr"] = "Sobre o app";
  this.titulo["en"] = "About the app";
  this.versao["ptbr"] = "Versão";
  this.versao["en"] = "Version";
  this.criadopor["ptbr"] = "Criado por";
  this.criadopor["en"] = "Created by";
  this.contato["ptbr"] = "Contato";
  this.contato["en"] = "Contact";

}


}
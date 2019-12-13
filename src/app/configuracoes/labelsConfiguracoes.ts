import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsConfiguracao {
    
  mudarlingua: Label = new Label();
  titulo: Label = new Label();

constructor(){
  this.mudarlingua["ptbr"] = "Mudar idioma";
  this.mudarlingua["en"] = "Change language";
  this.titulo["ptbr"] = "Configurações";
  this.titulo["en"] = "Settings";
}


}
import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsModaltecnicas {
    
 
  titulo: Label = new Label();
  adicionar: Label = new Label();
  fechar: Label = new Label();
  data: Label = new Label();
  tecnicasaula: Label = new Label();
 

constructor(){

  this.titulo["ptbr"] = "Tecnicas extra";
  this.titulo["en"] = "Extra techniques";
  this.adicionar["ptbr"] = "Adicionar tecnicas";
  this.adicionar["en"] = "Add techniques";
  this.fechar["ptbr"] = "Fechar detalhes";
  this.fechar["en"] = "Close details";


}


}
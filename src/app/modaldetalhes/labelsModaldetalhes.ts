import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsModaldetalhes {
    
 
  titulo: Label = new Label();
  descricao: Label = new Label();
  data: Label = new Label();
  tecnicasaula: Label = new Label();
  fechar: Label = new Label();

constructor(){

  this.titulo["ptbr"] = "Detalhes de aula";
  this.titulo["en"] = "Class details";
  this.descricao["ptbr"] = "Descrição da aula";
  this.descricao["en"] = "Class description";
  this.data["ptbr"] = "Data da aula";
  this.data["en"] = "Class date";
  this.tecnicasaula["ptbr"] = "Tecnicas da aula";
  this.tecnicasaula["en"] = "Class techniques";
  this.fechar["ptbr"] = "Fechar detalhes";
  this.fechar["en"] = "Close details";

}


}
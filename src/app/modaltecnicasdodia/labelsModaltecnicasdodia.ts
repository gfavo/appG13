import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsModaltecnicasdodia {
    
 
  acessar: Label = new Label();
  titulo: Label = new Label();
  fechar: Label = new Label();

 

constructor(){
  this.acessar["ptbr"] = "Acessar";
  this.acessar["en"] = "Access";
  this.titulo["ptbr"] = "Tecnicas feitas no dia";
  this.titulo["en"] = "Techniques done on day";
  this.fechar["ptbr"] = "Fechar detalhes";
  this.fechar["en"] = "Close details";



}


}
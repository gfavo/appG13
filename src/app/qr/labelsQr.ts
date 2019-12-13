import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsQr {
    
  titulo: Label = new Label();
  scancodigo: Label = new Label();
  resultado: Label = new Label();
  descricao: Label = new Label();
  presente: Label = new Label();


constructor(){

  this.titulo["ptbr"] = "Scan QR code";
  this.titulo["en"] = "Scan QR code";
  this.scancodigo["ptbr"] = "Escanear codigo";
  this.scancodigo["en"] = "Scan code";
  this.resultado["ptbr"] = "Resultado do scan";
  this.resultado["en"] = "Result from scan";
  this.presente["ptbr"] = "Presente";
  this.presente["en"] = "Present";
  this.descricao["ptbr"] = "Descrição da aula";
  this.descricao["en"] = "Class description";

}


}
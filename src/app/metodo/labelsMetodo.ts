import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsMetodo {
    
 
  titulo: Label = new Label();
  lista: Label = new Label();
  pin: Label = new Label();
  qr: Label = new Label();

constructor(){

  this.titulo["ptbr"] = "Metodos";
  this.titulo["en"] = "Methods";
  this.lista["ptbr"] = "Lista";
  this.lista["en"] = "List";
  this.pin["ptbr"] = "PIN";
  this.pin["en"] = "PIN";
  this.qr["ptbr"] = "QR";
  this.qr["en"] = "QR";

}


}
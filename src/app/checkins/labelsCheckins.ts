import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsCheckins {


  titulo: Label = new Label();
  confirmapresenca: Label = new Label();
  voltar: Label = new Label();
  checktodos: Label = new Label();
  confirma: Label = new Label();

constructor(){
  this.titulo["ptbr"] = "Checkins";
  this.titulo["en"] = "Checkins";
  this.confirmapresenca["ptbr"] = "Confirmar presença para";
  this.confirmapresenca["en"] = "Confirm presençe for";
  this.voltar["ptbr"] = "Voltar"; 
  this.voltar["en"] = "Back";
  this.checktodos["ptbr"] = "Checar todos";
  this.checktodos["en"] = "Check all";
  this.confirma["ptbr"] = "Confirmar";
  this.confirma["en"] =  "Confirm";

}


}
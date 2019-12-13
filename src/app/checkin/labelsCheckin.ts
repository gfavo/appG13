import { Injectable } from '@angular/core';


export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})

export class LabelsCheckin {

labelMostrarOutras: Label = new Label();
labelCancelarChekin: Label = new Label();
labelFazerCheckin: Label = new Label();
labelDescricaoAula: Label = new Label();
labelInstrutor: Label = new Label();
titleCheckin: Label = new Label();
msgSucessoCheckinCancelado: Label = new Label();
msgSucessoCheckin: Label = new Label();

constructor(){

  this.labelMostrarOutras["ptbr"] = "Mostrar outras";
  this.labelMostrarOutras["en"] = "Show others";

  this.labelCancelarChekin["ptbr"] = "Cancelar checkin!";
  this.labelCancelarChekin["en"] = "Cancel checkin!";

  this.labelFazerCheckin["ptbr"] = "Fazer Checkin";
  this.labelFazerCheckin["en"] = "Do Checkin";

  this.labelDescricaoAula["ptbr"] = "Descrição da aula";
  this.labelDescricaoAula["en"] = "Class description";

  this.labelInstrutor["ptbr"] = "Instrutor";
  this.labelInstrutor["en"] = "Instructor";

  this.titleCheckin["ptbr"] = "Checkin";
  this.titleCheckin["en"] = "Checkin";

  this.msgSucessoCheckinCancelado["ptbr"] = "Checkin cancelado com sucesso!";
  this.msgSucessoCheckinCancelado["en"] = "Checkin cancelled successfully!";

  this.msgSucessoCheckin["ptbr"] = "Sucesso! Seu checkin foi efetuado.";
  this.msgSucessoCheckin["en"] = "Success! Checkin done.";

}



}
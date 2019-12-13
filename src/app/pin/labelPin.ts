import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsPin {
    
  titulo: Label = new Label();
  confirma: Label = new Label();
  confirmapara: Label = new Label();
  sim: Label = new Label();
  nao: Label = new Label();
  note: Label = new Label();
  deveregistrar: Label = new Label();
  concluisucesso: Label = new Label();
  aluno: Label = new Label();
  japresenca: Label = new Label();


constructor(){

  this.titulo["ptbr"] = "Video";
  this.titulo["en"] = "Video";
  this.confirma["ptbr"] = "Confirma";
  this.confirma["en"] = "Confirm";
  this.confirmapara["ptbr"] = "Confirmar presença para";
  this.confirmapara["en"] = "Confirm presence for";
  this.sim["ptbr"] = "Sim";
  this.sim["en"] = "Yes";
  this.nao["ptbr"] = "Não";
  this.nao["en"] =  "No";
  this.note["ptbr"] = "Note";
  this.note["en"] = "Note";
  this.deveregistrar["ptbr"] = "Você deve primeiro registrar uma presença antes de concluir a aula";
  this.deveregistrar["en"] = "You should first register one presençe before completing the class";
  this.concluisucesso["ptbr"] = "A aula foi concluida com sucesso";
  this.concluisucesso["en"] = "The class was successfully completed";
  this.aluno["ptbr"] = "O aluno";
  this.aluno["en"] = "The student";
  this.japresenca["ptbr"] = "já está com presença";
  this.japresenca["en"] = "already has presence";

}


}
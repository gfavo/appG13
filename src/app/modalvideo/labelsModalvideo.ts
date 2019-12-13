import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsModalvideo {
    
  titulo: Label = new Label();
  senha: Label = new Label();
  fechar: Label = new Label();

constructor(){

  this.titulo["ptbr"] = "Video";
  this.titulo["en"] = "Video";
  this.senha["ptbr"] = "Senha";
  this.senha["en"] = "Password";
  this.fechar["ptbr"] = "Fechar";
  this.fechar["en"] = "Close";

}


}
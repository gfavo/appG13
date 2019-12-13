import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsMensagens {
    
 
  titulo: Label = new Label();

constructor(){
  this.titulo["ptbr"] = "Mensagens";
  this.titulo["en"] = "Messages";
}


}
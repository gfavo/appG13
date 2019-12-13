import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsDiretorio {
    
  titulo: Label = new Label();

constructor(){
  this.titulo["ptbr"] = "Diretório";
  this.titulo["en"] = "Library";
}


}
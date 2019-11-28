import { Injectable } from '@angular/core';
import { type } from 'os';
import { T } from '@angular/core/src/render3';

export class Label{
  ptbr: string;
  en: string;
}

export type AssociativeArray<T = unknown> = {[key: string]: T | undefined} | T[];

@Injectable({
  providedIn: 'root'
})



export class LabelsHome {





constructor(){
  
}




getLabel()
{
  
var labels = {};
labels["ptbr"] = {};
labels["en"] = {};

  labels["ptbr"]["loading"] = "Aguarde por favor";
  labels["en"]["loading"] = "Loading";

  labels["ptbr"]["usuarioerrado"] = "Sua senha ou usuario está errado.Favor tentar novamente.";
  labels["en"]["usuarioerrado"] = "Login or password is wrong. Please try again with different credentials.";

  labels["ptbr"]["titulo"] = "Faça seu login";
  labels["en"]["titulo"] = "Please login";

  labels["ptbr"]["usuario"] = "Usuário";
  labels["en"]["usuario"] = "Login";

  labels["ptbr"]["senha"] = "Senha";
  labels["en"]["senha"] = "Password";
 
  labels["ptbr"]["lembrar"] = "Lembrar login";
  labels["en"]["lembrar"] = "Remember login";
  
  labels["ptbr"]["login"] = "Login";
  labels["en"]["login"] = "Login";

  return labels;
}


}
import { Injectable } from '@angular/core';


export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsHome {

loading: Label = new Label();
usuarioerrado: Label = new Label();
titulo: Label = new Label();
usuario: Label = new Label();
senha: Label = new Label();
lembrar: Label = new Label();
login: Label = new Label();




constructor(){


  this.loading["ptbr"]  = "Aguarde por favor";
  this.loading["en"] = "Loading"; 

  this.usuarioerrado["ptbr"] = "Sua senha ou usuario está errado.Favor tentar novamente.";
  this.usuarioerrado["en"]  = "Login or password is wrong. Please try again with different credentials.";

  this.titulo["ptbr"] = "Faça seu login";
  this.titulo["en"] = "Please login";

  this.usuario["ptbr"] = "Usuário";
  this.usuario["en"]  = "Login";

  this.senha["ptbr"] = "Senha";
  this.senha["en"] = "Password";

  this.lembrar["ptbr"] = "Lembrar login";
  this.lembrar["en"] = "Remember login";

  this.login["ptbr"] = "Login";
  this.login["en"] = "Login";

}



}
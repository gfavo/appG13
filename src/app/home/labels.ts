import { Injectable } from '@angular/core';



export class error{
  error: string;
}

@Injectable({
  providedIn: 'root'
})

export class LabelsHome {

labels: string[][];

constructor(){
    this.labels["ptbr"]["loading"] = "Aguarde por favor";
    this.labels["en"]["loading"] = "Loading";

    this.labels["ptbr"]["usuarioerrado"] = "Sua senha ou usuario está errado.Favor tentar novamente.";
    this.labels["en"]["usuarioerrado"] = "Login or password is wrong. Please try again with different credentials.";

    this.labels["ptbr"]["titulo"] = "Faça seu login";
    this.labels["en"]["titulo"] = "Please login";

    this.labels["ptbr"]["usuario"] = "Usuário";
    this.labels["en"]["usuario"] = "Login";

    this.labels["ptbr"]["senha"] = "Senha";
    this.labels["en"]["senha"] = "Password";
   
    this.labels["ptbr"]["lembrar"] = "Lembrar login";
    this.labels["en"]["lembrar"] = "Remember login";
    
}

}
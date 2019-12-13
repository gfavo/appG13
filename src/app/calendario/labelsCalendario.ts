import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsCalendario {




  naopago: Label = new Label();
  titulo: Label = new Label();
  vertecnicasdia: Label = new Label();
  cursos: Label = new Label();
  aulasatendidas: Label = new Label();
  totalaulas: Label = new Label();
  restando: Label = new Label();
  tecnicas: Label = new Label();
  advançadas: Label = new Label();
  semaulashead: Label = new Label();

constructor(){
  this.naopago["ptbr"] = "Você deve ser um usuario premium para acessar esse conteúdo!";
  this.naopago["en"] = "You must be a premium user to have access!";
  this.titulo["ptbr"] = "Início";
  this.titulo["en"] = "Home";
  this.vertecnicasdia["ptbr"] = "Ver tecnicas do dia ";
  this.vertecnicasdia["en"] = "See techniques from day";
  this.cursos["ptbr"] = "Cursos"; 
  this.cursos["en"] = "Courses";
  this.aulasatendidas["ptbr"] = "Aulas atendidas";
  this.aulasatendidas["en"] = "Classes attended";
  this.totalaulas["ptbr"] = "Total aulas para mudar de faixa";
  this.totalaulas["en"] = "Total classes necessary for a belt change";
  this.restando["ptbr"] = "Aulas restando";
  this.restando["en"] =  "Classes left";

}


}
import { Injectable } from '@angular/core';


export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})

export class LabelsNovaAula {

 aulaCriadaHeader: Label = new Label();
 aulaCriadaMessage: Label = new Label();
 aulaCriadaText: Label = new Label();
 alertaDeErroHeader: Label = new Label();
 alertaDeErroMessage: Label = new Label();
 alertaDeErroText: Label = new Label();
 certezaHeader: Label = new Label();
 certezaMessage: Label = new Label();
 certezaButtonSim: Label = new Label();
 certezaButtonNao: Label = new Label();
 loadingMessage: Label = new Label();
 alertEscolha: Label = new Label();
 labelTitulo: Label = new Label();
 labelDataDaAula: Label = new Label();
 labelAulasSemanais: Label = new Label();
 labelDescricaoAula: Label = new Label();
 labelTecnicasExtra: Label = new Label();
 labelDetalhesAula: Label = new Label();
 labelAvancada: Label = new Label();
 buttonVoltar: Label = new Label();
 buttonCriarAula: Label = new Label();
 aguarde: Label = new Label();

constructor(){

 this.aulaCriadaHeader["ptbr"] = "sucesso";
 this.aulaCriadaHeader["en"] = "success";
 this.aulaCriadaMessage["ptbr"] = "Aula criada com sucesso!";
 this.aulaCriadaMessage["en"] = "Class created successfully!";
 this.aulaCriadaText["ptbr"] = "OK";
 this.aulaCriadaText["en"] = "OK";
 this.alertaDeErroHeader["ptbr"] = "Erro";
 this.alertaDeErroHeader["en"] = "Error";
 this.alertaDeErroMessage["ptbr"] = "Adicione uma aula e digite uma descrição para a mesma";
 this.alertaDeErroMessage["en"] = "Add a new class and type a description";
 this.alertaDeErroText["ptbr"] = "OK";
 this.alertaDeErroText["en"] = "OK";
 this.certezaHeader["ptbr"] = "ATENÇÃO";
 this.certezaHeader["en"] = "WARNING";
 this.certezaMessage["ptbr"] = "Tem certeza que deseja criar uma aula?";
 this.certezaMessage["en"] = "Are you sure you want to create a new class?";
 this.certezaButtonSim["ptbr"] = "SIM";
 this.certezaButtonSim["en"] = "YES";
 this.certezaButtonNao["ptbr"] = "NÃO";
 this.certezaButtonNao["en"] = "NO";
 this.aguarde["ptbr"] = "Aguarde por favor";
 this.aguarde["en"] = "Please wait";
 this.alertEscolha["ptbr"] = "Escolha primeiro uma aula semanal!";
 this.alertEscolha["en"] = "Please choose first a weekly class!";
 this.labelTitulo["ptbr"] = "Registre uma nova aula!";
 this.labelTitulo["en"] = "Register a new class!";
 this.labelDataDaAula["ptbr"] = "Data da Aula";
 this.labelDataDaAula["en"] = "Class Date";
 this.labelAulasSemanais["ptbr"] = "Aulas Semanais";
 this.labelAulasSemanais["en"] = "Weekly Classes";
 this.labelDescricaoAula["ptbr"] = "Descrição da aula";
 this.labelDescricaoAula["en"] = "Class description";
 this.labelTecnicasExtra["ptbr"] = "Tecnicas extra";
 this.labelTecnicasExtra["en"] = "Additional techniques";
 this.labelDetalhesAula["ptbr"] = "Detalhes da Aula";
 this.labelDetalhesAula["en"] = "Class Details";
 this.labelAvancada["ptbr"] = "Avançada";
 this.labelAvancada["en"] = "Advanced";
 this.buttonVoltar["ptbr"]= "Voltar"; 
 this.buttonVoltar["en"]= "Return"; 
 this.buttonCriarAula["ptbr"] = "Criar aula";
 this.buttonCriarAula["en"] = "Create class";


 
}



}
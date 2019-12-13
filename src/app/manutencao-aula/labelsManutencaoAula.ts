import { Injectable } from '@angular/core';


export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})

export class LabelsManutencaoAula {

 sucessoRegistradoHeader: Label = new Label();
 sucessoRegistradoMessage: Label = new Label();
 sucessoReload: Label = new Label();
 requestReloadHeader: Label = new Label();
 requestReloadMessage: Label = new Label();
 requestReloadText: Label = new Label();
 concluidoComSucessoHeader: Label = new Label();
 concluidoComSucessoMessage: Label = new Label();
 concluidoComSucessoText: Label = new Label();
 erroAoConcluirHeader: Label = new Label();
 erroAoConcluirMessage: Label = new Label();
 erroAoConcluirText: Label = new Label(); 
 loading: Label = new Label();
 alertaAoVoltarHeader: Label = new Label(); 
 alertaAoVoltarMessage: Label = new Label();
 alertaAoVoltarButtonSim: Label = new Label();
 alertaAoVoltarButtonNao: Label = new Label();
 labelCompleteSuaAula: Label = new Label();
 labelTecnicasDaAula: Label = new Label();
 labelTecnicasExtras: Label = new Label();
 labelDataDaAula: Label = new Label();
 labelPesquisarAlunos: Label = new Label();
 labelRegistrar: Label = new Label();

constructor(){

 this.sucessoRegistradoHeader["ptbr"] = "sucesso";
 this.sucessoRegistradoHeader["en"] = "success";

 this.sucessoRegistradoMessage["ptbr"] = "Registrado com Sucesso!";
 this.sucessoRegistradoMessage["en"] = "Registered successfully!";

 this.sucessoReload["ptbr"] = "Página recarregada com sucesso"; 
 this.sucessoReload["en"] = "Page loaded successfully"; 

 this.requestReloadHeader["ptbr"] = "Cuidado";
 this.requestReloadHeader["en"] = "Warning";

 this.requestReloadMessage["ptbr"] = "Tem certeza que deseja recarregar a página? Perderá tudo não registrado.";
 this.requestReloadMessage["en"] = "Are you sure you want reload page? By doing this you will lose unregistered entries.";

 this.requestReloadText["ptbr"] = "CANCELAR";
 this.requestReloadText["en"] = "CANCEL";

 this.concluidoComSucessoHeader["ptbr"] = "sucesso";
 this.concluidoComSucessoHeader["en"] = "success";

 this.concluidoComSucessoMessage["ptbr"] = "Concluido com Sucesso!";
 this.concluidoComSucessoMessage["en"] = "Completed Successfully!";

 this.concluidoComSucessoText["ptbr"] = "OK";
 this.concluidoComSucessoText["en"] = "OK";

 this.erroAoConcluirHeader["ptbr"] = "falhou";
 this.erroAoConcluirHeader["en"] = "failed";

 this.erroAoConcluirMessage["ptbr"] = "Registre antes de concluir";
 this.erroAoConcluirMessage["en"] = "Register before complete";

 this.erroAoConcluirText["ptbr"] = "OK";
 this.erroAoConcluirText["en"] = "OK";
 
 this.loading["ptbr"] = "Aguarde por favor";
 this.loading["en"] = "Wait please";

 this.alertaAoVoltarHeader["ptbr"] = "Cuidado";
 this.alertaAoVoltarHeader["en"] = "Warning";
 
 this.alertaAoVoltarMessage["ptbr"] = "Registrar antes de voltar?";
 this.alertaAoVoltarMessage["en"] = "Register before returning?";

 this.alertaAoVoltarButtonSim["ptbr"] = "SIM";
 this.alertaAoVoltarButtonSim["en"] = "YES";

 this.alertaAoVoltarButtonNao["ptbr"] = "NAO";
 this.alertaAoVoltarButtonNao["en"] = "NO";

 this.labelCompleteSuaAula["ptbr"] = "Complete sua Aula";
 this.labelCompleteSuaAula["en"] = "Complete your Class";
 
 this.labelTecnicasDaAula["ptbr"] = "Tecnicas da aula";
 this.labelTecnicasDaAula["en"] = "Class techniques";
 
 this.labelTecnicasExtras["ptbr"] = "Tecnicas extras";
 this.labelTecnicasExtras["en"] = "Additional techniques";

 this.labelDataDaAula["ptbr"] = "Data da aula";
 this.labelDataDaAula["en"] = "Class Date";

 this.labelPesquisarAlunos["ptbr"] = "Pesquisar alunos";
 this.labelPesquisarAlunos["en"] = "Search students";

 this.labelRegistrar["ptbr"] = "Registrar";
 this.labelRegistrar["en"] = "Register";

}



}
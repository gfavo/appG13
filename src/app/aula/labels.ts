import { Injectable } from '@angular/core';

export class Label{
  ptbr: string;
  en: string;
}



@Injectable({
  providedIn: 'root'
})



export class LabelsAula {





constructor(){
  
}




getLabel()
{
  
var labels = {};
labels["ptbr"] = {};
labels["en"] = {};

  labels["ptbr"]["sucesshead"] = "Sucesso";
  labels["en"]["sucesshead"] = "Success";

  labels["ptbr"]["sucessmsg"] =  "Concluido com Sucesso!";
  labels["en"]["sucessmsg"] = "Successfully completed!"

  labels["ptbr"]["headererro"] = "Falhou";
  labels["en"]["headererro"] = "Failed";
  
  labels["ptbr"]["headermsg"] = "Registre antes de concluir"; 
  labels["en"]["headermsg"] = "Register before continuing";

  labels["ptbr"]["loading"] = "Aguarde por favor";
  labels["en"]["loading"] = "Please wait";

  labels["ptbr"]["titulo"] = "Página do instrutor";
  labels["en"]["titulo"] = "Instructor page";

  labels["ptbr"]["data"] = "Data da aula";
  labels["en"]["data"] = "Class date";
 
  labels["ptbr"]["tecnicas"] = "Tecnicas da aula:";
  labels["en"]["tecnicas"] = "Class technics";

  labels["ptbr"]["advançadas"] = "Avançadas";
  labels["en"]["advançadas"] = "Advanced";

  labels["ptbr"]["semaulashead"] = "Nenhuma aula indentificada";
  labels["en"]["semaulashead"] = "No classes indentified";

  return labels;
}


}
import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsConfiguracao } from './labelsConfiguracoes';
import { AppComponent } from '../app.component';


@Component({
  selector: "app-configuracoes",
  templateUrl: "./configuracoes.page.html",
  styleUrls: ["./configuracoes.page.scss"]
})
export class ConfiguracoesPage implements OnInit {
  margemPadrao = "35%";
  margemAtual;

  idioma: string;
  idiomaPadrao: string;

  constructor(
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsConfiguracao,
    public app: AppComponent,
    private instrutor: NomeInstrutorService
    ) {}

  ngOnInit() {}

  checkIdioma(){
    this.storage.get("idioma").then(res => {
        
      this.idiomaPadrao = res;
    if(res == "" || res == null)
  {
    this.globalization.getPreferredLanguage().then(res => {
  if(res.value.includes("pt"))
  {
  this.storage.set("idioma","ptbr");
  this.idiomaPadrao = "ptbr";
  }
  else if(res.value.includes("en"))
  {
  this.storage.set("idioma","en");
  this.idiomaPadrao = "en";
  }
  
    });
  }
  });
  }

  

  ionViewWillEnter() {
this.checkIdioma();


    this.storage.get("idioma").then(res =>{
    this.idioma = res;
    });
  }

  mudouIdioma(){
this.storage.set("idioma",this.idioma);
this.app.setIdioma(this.idioma);
this.instrutor.idiomaPadrao = this.idioma;
  }

}


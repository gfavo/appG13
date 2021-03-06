import { Component } from "@angular/core";

import {
  Platform,
  MenuController,
  AlertController,
  IonButton
} from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { RouterOutlet, Router } from "@angular/router";
import { NomeInstrutorService } from "./nome-instrutor.service";

import { Storage } from "@ionic/storage";
import { $ } from "protractor";
import { BrowserTransferStateModule } from "@angular/platform-browser";
import { Globalization } from '@ionic-native/globalization/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { LabelsApp } from './labelsApp';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(
    private storage: Storage,
    public intrutor: NomeInstrutorService,
    private menu: MenuController,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private globalization: Globalization,
    private onesignal: OneSignal,
    public labels: LabelsApp
  ) {
    this.checkIdioma();
    this.initializeApp();

    
  }

  exibe_diretorio: boolean = true;
  modo_frontdesk: boolean = false;
  idiomaPadrao: string;

  async alertaNaoPago() {
    const alert = await this.alertController.create({
      header: "",
      message: this.intrutor.getMensagem(this.idiomaPadrao),
      buttons: [{text: this.labels.acessar[this.idiomaPadrao], handler: ()=>{window.open("https://www.g13bjj.com.br/ct/?adesao")}},this.labels.fechar[this.idiomaPadrao]]
    });
    await alert.present();
  }
  initializeApp() {
    this.platform.ready().then(() => {

      this.checkIdioma();
      this.checkIdiomaSideMenu();
      

      this.storage.get("login").then(val => {
this.intrutor.idiomaPadrao = this.idiomaPadrao;

        if (val != ""  && val != null) {
        this.router.navigate(['/load-login']);
        }
        else
        {
          this.router.navigate(['/home']);
        }
      });


      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });

  
  }

setIdioma(idioma){
  this.idiomaPadrao = idioma;
}

  
  abriu(){
    this.checkIdiomaSideMenu();
  }


  ionViewWillEnter() {

    //Disabilita o botao voltar 
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => {
        document.addEventListener('backbutton', function (event) {
          event.preventDefault();
          event.stopPropagation();
          console.log('hello');
        }, false);
      });
      this.statusBar.styleDefault();
    });


    if (this.intrutor.getRole() == "ALUNOPAGO") {
      this.exibe_diretorio = true;
    } else {
      this.exibe_diretorio = false;
    }
  }

  logoff() {
    this.intrutor.setAula(undefined);
    this.intrutor.setAulaAberta(undefined);
    this.intrutor.setAulaSelecionada(undefined);
    this.intrutor.setDatatime(undefined);
    this.intrutor.setDescricao(undefined);
    this.intrutor.setIdPrograma(undefined);
    this.intrutor.setNome(undefined);
    this.intrutor.setToken(undefined);
    //Deixar com que o url continue o mesmo depois do logout this.intrutor.setUrl(undefined);
    this.storage.set("login", "");
    this.storage.set("senha", "");

    this.menu.toggle();

    this.router.navigate(["/home"]);
  }

  homepage() {
    this.menu.toggle();
    if (this.intrutor.getRole() == "INSTRUTOR") {
      this.router.navigate(["/aula"]);
    } else {
      this.router.navigate(["/calendario"]);
    }
  }

  abreDiretorio() {
    if (this.intrutor.getRole() != "ALUNO") {
      this.menu.toggle();
      this.router.navigate(["/diretorio"]);
    } else {
      this.alertaNaoPago();
    }
  }

  configuracoes() {
    this.menu.toggle();

    this.router.navigate(["/configuracoes"]);
  }

  checkin() {
    this.menu.toggle();

    this.router.navigate(["/checkin"]);
  }

  checkins() {
    this.menu.toggle();

    this.router.navigate(["/checkins"]);
  }

  mensagens() {
    this.menu.toggle();

    this.router.navigate(["/mensagens"]);
  }

  sobre() {
    this.menu.toggle();

    this.router.navigate(["/sobre"]);
  }

  frontdesk() {
    this.menu.toggle();

    this.router.navigate(["/frontdesk"]);
    this.modo_frontdesk = true;
  }

  normal() {
    this.menu.toggle();

    this.router.navigate(["/aula"]);
    this.modo_frontdesk = false;
  }

  checkIdioma(){
    this.storage.get("idioma").then(val => {
     if(val == "") {
        this.globalization.getPreferredLanguage().then(res => 
          {
if(res.value.includes("en"))
{
this.storage.set("idioma","en");
}
else if(res.value.includes("pt"))
{
this.storage.set("idioma","ptbr");
}
          })
      }

    });
  }


  checkIdiomaSideMenu(){
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


}

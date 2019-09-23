import { Component } from '@angular/core';

import { Platform, MenuController, AlertController, IonButton } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterOutlet, Router } from '@angular/router';
import { NomeInstrutorService } from './nome-instrutor.service';

import { Storage } from '@ionic/storage';
import { $ } from 'protractor';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
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
    private alertController: AlertController
  ) {
    this.initializeApp();
  }

  exibe_diretorio: boolean = true;
modo_frontdesk: boolean = false;

  async alertaNaoPago() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Você deve ser um usuario premium para acessar esse conteúdo!',
      buttons: ['OK']
    });
    await alert.present();
  }
  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  
  ionViewWillEnter() {
if (this.intrutor.getRole() == "ALUNOPAGO")
{
  this.exibe_diretorio = true;
}
else{
  this.exibe_diretorio = false;
}



  }


  logoff(){
    this.intrutor.setAula(undefined);
    this.intrutor.setAulaAberta(undefined);
    this.intrutor.setAulaSelecionada(undefined);
    this.intrutor.setDatatime(undefined);
    this.intrutor.setDescricao(undefined);
    this.intrutor.setIdPrograma(undefined);
    this.intrutor.setNome(undefined);
    this.intrutor.setToken(undefined);
    this.intrutor.setUrl(undefined);
    this.storage.set('login','');
    this.storage.set('senha','');


    this.menu.toggle();
    
    
    this.router.navigate(["/home"]);
   
  }

  homepage(){

    this.menu.toggle();
    if(this.intrutor.getRole() == "INSTRUTOR")
    {
    this.router.navigate(["/aula"]);
    }
    else
    {
      this.router.navigate(["/calendario"]);
    }
  }

  abreDiretorio()
  {
    if (this.intrutor.getRole() != "ALUNO")
    {
      this.menu.toggle();
      this.router.navigate(["/diretorio"]);
    }
    else
    {
this.alertaNaoPago();
    }

  }

  configuracoes(){
    this.menu.toggle();
    
    
    this.router.navigate(["/configuracoes"]);
  }
  
  checkin(){
    this.menu.toggle();

    this.router.navigate(["/checkin"]);
  }

  checkins(){
    this.menu.toggle();

    this.router.navigate(["/checkins"]);
  }

  mensagens(){
    this.menu.toggle();

    this.router.navigate(["/mensagens"]);
  }

  sobre(){
    this.menu.toggle();

    this.router.navigate(["/sobre"]);
  }

  frontdesk()
  {

    this.menu.toggle();
   

    this.router.navigate(["/frontdesk"]);
    this.modo_frontdesk = true;
  }

  normal()
  {
    this.menu.toggle();

    this.router.navigate(["/aula"]);
    this.modo_frontdesk = false;
  }
}

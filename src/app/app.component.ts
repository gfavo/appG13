import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterOutlet, Router } from '@angular/router';
import { NomeInstrutorService } from './nome-instrutor.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private storage: Storage,
    private intrutor: NomeInstrutorService,
    private menu: MenuController,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
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
    this.router.navigate(["/aula"]);
  }
}

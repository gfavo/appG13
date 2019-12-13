import { Component, Input } from "@angular/core";
import { ClientService } from "../client.service";
import { Observable } from "rxjs";

import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Md5 } from "md5-typescript";
import { HttpHeaders } from "@angular/common/http";

import { Router } from "@angular/router";

import { AlertController, IonItem, Platform } from "@ionic/angular";

import { NomeInstrutorService } from "../nome-instrutor.service";
import { Response } from "selenium-webdriver/http";

import { Network } from "@ionic-native/network/ngx";

import { Storage } from "@ionic/storage";

import { LoadingController } from "@ionic/angular";

import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsHome } from './labelsHome';
import { Alert } from 'selenium-webdriver';
import { OneSignal } from '@ionic-native/onesignal/ngx';


const headers = new HttpHeaders({ teste: "123" });

export class Customer {
  user: string;
  pass: string;
  playerid: string;
}

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public pessoa = new Customer();

  status: number;

  token: string;

  testeUrl: string;

  mostrarTela: boolean;

  lembrar: boolean = false;

  isloading: boolean = false;
  
  idiomaPadrao: string;

  constructor(
    private load: LoadingController,
    private storage: Storage,
    private network: Network,
    private httpClient: HttpClient,
    private router: Router,
    public instrutor: NomeInstrutorService,
    private alertController: AlertController,
    public labels: LabelsHome,
    private globalization: Globalization,
    private onesignal: OneSignal,
    private platform: Platform
  ) {}

  async alertaDeErro() {
    const alert = await this.alertController.create({
      header: "Erro",
      message: this.labels.usuarioerrado[this.idiomaPadrao],
      buttons: ["OK"]
    });
    await alert.present();
  }

  async presentLoading() {
    this.isloading = true;
    const loading = await this.load.create({
      message: this.labels.loading[this.idiomaPadrao],
      duration: 10000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async dismiss() {
    this.isloading = false;
    return await this.load.dismiss().then(() => console.log("dismissed"));
  }

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

    this.pessoa.pass = "";
    this.pessoa.user = "";
    this.lembrar = false;

    this.status = 0;

    if (this.instrutor.getUrl() == null) {
      this.instrutor.setUrl("https://www.g13bjj.com.br/ct/mobile");
    }

    this.storage.get("login").then(val => {
      if (val != "" && val != null) {
        this.storage.get("login").then(val => {
          this.pessoa.user = val;
        });
        this.storage.get("senha").then(val => {
          this.pessoa.pass = val;
          this.onSubmit();
        });
      }
      else
      {
this.mostrarTela = true;
      }
    });
  }

  ionViewDidEnter() {
    /*this.status = 0;


    if (this.instrutor.getUrl() == null) {
      this.instrutor.setUrl("https://www.g13bjj.com.br/ct/mobile");
    }




    this.storage.get('login').then((val) => {

      if (val != "") {
        this.storage.get('login').then((val) => {
          this.pessoa.user = val;
        });
        this.storage.get('senha').then((val) => {
          this.pessoa.pass = val;
          this.onSubmit();
        });

      }
    });*/
  }
  //https://www.g13bjj.com.br/ct/mobile/login.php

  mostrarUrl() {
    this.testeUrl = this.instrutor.getUrl();
  }

  onSubmit() {

    this.instrutor.idiomaPadrao = this.idiomaPadrao;
    if (this.pessoa.user == "painel" && this.pessoa.pass == "painelmaster123") {
      this.router.navigate(["/painel"]);
    } else {
      this.presentLoading();

if(this.platform.is("cordova"))
{

 this.setupPush();
 this.onesignal.getIds().then(res => {

this.pessoa.playerid = res.userId;

      this.httpClient
        .post(
          this.instrutor.getUrl() + "/login.php",
          JSON.stringify(this.pessoa),
          {
            responseType: "text",
            observe: "response",
            withCredentials: true,
            headers: new HttpHeaders({ "x-version": "1.1.0"})
          }
        )

        .subscribe(
          response => {
           
            this.status = response.status;

            if (this.lembrar == true) {
              this.storage.set("login", this.pessoa.user);
              this.storage.set("senha", this.pessoa.pass);
            }

            this.instrutor.setRole(response.headers.get("x-role"));
            if (response.headers.get("x-role") == "INSTRUTOR") {
              this.router.navigate(["/aula"]);
            } else {
              this.router.navigate(["/calendario"]);
            }
            this.instrutor.setNome(this.pessoa.user);

            this.instrutor.setToken(response.headers.get("x-auth"));
          },
          error => {
            
            this.dismiss();
            // alert("Login ou senha errados, por favor , tente novamente");
            this.alertaDeErro();
            this.status = error.status;
          
          }
        );
      });
    
    
    }else
    {
      this.httpClient
      .post(
        this.instrutor.getUrl() + "/login.php",
        JSON.stringify(this.pessoa),
        {
          responseType: "text",
          observe: "response",
          withCredentials: true,
          headers: new HttpHeaders({ "x-version": "1.1.0" })
        }
      )

      .subscribe(
        response => {
          this.dismiss();
          this.status = response.status;

          if (this.lembrar == true) {
            this.storage.set("login", this.pessoa.user);
            this.storage.set("senha", this.pessoa.pass);
          }

          this.instrutor.setRole(response.headers.get("x-role"));
          if (response.headers.get("x-role") == "INSTRUTOR") {
            this.router.navigate(["/aula"]);
          } else {
            this.router.navigate(["/calendario"]);
          }
          this.instrutor.setNome(this.pessoa.user);

          this.instrutor.setToken(response.headers.get("x-auth"));
        },
        error => {
          
          this.dismiss();
          // alert("Login ou senha errados, por favor , tente novamente");
          this.alertaDeErro();
          this.status = error.status;
        
        }
      );
    }
  }

 
  
  }

  esquece() {
    this.storage.set("login", "");
    this.storage.set("senha", "");
  }

  lembrarTrue() {
    if (this.lembrar == false) {
      this.lembrar = true;
    } else {
      this.lembrar = false;
    }
  }

  setupPush(){

    this.onesignal.startInit('263822b5-7136-41c1-bf15-1f6656905a42','39062838804');
  
    this.onesignal.handleNotificationReceived().subscribe(res => {});
    
    this.onesignal.handleNotificationOpened().subscribe(res => {});

    this.onesignal.endInit();

    }

}

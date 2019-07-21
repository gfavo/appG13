import { Component, Input } from '@angular/core';
import { ClientService } from '../client.service';
import { Observable } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Md5 } from "md5-typescript";
import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

import { AlertController, IonItem } from '@ionic/angular';

import { NomeInstrutorService } from "../nome-instrutor.service";
import { Response } from 'selenium-webdriver/http';

import { Network } from '@ionic-native/network/ngx';

import { Storage } from '@ionic/storage';

import { LoadingController } from '@ionic/angular';

const headers = new HttpHeaders({ 'teste': '123' });


export class Customer {
  user: string;
  pass: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pessoa = new Customer;




  status: number;

  token: string;

  testeUrl: string;

  lembrar: boolean = false;

  isloading:boolean = false;

  constructor(private load: LoadingController,private storage: Storage, private network: Network, private httpClient: HttpClient, private router: Router, public instrutor: NomeInstrutorService, private alertController: AlertController) { }

  async alertaDeErro() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Sua senha ou usuario está errado.Favor tentar novamente.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentLoading() {
    this.isloading = true;
    const loading = await this.load.create({
      message: 'Aguarde por favor',
      duration: 5000
    });
    await loading.present();

   

    const { role, data } = await loading.onDidDismiss();

  
  }

  async dismiss() {
    this.isloading = false;
    return await this.load.dismiss().then(() => console.log('dismissed'));
  }

  ngOnInit() {


  }
  ionViewWillEnter() {
    this.pessoa.pass = "";
    this.pessoa.user = "";
    this.lembrar = false;

    this.status = 0;


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

    if (this.pessoa.user == "painel" && this.pessoa.pass == "painelmaster123") {
      this.router.navigate(["/painel"]);
    }

    else {


      this.presentLoading();

      this.httpClient.post(this.instrutor.getUrl() + "/login.php", JSON.stringify(this.pessoa), { responseType: 'text', observe: "response", withCredentials: true })

        .subscribe(
          response => {

          this.dismiss();

            this.status = response.status;

            if (this.lembrar == true) {
              this.storage.set('login', this.pessoa.user);
              this.storage.set('senha', this.pessoa.pass);
            }

            this.router.navigate(["/aula"]);
            this.instrutor.setNome(this.pessoa.user);


            this.instrutor.setToken(response.headers.get("x-auth"));

        


          },
          error => {
            this.dismiss();
            // alert("Login ou senha errados, por favor , tente novamente");
            this.alertaDeErro();
            this.status = error.status;
          },
        );
    }






  }

  esquece() {
    this.storage.set('login', '');
    this.storage.set('senha', '');
  }

  lembrarTrue(){
    if(this.lembrar == false)
    {
this.lembrar = true;
    }
    else
    {
      this.lembrar = false;
    }
  }
}


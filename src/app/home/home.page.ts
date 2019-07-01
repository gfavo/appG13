import { Component, Input } from '@angular/core';
import { ClientService } from '../client.service';
import { Observable } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Md5 } from "md5-typescript";
import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { NomeInstrutorService } from "../nome-instrutor.service";
import { Response } from 'selenium-webdriver/http';

import { Network } from '@ionic-native/network/ngx';



const  headers = new  HttpHeaders({'teste': '123'});


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

  public  pessoa = new Customer;

status: number;

token: string;

testeUrl: string;


  constructor(private network: Network,private httpClient: HttpClient, private router: Router, public instrutor: NomeInstrutorService, private alertController:AlertController) { }

  async alertaDeErro() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Sua senha ou usuario está errado.Favor tentar novamente.',
      buttons: ['OK']
    });
    await alert.present();
  }

 

  ngOnInit() {

    if (this.instrutor.getUrl() == null)
    {
      this.instrutor.setUrl("https://www.g13bjj.com.br/ct/mobile");  
    }
    
           this.status = 0; 

  }
  //https://www.g13bjj.com.br/ct/mobile/login.php


mostrarUrl(){
  this.testeUrl = this.instrutor.getUrl();
}


  onSubmit() {

if (this.pessoa.user == "painel" && this.pessoa.pass == "painelmaster123")
{
this.router.navigate(["/painel"]);
}

else{


    this.httpClient.post(this.instrutor.getUrl()+"/login.php",JSON.stringify(this.pessoa),{ responseType: 'text', observe: "response", withCredentials: true})

  .subscribe(
    response  =>{ 
   
      

      this.status = response.status;
      this.router.navigate(["/aula"]);
      this.instrutor.setNome(this.pessoa.user);

     
      this.instrutor.setToken(response.headers.get("x-auth"));  

      
     },
    error  => { 
     // alert("Login ou senha errados, por favor , tente novamente");
     this.alertaDeErro();
      this.status = error.status; },
    );

  
  }
  
}


}


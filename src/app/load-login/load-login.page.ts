import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Router } from '@angular/router';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { Globalization } from '@ionic-native/globalization/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from "@ionic/storage";

export class Customer {
  user: string;
  pass: string;
}

@Component({
  selector: 'app-load-login',
  templateUrl: './load-login.page.html',
  styleUrls: ['./load-login.page.scss'],
})
export class LoadLoginPage implements OnInit {

  public pessoa = new Customer();

  status: number;

  token: string;

  testeUrl: string;

  

  constructor(
    private load: LoadingController,
    private storage: Storage,
    private network: Network,
    private httpClient: HttpClient,
    private router: Router,
    public instrutor: NomeInstrutorService,
    private alertController: AlertController,
    private globalization: Globalization,
  ) {}

  ngOnInit() {
  }

  checkIdioma(){
    this.storage.get("idioma").then(res => {
        
    if(res == "" || res == null)
  {
    this.globalization.getPreferredLanguage().then(res => {
  if(res.value.includes("pt"))
  {
  this.storage.set("idioma","ptbr");

  }
  else if(res.value.includes("en"))
  {
  this.storage.set("idioma","en");

  }
  
    });
  }
  });
  }

ionViewWillEnter(){
  
  this.pessoa.pass = "";
  this.pessoa.user = "";


  this.status = 0;

  if (this.instrutor.getUrl() == null) {
    this.instrutor.setUrl("https://www.g13bjj.com.br/ct/mobile");
  }

  this.storage.get("login").then(val => {
  
      this.storage.get("login").then(val => {
        this.pessoa.user = val;
      });
      this.storage.get("senha").then(val => {
        this.pessoa.pass = val;
        this.httpClient
        .post(
          this.instrutor.getUrl() + "/login.php",
          JSON.stringify(this.pessoa),
          {
            responseType: "text",
            observe: "response",
            withCredentials: true,
            headers: new HttpHeaders({ "x-version": "1.0.9" })
          }
        )

        .subscribe(
          response => {
           
            this.status = response.status;
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
            
    
            // alert("Login ou senha errados, por favor , tente novamente");
     
            this.status = error.status;
          
          }
        );
      });
    });

}

}

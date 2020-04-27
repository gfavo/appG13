import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsCheckins } from './labelsCheckins';
import { Storage } from '@ionic/storage';
class conteudoCheck {
  aulaid: number;
  confirmado: number;
  datahorasolicitacao: string;
  id: number;
  idAluno: number;
  nome: string;
}

@Component({
  selector: "app-checkins",
  templateUrl: "./checkins.page.html",
  styleUrls: ["./checkins.page.scss"]
})
export class CheckinsPage implements OnInit {
  subscription;
  conteudo: conteudoCheck[];
  headers = new HttpHeaders({
    "x-version": "1.1.1",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });
  idiomaPadrao: string;

  constructor(
    private instrutor: NomeInstrutorService,
    private httpClient: HttpClient,
    private router: Router,
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsCheckins
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
    this.subscription = this.httpClient
      .get(this.instrutor.getUrl() + "/checkins.php", {
        responseType: "json",
        headers: this.headers
      })
      .subscribe(data => {
        this.conteudo = <conteudoCheck[]>data;
        console.log(JSON.stringify(this.conteudo));
      });
  }

  confirmar() {
    this.subscription = this.httpClient
      .post(this.instrutor.getUrl() + "/confirma.php", this.conteudo, {
        responseType: "json",
        headers: this.headers
      })
      .subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("/aula");
      });
  }

  voltar() {
    this.router.navigateByUrl("/aula");
  }

  checkall() {
    this.conteudo.forEach(element => {
      element.confirmado = 1;
    });
  }
}

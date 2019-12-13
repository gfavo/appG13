import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsMensagens } from './labelsMensagens';

class mensagem {
  assunto: string;
  datahora: string;
  mensagem: string;
}

@Component({
  selector: "app-mensagens",
  templateUrl: "./mensagens.page.html",
  styleUrls: ["./mensagens.page.scss"]
})
export class MensagensPage implements OnInit {
  mensagens: mensagem[];
  headers = new HttpHeaders({
    "x-version": "1.1.0",
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
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsMensagens
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

    this.httpClient
      .get(this.instrutor.getUrl() + "/mensagens.php", {
        headers: this.headers
      })
      .subscribe(data => {
        console.log(data);
        this.mensagens = <mensagem[]>data;
      });
  }
}

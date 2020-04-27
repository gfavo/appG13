import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { ThrowStmt } from "@angular/compiler";
import { AlertController, LoadingController } from "@ionic/angular";
import { LabelsFrontdesk } from './labelsFrontdesk';
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';

class alunos {
  codigo: string;
  id: number;
  meualuno: boolean;
  nome: string;
  presenca: boolean;
  mandar: boolean;
}

class conteudo {
  alunos: alunos[];
  datetime: string;
  id: number;
}

class checklist {
  nome: string;
  id: number;
  mandar: boolean;
}

class erro {
  error: error;
}

class error {
  error: string;
}

@Component({
  selector: "app-frontdesk",
  templateUrl: "./frontdesk.page.html",
  styleUrls: ["./frontdesk.page.scss"]
})
export class FrontdeskPage implements OnInit {
  headers = new HttpHeaders({
    "x-version": "1.1.1",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  search_string: string;
  alunos: alunos[] = undefined;
  checklist: checklist[];
  conteudo: conteudo;
  isloading: boolean;
  idiomaPadrao: string;

  constructor(
    private instrutor: NomeInstrutorService,
    private httpClient: HttpClient,
    private alertController: AlertController,
    private load: LoadingController,
    private storage: Storage,
    private globalization: Globalization,
     public labels: LabelsFrontdesk
  ) {}

  async msg(head, msg) {
    const m = await this.alertController.create({
      header: head,
      message: msg,
      buttons: ["OK"]
    });
    await m.present();
  }

  async presentLoading() {
    this.isloading = true;
    const loading = await this.load.create({
      message: this.labels.aguarde[this.idiomaPadrao],
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async dismiss() {
    this.isloading = false;
    return await this.load.dismiss().then(() => console.log("dismissed"));
  }

  async msgcertezacheckin(nome: string, id) {
    const conclui = await this.alertController.create({
      header: this.labels.atencao[this.idiomaPadrao],
      message: this.labels.checkinctz[this.idiomaPadrao] + nome + "?",
      buttons: [
        {
          text: this.labels.sim[this.idiomaPadrao],
          handler: () => {
            this.httpClient
              .post(
                this.instrutor.getUrl() + "/checkin_frontdesk.php",
                {
                  alunoid: id,
                  aulaid: this.conteudo.id,
                  datahorasolicitacao: this.formatDate(new Date())
                },
                { responseType: "json", headers: this.headers, observe: "body" }
              )
              .subscribe(
                data => {
                  console.log(data);
                  this.msg(this.labels.sucesso[this.idiomaPadrao], this.labels.checkinsucesso[this.idiomaPadrao]);
                },
                error => {
                  this.msg(this.labels.erro[this.idiomaPadrao], (<erro>error).error.error);
                }
              );
            this.alunos = undefined;
          }
        },
        { text: this.labels.nao[this.idiomaPadrao] }
      ]
    });
    await conclui.present();
  }

  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return (
      [year, month, day].join("-") +
      " " +
      this.formatZero(d.getHours()) +
      ":" +
      this.formatZero(d.getMinutes())
    );
  }

  formatZero(numero) {
    if (parseInt(numero) < 10) {
      return "0" + numero;
    }
    return numero;
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
  }

  pesquisa() {
    this.presentLoading();
    this.httpClient
      .post(
        this.instrutor.getUrl() + "/aula_filtro.php",
        { search: this.search_string },
        { responseType: "json", headers: this.headers }
      ) 
      .subscribe(data => {
        console.log(data);
        this.alunos = (<conteudo>data).alunos;
        this.checklist = <checklist[]>(<conteudo>data).alunos;
        this.conteudo = <conteudo>data;

        this.checklist.forEach(element => (element.mandar = false));
        this.dismiss();
      });
  }

  checkin(nome, id) {
    this.msgcertezacheckin(nome, id);
  }
}

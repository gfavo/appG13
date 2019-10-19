import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { Router } from "@angular/router";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { AlertController } from "@ionic/angular";

class conteudoAulasAtivas {
  data: string;
  descricao: string;
  id: number;
  nomeinstrutor: string;
  idinstrutor: number;
  checkin: boolean;
  idcheckin: number;
  auladoinstrutor: boolean;
}

@Component({
  selector: "app-checkin",
  templateUrl: "./checkin.page.html",
  styleUrls: ["./checkin.page.scss"]
})
export class CheckinPage implements OnInit {
  checkin_: boolean;
  conteudo: conteudoAulasAtivas[];
  subscription;
  headers = new HttpHeaders({
    "x-version": "1.0.7",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  async mostrarErro(erro) {
    const registra = await this.alertController.create({
      header: "",
      message: erro,
      buttons: [{ text: "OK" }]
    });
    await registra.present();
  }

  constructor(
    private instrutor: NomeInstrutorService,
    private httpClient: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

temaulainstrutor: boolean;
mostraravulsas:boolean = false;

  ionViewWillEnter() {
    this.subscription = this.httpClient
      .get(this.instrutor.getUrl() + "/aulasativas.php", {
        responseType: "json",
        headers: this.headers
      })
      .subscribe(data => {
        this.conteudo = <conteudoAulasAtivas[]>data;
        this.temaulainstrutor = false;
this.conteudo.forEach(element => {
if(element.auladoinstrutor) this.temaulainstrutor = true;
});


        console.log(data);
        this.checkin_ = false;
        (<conteudoAulasAtivas[]>data).forEach(element => {
          if (element.checkin) this.checkin_ = true;
        });
      });
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

  checkin(aulaid, instrutorid) {
    this.subscription = this.httpClient
      .post(
        this.instrutor.getUrl() + "/checkin.php",
        {
          aulaid: aulaid,
          instrutorid: instrutorid,
          datahorasolicitacao: this.formatDate(new Date())
        },
        { observe: "response", responseType: "json", headers: this.headers }
      )
      .subscribe(
        data => {
          console.log(JSON.stringify(data.body));
          this.mostrarErro("Sucesso! Seu checkin foi efetuado.");
          this.subscription = this.httpClient
            .get(this.instrutor.getUrl() + "/aulasativas.php", {
              responseType: "json",
              headers: this.headers
            })
            .subscribe(data => {
              this.conteudo = <conteudoAulasAtivas[]>data;
              console.log(data);
              this.checkin_ = false;
              (<conteudoAulasAtivas[]>data).forEach(element => {
                if (element.checkin) this.checkin_ = true;
              });
            });
        },
        error => {
          this.mostrarErro(error.error.error);
          this.subscription = this.httpClient
            .get(this.instrutor.getUrl() + "/aulasativas.php", {
              responseType: "json",
              headers: this.headers
            })
            .subscribe(data => {
              this.conteudo = <conteudoAulasAtivas[]>data;
              console.log(data);
              this.checkin_ = false;
              (<conteudoAulasAtivas[]>data).forEach(element => {
                if (element.checkin) this.checkin_ = true;
              });
            });
        }
      );
  }
  cancelar(idcheckin) {
    this.subscription = this.httpClient
      .post(
        this.instrutor.getUrl() + "/cancelar_checkin.php",
        { idcheckin: idcheckin },
        { headers: this.headers }
      )
      .subscribe(
        data => {
          console.log(data);
          this.mostrarErro("Checkin cancelado com sucesso!");
          this.subscription = this.httpClient
            .get(this.instrutor.getUrl() + "/aulasativas.php", {
              responseType: "json",
              headers: this.headers
            })
            .subscribe(data => {
              this.conteudo = <conteudoAulasAtivas[]>data;
              console.log(data);
              this.checkin_ = false;
              (<conteudoAulasAtivas[]>data).forEach(element => {
                if (element.checkin) this.checkin_ = true;
              });
            });
        },
        error => {
          console.log(error);
          this.subscription = this.httpClient
            .get(this.instrutor.getUrl() + "/aulasativas.php", {
              responseType: "json",
              headers: this.headers
            })
            .subscribe(data => {
              this.conteudo = <conteudoAulasAtivas[]>data;
              console.log(data);
              this.checkin_ = false;
              (<conteudoAulasAtivas[]>data).forEach(element => {
                if (element.checkin) this.checkin_ = true;
              });
            });
        }
      );
  }

  mostra_avulsas(){
    this.mostraravulsas = !this.mostraravulsas;
  }
}

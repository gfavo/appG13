import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { ThrowStmt } from "@angular/compiler";
import { AlertController } from "@ionic/angular";

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
    "x-version": "1.0.6",
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

  constructor(
    private instrutor: NomeInstrutorService,
    private httpClient: HttpClient,
    private alertController: AlertController
  ) {}

  async msg(head, msg) {
    const m = await this.alertController.create({
      header: head,
      message: msg,
      buttons: ["OK"]
    });
    await m.present();
  }

  async msgcertezacheckin(nome: string, id) {
    const conclui = await this.alertController.create({
      header: "Atenção",
      message: "Fazer checkin para o aluno " + nome + "?",
      buttons: [
        {
          text: "SIM",
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
                  this.msg("Sucesso", "Seu checkin foi efetuado com sucesso");
                },
                error => {
                  this.msg("Erro", (<erro>error).error.error);
                }
              );
            this.alunos = undefined;
          }
        },
        { text: "NÃO" }
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

  ionViewWillEnter() {}

  pesquisa() {
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
      });
  }

  checkin(nome, id) {
    this.msgcertezacheckin(nome, id);
  }
}

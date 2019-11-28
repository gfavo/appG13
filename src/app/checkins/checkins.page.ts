import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

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
    "x-version": "1.0.9",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  constructor(
    private instrutor: NomeInstrutorService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
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

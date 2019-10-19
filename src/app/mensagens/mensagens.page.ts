import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";

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
    "x-version": "1.0.7",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  constructor(
    private instrutor: NomeInstrutorService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
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

import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService } from "../nome-instrutor.service";

@Component({
  selector: "app-painel",
  templateUrl: "./painel.page.html",
  styleUrls: ["./painel.page.scss"]
})
export class PainelPage implements OnInit {
  enderecoNovo: string;

  constructor(public instrutor: NomeInstrutorService) {}

  ngOnInit() {}

  mudarUrl() {
    this.instrutor.setUrl(this.enderecoNovo);
  }
}

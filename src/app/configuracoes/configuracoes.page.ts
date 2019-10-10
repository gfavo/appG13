import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService } from "../nome-instrutor.service";

@Component({
  selector: "app-configuracoes",
  templateUrl: "./configuracoes.page.html",
  styleUrls: ["./configuracoes.page.scss"]
})
export class ConfiguracoesPage implements OnInit {
  margemPadrao = "35%";
  margemAtual;

  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {}
}

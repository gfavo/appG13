import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-configuracoes",
  templateUrl: "./configuracoes.page.html",
  styleUrls: ["./configuracoes.page.scss"]
})
export class ConfiguracoesPage implements OnInit {
  margemPadrao = "35%";
  margemAtual;

  idioma: string;

  constructor(private storage: Storage) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.storage.get("idioma").then(res =>{
    this.idioma = res;
    });
  }

  mudouIdioma(){
this.storage.set("idioma",this.idioma);
  }

}


import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { tecnicas } from "../aula/aula.page";
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsModaldetalhes } from './labelsModaldetalhes';

@Component({
  selector: "app-modaldetalhes",
  templateUrl: "./modaldetalhes.page.html",
  styleUrls: ["./modaldetalhes.page.scss"]
})
export class ModaldetalhesPage implements OnInit {
  tecnicas: tecnicas[];
  idiomaPadrao: string;
  data: string;
  constructor(
    private modalCtrl: ModalController,
    public instrutor: NomeInstrutorService,
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsModaldetalhes
  ) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.tecnicas = JSON.parse(this.instrutor.getDescricao());
    this.data = this.instrutor.getDatatime();
  }

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
}

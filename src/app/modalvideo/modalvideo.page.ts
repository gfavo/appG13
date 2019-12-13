import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsModalvideo } from './labelsModalvideo';

@Component({
  selector: "app-modalvideo",
  templateUrl: "./modalvideo.page.html",
  styleUrls: ["./modalvideo.page.scss"]
})
export class ModalvideoPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private instrutor: NomeInstrutorService,
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsModalvideo
  ) {}

  idvimeo: number;

  senhavimeo: string;

  idiomaPadrao: string;

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

    this.idvimeo = this.instrutor.getIdVimeo();
    this.senhavimeo = this.instrutor.getSenhaVimeo();

    (<HTMLIFrameElement>document.getElementById("player")).src =
      "https://player.vimeo.com/video/" + this.idvimeo;
  }

  dismiss() {
    this.modalController.dismiss();
  }
}

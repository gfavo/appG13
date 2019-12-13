import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { ModalController, IonRippleEffect, AlertController } from "@ionic/angular";
import { ModalvideoPage } from "../modalvideo/modalvideo.page";
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsModaltecnicasdodia } from './labelsModaltecnicasdodia';

@Component({
  selector: "app-modaltecnicasdodia",
  templateUrl: "./modaltecnicasdodia.page.html",
  styleUrls: ["./modaltecnicasdodia.page.scss"]
})
export class ModaltecnicasdodiaPage implements OnInit {
  tecnicasDia;
  diames;
  idiomaPadrao: string;

  constructor(
    private instrutor: NomeInstrutorService,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsModaltecnicasdodia
  ) {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalvideoPage
    });
    return await modal.present();
  }

  async alertaNaoPago() {
    const alert = await this.alertController.create({
      header: "",
      message: this.instrutor.getMensagem(this.idiomaPadrao),
      buttons: [{text: this.labels.acessar[this.idiomaPadrao], handler: ()=>{window.open("https://www.g13bjj.com.br/ct/?adesao")}},"FECHAR"]
    });
    await alert.present();
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

    this.tecnicasDia = this.instrutor.getTecnicasDia();
    this.diames = this.instrutor.getDiaMes();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  abreVideo(numeroTecnica: number, senhavimeo: string) {
    if(this.instrutor.getRole() != "ALUNO")
    {
    this.instrutor.setIdVimeo(numeroTecnica);
    this.instrutor.setSenhaVimeo(senhavimeo);

    this.presentModal();
    }
    else
    {
this.alertaNaoPago();
    }
  }
}

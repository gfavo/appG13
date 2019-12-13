import { Component, OnInit } from "@angular/core";

import { NomeInstrutorService } from "../nome-instrutor.service";

import {
  tecnicas,
  aula_nova,
  conjunto_aula_exemplo,
  aula_exemplo
} from "../aula/aula.page";
import { Router } from "@angular/router";
import {
  AlertController,
  ModalController,
  LoadingController
} from "@ionic/angular";
import {
  ModaltecnicasPage,
  tecnicaId
} from "../modaltecnicas/modaltecnicas.page";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { aula } from "../manutencao-aula/manutencao-aula.page";
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsNovaAula } from './labelsNovaAula';

@Component({
  selector: "app-nova-aula",
  templateUrl: "./nova-aula.page.html",
  styleUrls: ["./nova-aula.page.scss"]
})
export class NovaAulaPage implements OnInit {
  data = new Date();
  _data: string;

  aula: conjunto_aula_exemplo;

  descricao_aula: string;

  aula_escolhida: string;

  aula_mostrada: aula_exemplo;

  descricaoPadrao: string;

  aulaRegistro: aula;

  temAdicionais: boolean = false;

  idiomaPadrao: string;

  headers = new HttpHeaders({
    "x-version": "1.1.0",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  constructor(
    private load: LoadingController,
    private http: HttpClient,
    private modalController: ModalController,
    public instrutor: NomeInstrutorService,
    private router: Router,
    private alertController: AlertController,
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsNovaAula
  ) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModaltecnicasPage
    });
    return await modal.present();
  }

  async mensagem(header, texto) {
    const alert = await this.alertController.create({
      header: header,
      message: texto,
      buttons: ["OK"]
    });
    await alert.present();
  }

  async aulacriada() {
    const registra = await this.alertController.create({
      header: this.labels.aulaCriadaHeader[this.idiomaPadrao],
      message: this.labels.aulaCriadaMessage[this.idiomaPadrao],
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.router.navigateByUrl("/aula");
          }
        }
      ]
    });
    await registra.present();
  }

  async alertaDeErro() {
    const alert = await this.alertController.create({
      header: this.labels.alertaDeErroHeader[this.idiomaPadrao],
      message: this.labels.alertaDeErroMessage[this.idiomaPadrao],
      buttons: ["OK"]
    });
    await alert.present();
  }

  async certeza() {
    const alert = await this.alertController.create({
      header: this.labels.certezaHeader[this.idiomaPadrao],
      message: this.labels.certezaMessage[this.idiomaPadrao],
      buttons: [
        {
          text: this.labels.certezaButtonSim[this.idiomaPadrao],
          handler: () => {
            //-------------------------------------------------------------------------------
            this.presentLoading();
            this.instrutor.setAulaAberta(true);
            this.http
              .post(
                this.instrutor.getUrl() + "/registrar.php",
                {
                  id: "",
                  descricao: this.instrutor.getDescricao(),
                  datetime: this.instrutor.getAula().datetime,
                  idaulaprogramada: this.instrutor.getIdPrograma(),
                  alunos: this.aulaRegistro.alunos,
                  idtecnicasavulsas: this.instrutor.getIdTecnicas()
                },
                { headers: this.headers }
              )
              .subscribe(data => {
                console.log(data);
                this.dismiss();
                this.aulaRegistro.id = (<aula>data).id;
                this.aulacriada();
                this.dismiss();
              });
            //-------------------------------------------------------------------------------
          }
        },
        { text: this.labels.certezaButtonNao[this.idiomaPadrao] }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.load.create({
      message: this.labels.aguarde[this.idiomaPadrao],
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async dismiss() {
    return await this.load.dismiss().then(() => console.log("dismissed"));
  }

  ngOnInit() {
    this.aula = this.instrutor.getAula();

    this.instrutor.setDatatime(this.aula.datetime);
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


    this.http
      .get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
      .subscribe(data => {
        this.dismiss();
        console.log(data);
        this.aulaRegistro = <aula>data;
      });
  }

  action() {
    this.aula_escolhida = (<HTMLIonSelectElement>(
      document.getElementById("_aulaProgramada")
    )).value;
    this.instrutor.setIdPrograma(
      this.aula.aulasProgramadas.find(x => x.titulo === this.aula_escolhida).id
    );
    this.aula_mostrada = this.aula.aulasProgramadas.find(
      x => x.titulo === this.aula_escolhida
    );

    this.instrutor.setAulaSelecionada(this.aula_mostrada);

    this.descricaoPadrao =
      this.aula_escolhida +
      " - " +
      this.instrutor.getNome() +
      " - " +
      this.aula.datetime;
  }

  continuar() {
    this.descricao_aula = (<HTMLIonTextareaElement>(
      document.getElementById("descricao")
    )).value;
    this.instrutor.setDescricao(this.descricao_aula);
    if (this.instrutor.getIdPrograma() != null && this.descricao_aula != "") {
      this.certeza();
      this.instrutor.setConteudoConcluir(this.aulaRegistro);
    } else {
      this.alertaDeErro();
    }
  }
  voltar() {
    this.instrutor.setIdPrograma(null);
    this.router.navigate(["/aula"]);
  }

  backPage() {
    this.router.navigateByUrl("/aula");
  }

  mostraModal() {
    if (this.aula_mostrada != null) {
      this.presentModal();
    } else {
      alert(this.labels.alertEscolha[this.idiomaPadrao]);
    }
  }
}

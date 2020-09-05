import { Component, OnInit } from "@angular/core";

import { NomeInstrutorService } from "../nome-instrutor.service";

import {
  tecnicas,
  aula_nova,
  conjunto_aula_exemplo,
  aula_exemplo,
} from "../aula/aula.page";
import { Router } from "@angular/router";
import {
  AlertController,
  ModalController,
  LoadingController,
} from "@ionic/angular";
import { ModaltecnicasPage } from "../modaltecnicas/modaltecnicas.page";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { aula } from "../manutencao-aula/manutencao-aula.page";
import { Storage } from "@ionic/storage";
import { Globalization } from "@ionic-native/globalization/ngx";
import { LabelsNovaAula } from "./labelsNovaAula";
import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/output_ast";
import { timeout, catchError } from "rxjs/operators/";

export class Tecnicas {
  id: number;
  nome: string;
  descricao: string;
  idvimeo: number;
  senhavimeo: number;
  incluir: boolean;
}

export class Aula {
  id: number;
  data: string;
  Categorias: Categorias[];
}

export class Categorias {
  nome: string;
  tecnicas: Tecnicas[];
}


class NomesRecebidos{
  FDP: string;
  FS: string;
  AP: string;
  AS: string;
}

@Component({
  selector: "app-nova-aula",
  templateUrl: "./nova-aula.page.html",
  styleUrls: ["./nova-aula.page.scss"],
})
export class NovaAulaPage implements OnInit {
  FDP: string = "FUNDAMENTAIS_DEFESA_PESSOAL";
  FS: string = "FUNDAMENTAIS_SOLO";
  AP: string = "AVANCADAS_PROJECAO";
  AS: string = "AVANCADAS_SOLO";

  tecnicas: tecnicas;

  data = new Date();
  _data: string;

  aula: Aula;

  descricao_aula: string;

  aulaRegistro: aula;

  temAdicionais: boolean = false;

  idiomaPadrao: string;

  idTecnicas: number[] = [];

  nomesRecebidos: NomesRecebidos;

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
      component: ModaltecnicasPage,
    });
    modal.onDidDismiss().then((x) => {
      this.instrutor.tecnicasFdp.forEach((categoria) => {
        categoria.tecnicas.forEach((tecnica) => {
          if (this.idTecnicas.find((x) => x === tecnica.id) == undefined)
            this.idTecnicas.push(tecnica.id);
        });
      });

      this.instrutor.tecnicasFs.forEach((categoria) => {
        categoria.tecnicas.forEach((tecnica) => {
          if (this.idTecnicas.find((x) => x === tecnica.id) == undefined)
            this.idTecnicas.push(tecnica.id);
        });
      });

      this.instrutor.tecnicasAp.forEach((categoria) => {
        categoria.tecnicas.forEach((tecnica) => {
          if (this.idTecnicas.find((x) => x === tecnica.id) == undefined)
            this.idTecnicas.push(tecnica.id);
        });
      });

      this.instrutor.tecnicasAs.forEach((categoria) => {
        categoria.tecnicas.forEach((tecnica) => {
          if (this.idTecnicas.find((x) => x === tecnica.id) == undefined)
            this.idTecnicas.push(tecnica.id);
        });

        console.log("O array que contém as tecnicas é:" + this.idTecnicas);
      });
    });
    return await modal.present();
  }

  async mensagem(header, texto) {
    const alert = await this.alertController.create({
      header: header,
      message: texto,
      buttons: ["OK"],
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
          handler: () => {},
        },
      ],
    });
    await registra.present();
  }

  async alertaDeErro() {
    const alert = await this.alertController.create({
      header: this.labels.alertaDeErroHeader[this.idiomaPadrao],
      message: this.labels.alertaDeErroMessage[this.idiomaPadrao],
      buttons: ["OK"],
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
            let podeCriar = false;
            let mensagem = "";
            if (this.temAlgumaCategoria(this.instrutor.tecnicasFdp))
              podeCriar = true;
           else if (this.temAlgumaCategoria(this.instrutor.tecnicasFs))
              podeCriar = true;
           else if (this.temAlgumaCategoria(this.instrutor.tecnicasAp))
              podeCriar = true;
           else if (this.temAlgumaCategoria(this.instrutor.tecnicasAs))
              podeCriar = true;
          else mensagem = "Você deve selecionar alguma tecnica antes de criar a aula!";
              




            if (
              (this.temAlgumaCategoria(this.instrutor.tecnicasFdp) &&
                !this.temAlgumaCategoria(this.instrutor.tecnicasFs)) ||
              (!this.temAlgumaCategoria(this.instrutor.tecnicasFdp) &&
                this.temAlgumaCategoria(this.instrutor.tecnicasFs))
            ){
            mensagem = "Pelo menos 1 técnica Fundamental Defesa Pessoal e 1 técnica Fundamental de Solo devem ser selecionadas.";
            podeCriar = false;
            }

            if (
              (this.temAlgumaCategoria(this.instrutor.tecnicasAp) &&
                !this.temAlgumaCategoria(this.instrutor.tecnicasAs)) ||
              (!this.temAlgumaCategoria(this.instrutor.tecnicasAp) &&
                this.temAlgumaCategoria(this.instrutor.tecnicasAs))
            ){
            mensagem += "Pelo menos 1 técnica Avançada de Projeção e 1 técnica Avançada de Solo devem ser selecionadas.";
            podeCriar = false;
            }

            if(podeCriar){

            this.instrutor.tecnicasFdp = [];

            this.instrutor.tecnicasFs = [];

            this.instrutor.tecnicasAp = [];

            this.instrutor.tecnicasAs = [];

            this.descricao_aula = "";

            //-------------------------------------------------------------------------------
            this.presentLoading();
            this.instrutor.setAulaAberta(true);
            this.http
              .post(
                this.instrutor.getUrl() + "/registrar.php",
                {
                  id: "",
                  datetime: this._data,
                  alunos: [],
                  idtecnicas: this.idTecnicas,
                  descricao: this.descricao_aula,
                },
                {
                  headers: new HttpHeaders({
                    "x-version": "1.1.1",
                    "x-auth": this.instrutor.getToken(),
                    "Cache-Control":
                      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
                    Pragma: "no-cache",
                    Expires: "0",
                  }),
                }
              )
              .subscribe((data) => {
                console.log(data);
                this.aulacriada();
                this.router.navigate(["/aula"]);
              });
            }else{
              this.mensagem("Aviso",mensagem);
            }
            //-------------------------------------------------------------------------------
          },
         },
        { text: this.labels.certezaButtonNao[this.idiomaPadrao] },
      ],
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.load.create({
      message: this.labels.aguarde[this.idiomaPadrao],
      duration: 1000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async dismiss() {
    setTimeout(() => {
      this.load.dismiss(null, undefined);
    }, 200);
    //return await this.load.dismiss().then(() => console.log("dismissed"));
  }

  ngOnInit() {
    //this.aula = this.instrutor.getAula();
    // this.instrutor.setDatatime(this.aula.datetime);
  }

  checkIdioma() {
    this.storage.get("idioma").then((res) => {
      this.idiomaPadrao = res;
      if (res == "" || res == null) {
        this.globalization.getPreferredLanguage().then((res) => {
          if (res.value.includes("pt")) {
            this.storage.set("idioma", "ptbr");
            this.idiomaPadrao = "ptbr";
          } else if (res.value.includes("en")) {
            this.storage.set("idioma", "en");
            this.idiomaPadrao = "en";
          }
        });
      }
    });
  }

  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  formatZero(numero: string) {
    if (parseInt(numero) < 10) {
      return "0" + numero;
    }
    return numero;
  }

  ionViewWillEnter() {

    this.http
    .get(
      this.instrutor.getUrl() + "/entregaTecnicas.php",
      {
        headers: new HttpHeaders({
          "x-version": "1.1.1",
          "x-auth": this.instrutor.getToken(),
          "Cache-Control":
            "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
          Pragma: "no-cache",
          Expires: "0",
        }),
      }
    ).subscribe(data=> this.nomesRecebidos = (<NomesRecebidos>data));




    this.data = new Date();
    this._data =
      this.formatDate(this.data.toDateString()) +
      " " +
      this.data.getHours().toString() +
      ":" +
      this.formatZero(this.data.getMinutes().toString()) +
      ":" +
      this.formatZero(this.data.getSeconds().toString());

    this.checkIdioma();
  }

  /* continuar() {
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
  }*/
  voltar() {
    this.instrutor.setIdPrograma(null);
    this.router.navigate(["/aula"]);
  }

  backPage() {
    this.router.navigateByUrl("/aula");
  }

  mostraModal(categoria: string, categoriaSigla: string) {
    this.presentLoading();
    this.http
      .post(
        this.instrutor.getUrl() + "/get_tecnicas.php",
        { categoria: categoria },
        {
          headers: new HttpHeaders({
            "x-version": "1.1.1",
            "x-auth": this.instrutor.getToken(),
            "Cache-Control":
              "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
            Pragma: "no-cache",
            Expires: "0",
          }),
        }
      )
      .pipe(
        timeout(2000),
        catchError((e) => this.mensagem("Erro", e))
      )
      .subscribe((data) => {
        this.instrutor.settecnicasCriar(<Categorias[]>data);
        this.presentModal();
      });

    this.instrutor.atualCategoria = categoriaSigla;
  }

  categoriaTem(tecnicas: Tecnicas[]): boolean {
    let retorno = false;

    if (tecnicas.length > 0) {
      retorno = true;
    }

    return retorno;
  }

  temAlgumaCategoria(tecnicas: Categorias[]): boolean {
    let retorno = false;
    tecnicas.forEach((categoria) => {
      if (this.categoriaTem(categoria.tecnicas)) {
        retorno = true;
      }
    });

    return retorno;
  }
}

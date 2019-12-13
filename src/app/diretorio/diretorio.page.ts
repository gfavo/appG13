import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { ModalvideoPage } from "../modalvideo/modalvideo.page";
import { ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsDiretorio } from './labelsDiretorio';


export class tecnicasDir {
  idvimeo: number;
  nome: string;
  senhavimeo: string;
  tecnicaextra: number;
  descricao: string;
  avancada: boolean;
}

export class conteudoGetDiretorio {
  categoria: string;
  tecnicas: tecnicasDir[];
  expandida: boolean;
}

@Component({
  selector: "app-diretorio",
  templateUrl: "./diretorio.page.html",
  styleUrls: ["./diretorio.page.scss"]
})
export class DiretorioPage implements OnInit {
  headers = new HttpHeaders({
    "x-version": "1.1.0",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  subscription: any;

  ConteudoDiretorio: conteudoGetDiretorio[];

  podeExpandir: boolean = false;

  tecnicaExpandida: conteudoGetDiretorio;

idiomaPadrao: string;

  constructor(
    private modalController: ModalController,
    private httpClient: HttpClient,
    private instrutor: NomeInstrutorService,
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsDiretorio
  ) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalvideoPage
    });
    return await modal.present();
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

    this.subscription = this.httpClient
      .get(this.instrutor.getUrl() + "/diretorio.php?idioma="+this.instrutor.idiomaPadrao, {
        responseType: "json",
        headers: this.headers
      })
      .subscribe(data => {
        this.ConteudoDiretorio = <conteudoGetDiretorio[]>data;

        this.ConteudoDiretorio.forEach(element => {
          element.expandida = false;
        });

        console.log(this.ConteudoDiretorio);
        console.log(data);
      });
  }
  ngOnInit() {}

  openCategoria(x: string) {
    this.ConteudoDiretorio.forEach(element => {
      if (element.expandida == true && element.categoria != x) {
        element.expandida = false;
      }
    });
    if (this.ConteudoDiretorio.find(y => y.categoria === x).expandida == true) {
      this.ConteudoDiretorio.find(y => y.categoria === x).expandida = false;
    } else if (
      this.ConteudoDiretorio.find(y => y.categoria === x).expandida == false
    ) {
      this.ConteudoDiretorio.find(y => y.categoria === x).expandida = true;
      this.tecnicaExpandida = this.ConteudoDiretorio.find(
        y => y.categoria === x
      );
    }
  }

  abreVideo(numeroTecnica: number, senhavimeo: string) {
  
    this.instrutor.setIdVimeo(numeroTecnica);
    this.instrutor.setSenhaVimeo(senhavimeo);

    this.presentModal();
    }
}

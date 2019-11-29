import { Component, OnInit, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { NomeInstrutorService } from "../nome-instrutor.service";
import { Router, NavigationEnd } from "@angular/router";

import { ActivatedRoute } from "@angular/router";
import {
  MenuController,
  LoadingController,
  ModalController,
  AlertController,
  Platform
} from "@ionic/angular";

import { tecnicasDir, conteudoGetDiretorio } from "../diretorio/diretorio.page";
import { ModalvideoPage } from "../modalvideo/modalvideo.page";

import { Storage } from "@ionic/storage";
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LabelsAula } from './labels';



class Alunos {
  id: string;
  nome: string;
  presenca: boolean;
  codigo: string;
}

class aula {
  datetime: string;
  id: string;
  alunos: Alunos[];
  tecnicasavulsas: number[];
}

export class aluno {
  id: number;
  nome: string;
}

export class aula_exemplo {
  id: string;
  titulo: string;
  tecnicas: tecnicas[];
}

export class conjunto_aula_exemplo {
  aberto: boolean;
  datetime: string;
  aulasProgramadas: aula_exemplo[];
  tecnicasAvulsas: tecnicas[];
}

export class Aula_aberta {
  datetime: string;
  aberto: boolean;
  tecnicas: tecnicas[];
  tecnicasAvulsas: tecnicas[];
}

export class tecnicas {
  id: number;
  nome: string;
  avancada: boolean;
}

export class aula_nova {
  datetime: string;
  aberto: boolean;
  tecnicas: tecnicas[];
  tecnicasAvulsas: tecnicas[];
}

class erro {
  error: error;
}

class error {
  error: string;
}

@Component({
  selector: "app-aula",
  templateUrl: "./aula.page.html",
  styleUrls: ["./aula.page.scss"]
})
export class AulaPage implements OnInit {
  id: number;

  subscription: any;

  tecnicasVimeo: tecnicasDir[];

  tecnicasVimeoAvancadas: tecnicasDir[];

  aulaVimeo: conteudoGetDiretorio;

  data: Date;

  headers = new HttpHeaders({
    "x-version": "1.0.9",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  aula_nova: conjunto_aula_exemplo;

  data_aula: string;

  aula_aberta: boolean;

  nome_instrutor: string;

  isloading: boolean = false;

  tecnicas: tecnicas[];

  aulaConcluir: aula;

  idaula: string;



  constructor(
    private modalController: ModalController,
    private load: LoadingController,
    private menu: MenuController,
    private httpClient: HttpClient,
    public instrutor: NomeInstrutorService,
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private storage: Storage,
    private platform: Platform,
    private statusBar: StatusBar,
    private labels: LabelsAula

  ) {}

  ionViewWillEnter() {



    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => {
        document.addEventListener('backbutton', function (event) {
          event.preventDefault();
          event.stopPropagation();
          console.log('hello');
        }, false);
      });
      this.statusBar.styleDefault();
    });

    this.presentLoading();
    this.httpClient
      .get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
      .subscribe(data => {
        this.dismiss();
        this.idaula = (<aula>data).id;
        console.log(data);
      });
      
    
    this.nome_instrutor = this.instrutor.getNome();
    this.subscription = this.httpClient
      .post(
        this.instrutor.getUrl() + "/aula.php",
        { "": "" },
        { responseType: "json", headers: this.headers, observe: "body" }
      )
      .subscribe(
        data => {
          console.log(data);

          this.data_aula = (<Aula_aberta>data).datetime;
          this.aula_aberta = (<Aula_aberta>data).aberto;
          this.aulaVimeo = (<conteudoGetDiretorio>data);
   
          this.tecnicasVimeo = [];
          this.tecnicasVimeoAvancadas = [];

     if(this.aulaVimeo.tecnicas!=undefined){   this.aulaVimeo.tecnicas.forEach(e =>{
            if(e.avancada==true)
            {
              this.tecnicasVimeoAvancadas.push(e);
            }else
            {
              this.tecnicasVimeo.push(e);
            }
          })
        }        

          this.instrutor.setAulaAberta(this.aula_aberta);

          this.dismiss();

          this.tecnicas = (<Aula_aberta>data).tecnicas;

          if ((<Aula_aberta>data).aberto == false) {
            this.aula_nova = <conjunto_aula_exemplo>data;
          } else {
            this.instrutor.setDatatime(this.data_aula);
            if (this.instrutor.getDescricao() == undefined)
              this.instrutor.setDescricao(
                JSON.stringify((<Aula_aberta>data).tecnicas)
              );
          }
        },
        error => {
          this.instrutor.error = (<erro>error).error.error;
          this.dismiss();
          this.router.navigate(["/error"]);
        }
      );
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalvideoPage
    });
    return await modal.present();
  }

  async msgconcluir() {
    const conclui = await this.alertController.create({
      header: "sucesso",
      message: "Concluido com Sucesso!",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.router.navigateByUrl("/aula");
          }
        }
      ]
    });
    await conclui.present();
  }

  async msgerroconcluir() {
    const concluierro = await this.alertController.create({
      header: "falhou",
      message: "Registre antes de concluir",
      buttons: [{ text: "OK" }]
    });
    await concluierro.present();
  }

  async presentLoading() {
    this.isloading = true;
    const loading = await this.load.create({
      message: "Aguarde por favor",
      duration: 2500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async dismiss() {
    this.isloading = false;
    return await this.load.dismiss().then(() => console.log("dismissed"));
  }

  ngOnInit() {}

  onClick() {
    console.log("CLICKOU");
    alert(this.data_aula + "e se está aberta: " + this.aula_aberta);
  }

  completarAula() {
    this.router.navigate(["/manutencao-aula"]);
  }

  concluir() {
    if (this.idaula != "") {
      this.presentLoading();
      this.httpClient
        .post(
          this.instrutor.getUrl() + "/concluir.php",
          { id: parseInt(this.idaula) },
          { observe: "response", headers: this.headers }
        )
        .subscribe(data => {
          console.log(data.status);
          this.instrutor.setAulaAberta(false);
        });

      this.instrutor.setDatatime(this.data_aula);
      this.subscription = this.httpClient
        .post(
          this.instrutor.getUrl() + "/aula.php",
          { "": "" },
          { responseType: "json", headers: this.headers }
        )
        .subscribe(data => {
          console.log(data);
          this.ionViewWillEnter();
        });

      var max;
      this.storage.get("qtdtecnicas").then(val => {
        max = val;
      });

      for (var i = 0; i < max; i++) {
        this.storage.remove("tecnica_adicional" + i);
      }
      this.storage.remove("qtdtecnicas");
      this.dismiss();
    } else {
      this.msgerroconcluir();
    }
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

  novaAula() {
    this.presentLoading();
    this.data = new Date();
    this.aula_nova.datetime =
      this.formatDate(this.data.toDateString()) +
      " " +
      this.data.getHours().toString() +
      ":" +
      this.formatZero(this.data.getMinutes().toString()) +
      ":" +
      this.formatZero(this.data.getSeconds().toString());
    this.instrutor.setAula(this.aula_nova);
    this.dismiss();
    this.router.navigate(["/nova-aula"]);
    
  }

  openMenu() {
    alert("aa");
    this.menu.enable(true, "first");
    this.menu.open("first");
  }

  backPage() {
    this.router.navigateByUrl("/aula");
  }

  abreVideo(numeroTecnica: number, senhavimeo: string) {
    this.instrutor.setIdVimeo(numeroTecnica);
    this.instrutor.setSenhaVimeo(senhavimeo);
    this.presentModal();
  }

  checkins() {
    this.router.navigateByUrl("/checkins");
  }

  checkAvancada(tecnicas: tecnicasDir[]): boolean
{
var temAvancada = false;
tecnicas.forEach(element =>{
  if(element.avancada)
  {
    temAvancada = true;
  }
})
return temAvancada;
}

}

import { Component, OnInit } from "@angular/core";

import { toSegments } from "@ionic/angular/dist/directives/navigation/stack-utils";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

import { NomeInstrutorService } from "../nome-instrutor.service";
import { async } from "@angular/core/testing";
import { Router } from "@angular/router";

import {
  AlertController,
  NavController,
  LoadingController
} from "@ionic/angular";
import { tecnicas } from "../aula/aula.page";
import { tecnicasDir, conteudoGetDiretorio } from "../diretorio/diretorio.page";

import { Storage } from "@ionic/storage";

import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsManutencaoAula } from './labelsManutencaoAula';

export class Alunos {
  id: string;
  nome: string;
  presenca: boolean;
  codigo: string;
}

export class aula {
  datetime: string;
  id: string;
  alunos: Alunos[];
  tecnicasavulsas: number[];
}

@Component({
  selector: "app-manutencao-aula",
  templateUrl: "./manutencao-aula.page.html",
  styleUrls: ["./manutencao-aula.page.scss"]
})
export class ManutencaoAulaPage implements OnInit {
  data: string;

  constructor(
    private load: LoadingController,
    private http: HttpClient,
    public instrutor: NomeInstrutorService,
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController,
    private globalization: Globalization,
    private storage: Storage,
    public labels: LabelsManutencaoAula
  ) {}
  headers = new HttpHeaders({
    "x-version": "1.1.1",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  nomeinstrutor: string;

  aula: aula;

  tecnicas: tecnicas[];

  alunos_original: Alunos[];

  search_aluno: any;

  mostraLista: boolean = true;

  isloading: boolean = false;

  itemsFiltrados: Alunos[];

  searchTerm: string;

  tecnicasMostrar: tecnicasDir[];

  temExtra: boolean;

  podepesquisar: boolean = false;

  mostrarBotoes: boolean = true;

  idiomaPadrao: string;

  async registrado() {
    const registra = await this.alertController.create({
      header: this.labels.sucessoRegistradoHeader[this.idiomaPadrao],
      message: this.labels.sucessoRegistradoMessage[this.idiomaPadrao],
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

  async sucessoReload() {
    const registra = await this.alertController.create({
      header: "",
      message: this.labels.sucessoReload[this.idiomaPadrao],
      buttons: [{ text: "OK" }]
    });
    await registra.present();
  }

  async reload() {
    const registra = await this.alertController.create({
      header: this.labels.requestReloadHeader[this.idiomaPadrao],
      message:
        this.labels.requestReloadMessage[this.idiomaPadrao],
      buttons: [
        {
          text: "OK",
          handler: () => {
            this._ionview();
          }
        },
        { text: this.labels.requestReloadText[this.idiomaPadrao] }
      ]
    });
    await registra.present();
  }

  async msgconcluir() {
    const conclui = await this.alertController.create({
      header: this.labels.concluidoComSucessoHeader[this.idiomaPadrao],
      message: this.labels.concluidoComSucessoMessage[this.idiomaPadrao],
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
      header: this.labels.erroAoConcluirHeader[this.idiomaPadrao],
      message: this.labels.erroAoConcluirMessage[this.idiomaPadrao],
      buttons: [{ text: "OK" }]
    });
    await concluierro.present();
  }

  async presentLoading() {
    this.isloading = true;
    const loading = await this.load.create({
      message: this.labels.loading[this.idiomaPadrao],
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async dismiss() {
    this.isloading = false;
    return await this.load.dismiss().then(() => console.log("dismissed"));
  }

  async alerta() {
    const alert = await this.alertController.create({
      header: this.labels.alertaAoVoltarHeader[this.idiomaPadrao],
      message: this.labels.alertaAoVoltarMessage[this.idiomaPadrao],
      buttons: [
        {
          text: this.labels.alertaAoVoltarButtonSim[this.idiomaPadrao],
          handler: () => {
            if (this.aula.id != null) {
              this.http
                .post(this.instrutor.getUrl() + "/registrar.php", this.aula, {
                  headers: this.headers
                })
                .subscribe(data => {
                  console.log(data);
                  this.registrado();
                  this.dismiss();
                });
            } else {
              this.instrutor.setAulaAberta(true);
              this.http
                .post(
                  this.instrutor.getUrl() + "/registrar.php",
                  {
                    id: "",
                    descricao: this.instrutor.getDescricao(),
                    datetime: this.instrutor.getAula().datetime,
                    idaulaprogramada: this.instrutor.getIdPrograma(),
                    alunos: this.aula.alunos,
                    idtecnicasavulsas: this.instrutor.getIdTecnicas()
                  },
                  { headers: this.headers }
                )
                .subscribe(data => {
                  console.log(data);
                  this.dismiss();
                  this.aula.id = (<aula>data).id;
                  this.registrado();
                });
            }
          }
        },
        {
          text: this.labels.alertaAoVoltarButtonNao[this.idiomaPadrao],
          handler: () => {
            this.router.navigateByUrl("/aula");
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.tecnicas = JSON.parse(this.instrutor.getDescricao());
    this.data = this.aula.datetime;
  }
  //aluno.nome.toUpperCase().includes(search_aluno.value.toUpperCase())

  
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

    window.addEventListener('keyboardWillShow', (event) => {
      this.mostrarBotoes = false;
      // Describe your logic which will be run each time when keyboard is about to be shown.
  });

  window.addEventListener('keyboardWillHide', () => {
    this.mostrarBotoes = true;
    // Describe your logic which will be run each time when keyboard is about to be closed.
});

(<HTMLIonButtonElement>document.getElementById('pesquisar')).disabled = !this.podepesquisar;

    this.search_aluno = document.getElementById("search_aluno");

    this.nomeinstrutor = this.instrutor.getNome();
    this.presentLoading();

    this.http
      .post(
        this.instrutor.getUrl() + "/aula.php?idioma="+this.idiomaPadrao,
        { "": "" },
        { responseType: "json", headers: this.headers }
      )
      .subscribe(data => {
        console.log(data);
        this.tecnicasMostrar = (<conteudoGetDiretorio>data).tecnicas;
        this.temExtra = this.checkTemExtra(this.tecnicasMostrar);
      });

    this.http
      .get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
      .subscribe(data => {
        this.dismiss();
        console.log(data);
        this.aula = <aula>data;
        this.mostraLista = true;

        this.itemsFiltrados = this.aula.alunos;
      });

    this.alunos_original = this.aula.alunos;
    this.dismiss();
  }

  onCheck(nome, presenca) {
    if (this.aula.alunos != this.alunos_original) {
      (<HTMLIonButtonElement>(
        document.getElementById("botao_registrar")
      )).disabled = false;
    }

    this.aula.alunos.find(x => (x.nome = nome)).presenca = presenca;
  }
  registrar() {
    this.presentLoading();

    if (this.aula.id != null) {
      this.http
        .post(this.instrutor.getUrl() + "/registrar.php", this.aula, {
          headers: this.headers
        })
        .subscribe(data => {
          console.log(data);
          this.registrado();
          this.dismiss();
        });
    } else {
      this.instrutor.setAulaAberta(true);
      this.http
        .post(
          this.instrutor.getUrl() + "/registrar.php",
          {
            id: "",
            descricao: this.instrutor.getDescricao(),
            datetime: this.instrutor.getAula().datetime,
            idaulaprogramada: this.instrutor.getIdPrograma(),
            alunos: this.aula.alunos,
            idtecnicasavulsas: this.instrutor.getIdTecnicas()
          },
          { headers: this.headers }
        )
        .subscribe(data => {
          console.log(data);
          this.dismiss();
          this.aula.id = (<aula>data).id;
          this.registrado();
        });
    }
    this.instrutor.setConteudoConcluir(this.aula);
  }
  concluir() {
    if (this.aula.id != null) {
      this.http
        .post(
          this.instrutor.getUrl() + "/concluir.php",
          { id: this.aula.id },
          { observe: "response", headers: this.headers }
        )
        .subscribe(data => console.log(data.status));
      this.instrutor.setAulaAberta(false);

      this.msgconcluir();
    } else {
      this.msgerroconcluir();
    }
  }
  backPage() {
    if (
      (<HTMLIonButtonElement>document.getElementById("botao_registrar"))
        .disabled == false
    ) {
      this.alerta();
    } else {
      this.router.navigateByUrl("/aula");
    }
  }

  refresh() {
    this.reload();
  }

  _ionview() {
    this.mostraLista = false;
    this.ionViewWillEnter();
    this.sucessoReload();
  }

  checkTemExtra(tecnicas: tecnicasDir[]): boolean {
    var tem = false;
    tecnicas.forEach(element => {
      if (element.tecnicaextra == 1) {
        tem = true;
      }
    });
    return tem;
  }
  
  filtra(){
    this.presentLoading();
    this.http
    .post(this.instrutor.getUrl() + "/alunos.php", {search: this.searchTerm} ,{ headers: this.headers })
    .subscribe(data => {
      this.dismiss();
      console.log(data);
      this.aula = <aula>data;
      this.mostraLista = true;

      this.dismiss();
    });
  }

 teste() {
   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
   //Add '${implements OnChanges}' to the class.
   if(this.searchTerm.length >= 3)
   {
    (<HTMLIonButtonElement>document.getElementById('pesquisar')).disabled = false;
   }
   else
   {
    (<HTMLIonButtonElement>document.getElementById('pesquisar')).disabled = true;
   }
 }
}

import { Component, OnInit } from '@angular/core';


import { toSegments } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { NomeInstrutorService } from "../nome-instrutor.service";
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';


import { AlertController, NavController } from '@ionic/angular';
import { tecnicas } from '../aula/aula.page';

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
}

@Component({
  selector: 'app-manutencao-aula',
  templateUrl: './manutencao-aula.page.html',
  styleUrls: ['./manutencao-aula.page.scss'],
})



export class ManutencaoAulaPage implements OnInit {
  data: string;



  constructor(private http: HttpClient, public instrutor: NomeInstrutorService, private router: Router, private alertController: AlertController, private navCtrl: NavController) {
    this.router.events.subscribe((ev) => {



    });
  }
  headers = new HttpHeaders({ "x-auth": this.instrutor.getToken(), 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0', 'Pragma': 'no-cache', 'Expires': '0' });


  nomeinstrutor: string;

  aula: aula;

  tecnicas: tecnicas[];

  alunos_original: Alunos[];

  search_aluno: any;

  mostraLista: boolean = true;


  async registrado() {
    const registra = await this.alertController.create({

      header: 'sucesso',
      message: 'Registrado com Sucesso!',
      buttons: [{ text: "OK", handler: () => { this.router.navigateByUrl("/aula"); } }]
    })
    await registra.present();
  }

  async sucessoReload() {
    const registra = await this.alertController.create({

      header: '',
      message: 'Página recarregada com sucesso',
      buttons: [{ text: "OK"}]
    })
    await registra.present();
  }

  async reload() {
    const registra = await this.alertController.create({

      header: 'Cuidado',
      message: 'Tem certeza que deseja recarregar a página? Perderá tudo não registrado.',
      buttons: [{ text: "OK", handler: () => { this._ionview(); } }, { text: "CANCELAR"}]
    })
    await registra.present();
  }



  async msgconcluir() {
    const conclui = await this.alertController.create({

      header: 'sucesso',
      message: 'Concluido com Sucesso!',
      buttons: [{ text: "OK", handler: () => { this.router.navigateByUrl("/aula"); } }]
    })
    await conclui.present();
  }

  async msgerroconcluir() {
    const concluierro = await this.alertController.create({

      header: 'falhou',
      message: 'Registre antes de concluir',
      buttons: [{ text: "OK" }]
    })
    await concluierro.present();
  }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Cuidado',
      message: 'Registrar antes de voltar?',
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.http.post(this.instrutor.getUrl() + "/registrar.php", this.aula, { headers: this.headers })
            .subscribe(data => {
              console.log(data)
              this.registrado();
            });
        }
      }, {
        text: 'NAO',
        handler: () => {
          this.router.navigateByUrl("/aula");
        }
      }]
    });
    await alert.present();
  }


  ngOnInit() {
    this.tecnicas = JSON.parse(this.instrutor.getDescricao());
    this.data = this.aula.datetime;
  }

  ionViewWillEnter() {
    this.search_aluno = document.getElementById("search_aluno");


    this.nomeinstrutor = this.instrutor.getNome();

    this.http.get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
      .subscribe(
        data => {

          console.log(data);
          this.aula = <aula>data;
          this.mostraLista = true;
        }
      );

    this.alunos_original = this.aula.alunos;
    
  }

  onCheck() {
    if (this.aula.alunos != this.alunos_original) {
      (<HTMLIonButtonElement>document.getElementById("botao_registrar")).disabled = false;
    }
  }
  registrar() {


    if (this.aula.id != null) {
      this.http.post(this.instrutor.getUrl() + "/registrar.php", this.aula, { headers: this.headers })
        .subscribe(data => {
          console.log(data)
          this.registrado();


        });
    }
    else {
      this.instrutor.setAulaAberta(true);
      this.http.post(this.instrutor.getUrl() + "/registrar.php", { "id": "", "descricao": this.instrutor.getDescricao(), "datetime": this.instrutor.getAula().datetime, "idaulaprogramada": this.instrutor.getIdPrograma(), "alunos": this.aula.alunos }, { headers: this.headers })
        .subscribe(data => {
          console.log(data)

          this.aula.id = (<aula>data).id;
          this.registrado();
        });
    }
  }
  concluir() {
    if (this.aula.id != null) {
      this.http.post(this.instrutor.getUrl() + "/concluir.php", { "id": this.aula.id }, { observe: "response", headers: this.headers })
        .subscribe(data => console.log(data.status));
      this.instrutor.setAulaAberta(false);

      this.msgconcluir();

    }
    else {
      this.msgerroconcluir();
    }
  }
  backPage() {
    if ((<HTMLIonButtonElement>document.getElementById("botao_registrar")).disabled == false) {
      this.alerta();
    }
    else {
      this.router.navigateByUrl("/aula");
    }
  }

 

  refresh() {
    this.reload();
  }

_ionview(){
this.mostraLista = false;
  this.ionViewWillEnter();
  this.sucessoReload();


}
}

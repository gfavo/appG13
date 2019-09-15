import { Component, OnInit } from '@angular/core';


import { toSegments } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { NomeInstrutorService } from "../nome-instrutor.service";
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';


import { AlertController, NavController, LoadingController } from '@ionic/angular';
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
  tecnicasavulsas: number[];
}

@Component({
  selector: 'app-manutencao-aula',
  templateUrl: './manutencao-aula.page.html',
  styleUrls: ['./manutencao-aula.page.scss'],
})



export class ManutencaoAulaPage implements OnInit {
  data: string;



  constructor(private load: LoadingController,private http: HttpClient, public instrutor: NomeInstrutorService, private router: Router, private alertController: AlertController, private navCtrl: NavController) {}
  headers = new HttpHeaders({ "x-auth": this.instrutor.getToken(), 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0', 'Pragma': 'no-cache', 'Expires': '0' });


  nomeinstrutor: string;

  aula: aula;

  tecnicas: tecnicas[];

  alunos_original: Alunos[];

  search_aluno: any;

  mostraLista: boolean = true;
 
  isloading:boolean = false;


  itemsFiltrados: Alunos[];

  searchTerm: string;

 

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

  async presentLoading() {
    this.isloading = true;
    const loading = await this.load.create({
      message: 'Aguarde por favor',
      duration: 5000
    });
    await loading.present();

   

    const { role, data } = await loading.onDidDismiss();

  
  }

  async dismiss() {
    this.isloading = false;
    return await this.load.dismiss().then(() => console.log('dismissed'));
  }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Cuidado',
      message: 'Registrar antes de voltar?',
      buttons: [{
        text: 'SIM',
        handler: () => {
          if (this.aula.id != null) {
            this.http.post(this.instrutor.getUrl() + "/registrar.php", this.aula, { headers: this.headers })
              .subscribe(data => {
                console.log(data)
                this.registrado();
                this.dismiss();
      
              });
          }
          else {
            this.instrutor.setAulaAberta(true);
            this.http.post(this.instrutor.getUrl() + "/registrar.php", { "id": "", "descricao": this.instrutor.getDescricao(), "datetime": this.instrutor.getAula().datetime, "idaulaprogramada": this.instrutor.getIdPrograma(), "alunos": this.aula.alunos , "idtecnicasavulsas": this.instrutor.getIdTecnicas()}, { headers: this.headers })
              .subscribe(data => {
                console.log(data)
                this.dismiss();
                this.aula.id = (<aula>data).id;
                this.registrado();
              });
          }
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

  filterItems(items,searchTerm) {
    return items.filter(item => {
      return item.nome.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1;
    });
  }
  //aluno.nome.toUpperCase().includes(search_aluno.value.toUpperCase())
  setFilteredItems() {
    this.itemsFiltrados = this.filterItems(this.aula.alunos,this.searchTerm);
  }
  

  ionViewWillEnter() {
    this.search_aluno = document.getElementById("search_aluno");


    this.nomeinstrutor = this.instrutor.getNome();
    this.presentLoading();
    this.http.get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
      .subscribe(
        data => {
          this.dismiss();
          console.log(data);
          this.aula = <aula>data;
          this.mostraLista = true;

this.itemsFiltrados = this.aula.alunos;

        }
      );
      
    this.alunos_original = this.aula.alunos;
    this.dismiss();


  
  }

  onCheck(nome,presenca) {
   this.tecnicas.forEach(element => {
console.log(JSON.stringify(element));
   }); 
    if (this.aula.alunos != this.alunos_original) {
      (<HTMLIonButtonElement>document.getElementById("botao_registrar")).disabled = false;
    }

this.aula.alunos.find(x => x.nome = nome).presenca = presenca;

  }
  registrar() {

    
this.presentLoading();

    if (this.aula.id != null) {
      this.http.post(this.instrutor.getUrl() + "/registrar.php", this.aula, { headers: this.headers })
        .subscribe(data => {
          console.log(data)
          this.registrado();
          this.dismiss();

        });
    }
    else {
      this.instrutor.setAulaAberta(true);
      this.http.post(this.instrutor.getUrl() + "/registrar.php", { "id": "", "descricao": this.instrutor.getDescricao(), "datetime": this.instrutor.getAula().datetime, "idaulaprogramada": this.instrutor.getIdPrograma(), "alunos": this.aula.alunos , "idtecnicasavulsas": this.instrutor.getIdTecnicas()}, { headers: this.headers })
        .subscribe(data => {
          console.log(data)
          this.dismiss();
          this.aula.id = (<aula>data).id;
          this.registrado();
        });
    }
    this.instrutor.setConteudoConcluir(this.aula);
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

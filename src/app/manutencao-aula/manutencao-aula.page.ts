import { Component, OnInit } from '@angular/core';


import { toSegments } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { of, fromEventPattern } from "rxjs";
import { Observable } from "rxjs";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { NomeInstrutorService } from "../nome-instrutor.service";
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';


import { AlertController } from '@ionic/angular';

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



  constructor(private http: HttpClient, private instrutor: NomeInstrutorService, private router: Router, private alertController: AlertController) {
    this.router.events.subscribe((ev) => {
      
    this.search_aluno = document.getElementById("search_aluno");


    this.nomeinstrutor = this.instrutor.getNome();

    this.http.get("https://www.g13bjj.com.br/ct/mobile/alunos.php", { headers: this.headers })
      .subscribe(
        data => {

          console.log(data);
          this.aula = <aula>data;

        }
      );

    this.alunos_original = this.aula.alunos;



     });
  }
  headers = new HttpHeaders({ "x-auth": this.instrutor.getToken() });

  nomeinstrutor: string;

  aula: aula;

  alunos_original: Alunos[];

  search_aluno: any;

  async registrado() {
    const registra = await this.alertController.create({

      header: 'sucesso',
      message: 'Registrado com Sucesso!',
      buttons: [{ text: "OK", handler: () => { this.router.navigateByUrl("/aula"); } }]
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
          this.http.post("https://www.g13bjj.com.br/ct/mobile/registrar.php", this.aula, { headers: this.headers })
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
  }


  onCheck() {
    if (this.aula.alunos != this.alunos_original) {
       (<HTMLIonButtonElement>document.getElementById("botao_registrar")).disabled = false;
    }
  }
  registrar() {
    this.instrutor.setAulaAberta(true);
    
    if (this.aula.id != null) {
      this.http.post("https://www.g13bjj.com.br/ct/mobile/registrar.php", this.aula, { headers: this.headers })
        .subscribe(data => {
          console.log(data)
          this.registrado();


        });
    }
    else
    {
      this.http.post("https://www.g13bjj.com.br/ct/mobile/registrar.php", {"id": "", "descricao": this.instrutor.getDescricao(),"datetime": this.instrutor.getAula().datetime,"idaulaprogramada": this.instrutor.getIdPrograma(),"alunos": this.aula.alunos}, { headers: this.headers })
      .subscribe(data => {
        console.log(data)
       
this.aula.id = (<aula>data).id;
        this.registrado();
      });
    }
  }
  concluir() {
    if (this.aula.id != null) {
      this.http.post("https://www.g13bjj.com.br/ct/mobile/concluir.php", { "id": this.aula.id }, { observe: "response", headers: this.headers })
        .subscribe(data => console.log(data.status));
        this.instrutor.setAulaAberta(false);
    this.msgconcluir();
    
    }
   else
    {
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
}

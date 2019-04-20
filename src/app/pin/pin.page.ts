import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NomeInstrutorService } from '../nome-instrutor.service';

import { Alunos, aula } from '../manutencao-aula/manutencao-aula.page';
import { AlertController } from '@ionic/angular';



import { ModalController } from '@ionic/angular';
import { ModaldetalhesPage } from '../modaldetalhes/modaldetalhes.page';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.page.html',
  styleUrls: ['./pin.page.scss'],
})
export class PinPage implements OnInit {

  codigo: string = "";

  headers = new HttpHeaders({ "x-auth": this.instrutor.getToken() });

  aula: aula;

limpa_codigo()
{
  (<HTMLIonInputElement>document.getElementById("pincode")).value = "";
  this.codigo = "";
}

async presentModal() {
  const modal = await this.modalController.create({
    component: ModaldetalhesPage,
  });
  return await modal.present();
}

mostraDetalhes()
{
  this.presentModal();
}

  async confirma_aluno(nome: string) {
    const registra = await this.alertController.create({

      header: 'Confirma',
      message: 'Confirmar presença para:  ' + nome.bold() + " ?",
      buttons: [


        {
          text: "Sim", handler: () => {
            (this.aula.alunos.find(x => x.codigo === this.codigo)).presenca = true;

            this.http.post("https://www.g13bjj.com.br/ct/mobile/registrar.php", this.aula, { headers: this.headers })
              .subscribe(res => {
                console.log(res)
                this.aula.id = (<aula>res).id;
              });
             this.limpa_codigo();
          }
        },

        { text: "Não", handler: ()  => {this.limpa_codigo()} }
      ]
    })
    await registra.present();
  }

  async simple_alert(message: string,act: boolean)
  {
const presente = await this.alertController.create({
header: 'Note',
message: message,
buttons: [{text: 'OK',handler: () => {if (act){this.limpa_codigo()}}}]
})
await presente.present();
  }


  async erroconcluir()
  {
const presente = await this.alertController.create({
header: 'Note',
message: "Você deve primeiro registrar uma presença antes de concluir a aula",
buttons: ['OK']
})
await presente.present();
  }

  async sucessoconcluir()
  {
const presente = await this.alertController.create({
header: 'Note',
message: "A aula foi concluida com sucesso!",
buttons: [{text: "Ok",handler: () => {this.router.navigate(['/aula'])}}]
})
await presente.present();
  }


  async aluno_ja_presente(nome: string)
  {
const presente = await this.alertController.create({
header: 'Note',
message: "O aluno " + nome.bold() + " já está com presença",
buttons: [{text: 'OK',handler: () => {this.limpa_codigo()}}]
})
await presente.present();
  }

  async encerrrar()
  {
const presente = await this.alertController.create({
header: 'Note',
message: "Deseja concluir?",
buttons: [{text: "Não"},{text: "Sim",handler: () => {
  
if (this.aula.id != null)
{
  this.http.post("https://www.g13bjj.com.br/ct/mobile/concluir.php", { "id": this.aula.id }, { observe: "response", headers: this.headers })
.subscribe(data => console.log(data.status));
this.instrutor.setAulaAberta(false);
this.sucessoconcluir();
}
else{
this.erroconcluir();
}
}}]



})

await presente.present();
  }

  constructor(public modalController: ModalController,private alertController: AlertController, private router: Router, private instrutor: NomeInstrutorService, private http: HttpClient) {
    this.router.events.subscribe((ev) => {




      this.http.get("https://www.g13bjj.com.br/ct/mobile/alunos.php", { headers: this.headers })
        .subscribe(
          data => {
            console.log(data);
            this.aula = <aula>data;

          });








    });
  }

  ngOnInit() {
alert(this.instrutor.getDatatime());
  }


  handleInput(number) {


    if (number == "clear") {
      (<HTMLIonInputElement>document.getElementById("pincode")).value = "";
      this.codigo = "";
    }
    else {
      if ((<HTMLIonInputElement>document.getElementById("pincode")).value.length < 5) {
        this.codigo += number;
        console.log(this.codigo);
        (<HTMLIonInputElement>document.getElementById("pincode")).value += number;
      }
    }
  }

  mostrarSenha() {
    if ((<HTMLIonInputElement>document.getElementById("pincode")).type == "password") {
      (<HTMLIonButtonElement>document.getElementById("mostrar")).fill = "solid";
      (<HTMLIonInputElement>document.getElementById("pincode")).type = "text";
    }
    else {
      (<HTMLIonButtonElement>document.getElementById("mostrar")).fill = "outline";
      (<HTMLIonInputElement>document.getElementById("pincode")).type = "password";
    }
  }


  okAluno() {
    this.instrutor.setAulaAberta(true);
    if (this.aula.id == null) {
      this.http.post("https://www.g13bjj.com.br/ct/mobile/registrar.php", { "id": "", "descricao": this.instrutor.getDescricao(), "datetime": this.instrutor.getAula().datetime, "idaulaprogramada": this.instrutor.getIdPrograma(), "alunos": this.aula.alunos }, { headers: this.headers })
        .subscribe(res => {
          console.log(res)
          this.aula.id = (<aula>res).id;
        });
    }

    if (this.codigo.length == 5) {
      if (this.aula.alunos.find(x => x.codigo === this.codigo) != undefined) {
        if (this.aula.alunos.find(x => x.codigo === this.codigo).presenca == false) {
          this.confirma_aluno(this.aula.alunos.find(x => x.codigo === this.codigo).nome);
        }
        else {
          this.aluno_ja_presente(this.aula.alunos.find(x => x.codigo === this.codigo).nome);
        }
      }
      else{
        this.simple_alert("Esse aluno não existe na sua grade!",true);
      }
    }
    else {
      this.simple_alert("Favor digitar o codigo completo!",false);
    }
  }

encerra()
{
  this.instrutor.setAulaAberta(false);
this.encerrrar();
}

}
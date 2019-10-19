import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { NomeInstrutorService } from "../nome-instrutor.service";

import { Alunos, aula } from "../manutencao-aula/manutencao-aula.page";
import { AlertController } from "@ionic/angular";

import { ModalController } from "@ionic/angular";
import { ModaldetalhesPage } from "../modaldetalhes/modaldetalhes.page";

@Component({
  selector: "app-pin",
  templateUrl: "./pin.page.html",
  styleUrls: ["./pin.page.scss"]
})
export class PinPage implements OnInit {
  codigo: string = "";

  headers = new HttpHeaders({
    "x-version": "1.0.7",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  aula: aula;

  limpa_codigo() {
    (<HTMLIonInputElement>document.getElementById("pincode")).value = "";
    this.codigo = "";
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModaldetalhesPage
    });
    return await modal.present();
  }

  mostraDetalhes() {
    this.presentModal();
  }

  async confirma_aluno(nome: string) {
    const registra = await this.alertController.create({
      header: "Confirma",
      message: "Confirmar presença para:  " + nome.bold() + " ?",
      buttons: [
        {
          text: "Sim",
          handler: () => {
            this.achaAluno(this.codigo, this.aula.alunos).presenca = true;

            this.http
              .post(this.instrutor.getUrl() + "/registrar.php", this.aula, {
                headers: this.headers
              })
              .subscribe(res => {
                console.log(res);
                this.aula.id = (<aula>res).id;
              });
            this.limpa_codigo();
          }
        },

        {
          text: "Não",
          handler: () => {
            this.limpa_codigo();
          }
        }
      ]
    });
    await registra.present();
  }

  async simple_alert(message: string, act: boolean) {
    const presente = await this.alertController.create({
      header: "Note",
      message: message,
      buttons: [
        {
          text: "OK",
          handler: () => {
            if (act) {
              this.limpa_codigo();
            }
          }
        }
      ]
    });
    await presente.present();
  }

  async erroconcluir() {
    const presente = await this.alertController.create({
      header: "Note",
      message:
        "Você deve primeiro registrar uma presença antes de concluir a aula",
      buttons: ["OK"]
    });
    await presente.present();
  }

  async sucessoconcluir() {
    const presente = await this.alertController.create({
      header: "Note",
      message: "A aula foi concluida com sucesso!",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.router.navigate(["/aula"]);
          }
        }
      ]
    });
    await presente.present();
  }

  async aluno_ja_presente(nome: string) {
    const presente = await this.alertController.create({
      header: "Note",
      message: "O aluno " + nome.bold() + " já está com presença",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.limpa_codigo();
          }
        }
      ]
    });
    await presente.present();
  }

  async encerrrar() {
    const presente = await this.alertController.create({
      header: "Note",
      message: "Deseja concluir?",
      buttons: [
        { text: "Não" },
        {
          text: "Sim",
          handler: () => {
            if (this.aula.id != null) {
              this.http
                .post(
                  this.instrutor.getUrl() + "/concluir.php",
                  {
                    id: this.aula.id,
                    tecnicasavulsas: this.instrutor.getIdTecnicas()
                  },
                  { observe: "response", headers: this.headers }
                )
                .subscribe(data => console.log(data.status));
              this.instrutor.setAulaAberta(false);
              this.sucessoconcluir();
            } else {
              this.erroconcluir();
            }
          }
        }
      ]
    });

    await presente.present();
  }

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private router: Router,
    private instrutor: NomeInstrutorService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.http
      .get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
      .subscribe(data => {
        console.log(data);
        this.aula = <aula>data;
      });
  }

  handleInput(number) {
    if (number == "clear") {
      (<HTMLIonInputElement>document.getElementById("pincode")).value = "";
      this.codigo = "";
    } else {
      if (
        (<HTMLIonInputElement>document.getElementById("pincode")).value.length <
        5
      ) {
        this.codigo += number;
        console.log(this.codigo);
        (<HTMLIonInputElement>(
          document.getElementById("pincode")
        )).value += number;
      }
    }
  }

  mostrarSenha() {
    if (
      (<HTMLIonInputElement>document.getElementById("pincode")).type ==
      "password"
    ) {
      (<HTMLIonButtonElement>document.getElementById("mostrar")).fill = "solid";
      (<HTMLIonInputElement>document.getElementById("pincode")).type = "text";
    } else {
      (<HTMLIonButtonElement>document.getElementById("mostrar")).fill =
        "outline";
      (<HTMLIonInputElement>document.getElementById("pincode")).type =
        "password";
    }
  }

  okAluno() {
    this.instrutor.setAulaAberta(true);
    if (this.aula.id == null) {
      this.http
        .post(
          this.instrutor.getUrl() + "/registrar.php",
          {
            id: "",
            descricao: this.instrutor.getDescricao(),
            datetime: this.instrutor.getAula().datetime,
            idaulaprogramada: this.instrutor.getIdPrograma(),
            alunos: this.aula.alunos
          },
          { headers: this.headers }
        )
        .subscribe(res => {
          console.log(res);
          this.aula.id = (<aula>res).id;
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
            idtecnicasavulsas: this.instrutor.getIdTecnicas(),
            alunos: this.aula.alunos
          },
          { headers: this.headers }
        )
        .subscribe(data => {
          console.log(data);
          this.aula.id = (<aula>data).id;
        });
    }

    if (this.codigo.length == 5) {
      if (this.procurarAluno(this.codigo, this.aula.alunos) == true) {
        if (this.achaAluno(this.codigo, this.aula.alunos).presenca == false) {
          this.confirma_aluno(
            this.achaAluno(this.codigo, this.aula.alunos).nome
          );
        } else {
          this.aluno_ja_presente(
            this.achaAluno(this.codigo, this.aula.alunos).nome
          );
        }
      } else {
        console.log("indefinido" + this.codigo + this.aula.alunos[0].nome);
        this.simple_alert("Esse aluno não existe na sua grade!", true);
      }
    } else {
      this.simple_alert("Favor digitar o codigo completo!", false);
    }
  }

  encerra() {
    this.instrutor.setAulaAberta(false);
    this.encerrrar();
  }

  procurarAluno(codigo: string, alunos: Alunos[]): boolean {
    var achou = false;
    var i = 0;
    for (i = 0; i < alunos.length; i++) {
      if (codigo == alunos[i].codigo) {
        achou = true;
      }
    }

    if (achou == true) {
      return true;
    } else {
      return false;
    }
  }

  achaAluno(codigo: string, alunos: Alunos[]): Alunos {
    var i = 0;
    for (i = 0; i < alunos.length; i++) {
      if (codigo == alunos[i].codigo) {
        return alunos[i];
      }
    }
  }

  backPage() {
    this.router.navigateByUrl("/aula");
  }
}

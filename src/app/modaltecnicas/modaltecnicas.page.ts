import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  LoadingController,
  AlertController
} from "@ionic/angular";
import { NomeInstrutorService } from "../nome-instrutor.service";
import {
  conjunto_aula_exemplo,
  tecnicas,
  aula_exemplo
} from "../aula/aula.page";
import { Storage } from "@ionic/storage";
import { Globalization } from "@ionic-native/globalization/ngx";
import { LabelsModaltecnicas } from "./labelsModaltecnicas";
import { Categorias, Tecnicas } from "../nova-aula/nova-aula.page";
import { forEach } from "@angular/router/src/utils/collection";
import { runInThisContext } from "vm";

 @Component({
  selector: "app-modaltecnicas",
  templateUrl: "./modaltecnicas.page.html",
  styleUrls: ["./modaltecnicas.page.scss"]
})
export class ModaltecnicasPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private instrutor: NomeInstrutorService,
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsModaltecnicas,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {}

  isLoading: boolean;

  async mensagem(mensagem) {
    const alert = await this.alertController.create({
      message: mensagem,
      buttons: ["OK"]
    });
    await alert.present();
  }

  
  
   presentLoading() {
     this.loadingController.create({
      message: 'Please wait...',
      duration: 5000
    }).then(loading => {loading.present()

    loading.onDidDismiss().then(() => console.log('Loading dismissed!'));
    
  });
  }


  tecnicas: Categorias[] = [];

  idiomaPadrao: string;

  teste: string = "aa";

  tem: boolean;

  ngOnInit() {}

  sortArray() {
    this.tecnicas.forEach(categoria => {
      categoria.tecnicas.sort((x, y) => Number(y.incluir) - Number(x.incluir));
    });
    console.log(this.tecnicas);
  }

  insereTecnicas(){
    switch (this.instrutor.atualCategoria) {
      case "FDP":
        this.instrutor.tecnicasFdp.forEach(categoria => {
          categoria.tecnicas = [];

          this.tecnicas
            .find(x => x.nome === categoria.nome)
            .tecnicas.forEach(tecnicaLocal => {
              if (tecnicaLocal.incluir)
                this.instrutor.tecnicasFdp
                  .find(x => x.nome === categoria.nome)
                  .tecnicas.push(tecnicaLocal);
            });
        });
      
        break;
      case "FS":
          this.instrutor.tecnicasFs.forEach(categoria => {
            categoria.tecnicas = [];
  
            this.tecnicas
              .find(x => x.nome === categoria.nome)
              .tecnicas.forEach(tecnicaLocal => {
                if (tecnicaLocal.incluir)
                  this.instrutor.tecnicasFs
                    .find(x => x.nome === categoria.nome)
                    .tecnicas.push(tecnicaLocal);
              });
          });
        break;
      case "AP":
          this.instrutor.tecnicasAp.forEach(categoria => {
            categoria.tecnicas = [];
  
            this.tecnicas
              .find(x => x.nome === categoria.nome)
              .tecnicas.forEach(tecnicaLocal => {
                if (tecnicaLocal.incluir)
                  this.instrutor.tecnicasAp
                    .find(x => x.nome === categoria.nome)
                    .tecnicas.push(tecnicaLocal);
              });
          });
        break;
      case "AS":
          this.instrutor.tecnicasAs.forEach(categoria => {
            categoria.tecnicas = [];
  
            this.tecnicas
              .find(x => x.nome === categoria.nome)
              .tecnicas.forEach(tecnicaLocal => {
                if (tecnicaLocal.incluir)
                  this.instrutor.tecnicasAs
                    .find(x => x.nome === categoria.nome)
                    .tecnicas.push(tecnicaLocal);
              });
          });
        break;
    }
  }

  ionViewWillEnter() {
   

   

    (<Categorias[]>this.tecnicas) = this.instrutor.gettecnicasCriar();

    this.tecnicas.forEach(categoria =>
      categoria.tecnicas.forEach(x => (x.incluir = false))
    );

   

    switch (this.instrutor.atualCategoria) {
      case "FDP":
        if (this.instrutor.tecnicasFdp.length == 0) {
          this.tecnicas.forEach(categoria => {
            this.instrutor.tecnicasFdp.push({
              nome: categoria.nome,
              tecnicas: []
            });
            console.log(this.instrutor.tecnicasFdp);
          });
        }
        this.tecnicas.forEach(categoria => {
          this.instrutor.tecnicasFdp
            .find(x => x.nome === categoria.nome)
            .tecnicas.forEach(tecnicaRemota => {
              categoria.tecnicas.find(
                x => x.nome === tecnicaRemota.nome
              ).incluir = true;
            });
        });

        break;
      case "FS":
        if (this.instrutor.tecnicasFs.length == 0) {
          this.tecnicas.forEach(categoria => {
            this.instrutor.tecnicasFs.push({
              nome: categoria.nome,
              tecnicas: []
            });
            console.log(this.instrutor.tecnicasFs);
          });
        }
        this.tecnicas.forEach(categoria => {
          this.instrutor.tecnicasFs
            .find(x => x.nome === categoria.nome)
            .tecnicas.forEach(tecnicaRemota => {
              categoria.tecnicas.find(
                x => x.nome === tecnicaRemota.nome
              ).incluir = true;
            });
        });
        break;
      case "AP":
        if (this.instrutor.tecnicasAp.length == 0) {
          this.tecnicas.forEach(categoria => {
            this.instrutor.tecnicasAp.push({
              nome: categoria.nome,
              tecnicas: []
            });
            console.log(this.instrutor.tecnicasAp);
          });
        }
        this.tecnicas.forEach(categoria => {
          this.instrutor.tecnicasAp
            .find(x => x.nome === categoria.nome)
            .tecnicas.forEach(tecnicaRemota => {
              categoria.tecnicas.find(
                x => x.nome === tecnicaRemota.nome
              ).incluir = true;
            });
        });
        break;
      case "AS":
        if (this.instrutor.tecnicasAs.length == 0) {
          this.tecnicas.forEach(categoria => {
            this.instrutor.tecnicasAs.push({
              nome: categoria.nome,
              tecnicas: []
            });
            console.log(this.instrutor.tecnicasAs);
          });
        }
        this.tecnicas.forEach(categoria => {
          this.instrutor.tecnicasAs
            .find(x => x.nome === categoria.nome)
            .tecnicas.forEach(tecnicaRemota => {
              categoria.tecnicas.find(
                x => x.nome === tecnicaRemota.nome
              ).incluir = true;
            });
        });
        break;
    }

    this.sortArray();
  }

  dismiss() {
    this.modalCtrl.dismiss(null, undefined);
  }

  temTecnicas(tecnicaAvulsa: tecnicas, tecnicas: tecnicas[]): boolean {
    tecnicas.forEach(element => {
      if (element.nome == tecnicaAvulsa.nome) {
        this.tem = true;
      }
    });

    if (this.tem == true) {
      return true;
    } else {
      return false;
    }
  }
}

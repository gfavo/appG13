import { Component, OnInit } from '@angular/core';

import { NomeInstrutorService } from "../nome-instrutor.service";

import { tecnicas, aula_nova, conjunto_aula_exemplo, aula_exemplo } from '../aula/aula.page';
import { Router } from '@angular/router';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { ModaltecnicasPage } from '../modaltecnicas/modaltecnicas.page';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { aula } from '../manutencao-aula/manutencao-aula.page';


@Component({
  selector: 'app-nova-aula',
  templateUrl: './nova-aula.page.html',
  styleUrls: ['./nova-aula.page.scss'],
})
export class NovaAulaPage implements OnInit {

  data = new Date();
  _data: string;

  aula: conjunto_aula_exemplo;



  descricao_aula: string;

  aula_escolhida: string;

  aula_mostrada: aula_exemplo;

  descricaoPadrao: string;

  aulaRegistro: aula;
  
  headers = new HttpHeaders({ "x-auth": this.instrutor.getToken(), 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0', 'Pragma': 'no-cache', 'Expires': '0' });

  constructor(private load: LoadingController,
    private http: HttpClient,
    private modalController: ModalController,
    public instrutor: NomeInstrutorService,
     private router: Router,
     private alertController: AlertController,
     ) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModaltecnicasPage,
    });
    return await modal.present();
  }

  async mensagem(header,texto) {
    const alert = await this.alertController.create({
      header: header,
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }

  async aulacriada() {
    const registra = await this.alertController.create({

      header: 'sucesso',
      message: 'Aula criada com sucesso!',
      buttons: [{ text: "OK", handler: () => { this.router.navigateByUrl("/aula"); } }]
    })
    await registra.present();
  }

  async alertaDeErro() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Adicione uma aula e digite uma descrição para a mesma',
      buttons: ['OK']
    });
    await alert.present();
  }

  async certeza() {
    const alert = await this.alertController.create({
      header: 'ATENÇÃO',
      message: 'Tem certeza que deseja criar uma aula?',
      buttons: [{text: 'SIM', handler: () => {

 //-------------------------------------------------------------------------------
 
 this.instrutor.setAulaAberta(true);
 this.http.post(this.instrutor.getUrl() + "/registrar.php", { "id": "", "descricao": this.instrutor.getDescricao(), "datetime": this.instrutor.getAula().datetime, "idaulaprogramada": this.instrutor.getIdPrograma(), "alunos": this.aulaRegistro.alunos , "idtecnicasavulsas": this.instrutor.getIdTecnicas()}, { headers: this.headers })
   .subscribe(data => {
     console.log(data)
     this.dismiss();
     this.aulaRegistro.id = (<aula>data).id;
     this.aulacriada();

   });
 //-------------------------------------------------------------------------------




      }},{text: 'NÃO'}]
    });
    await alert.present();
  }
  
  async presentLoading() {
    const loading = await this.load.create({
      message: 'Aguarde por favor',
      duration: 5000
    });
    await loading.present();

   

    const { role, data } = await loading.onDidDismiss();

  }

  async dismiss() {
    return await this.load.dismiss().then(() => console.log('dismissed'));
  }

  ngOnInit() {

    this.aula = this.instrutor.getAula();

    this.instrutor.setDatatime(this.aula.datetime);

  }

  ionViewWillEnter() {
    this.http.get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
 .subscribe(
   data => {
     this.dismiss();
     console.log(data);
     this.aulaRegistro = <aula>data;
   }
 );
  }
  
  action() {
    this.aula_escolhida = (<HTMLIonSelectElement>document.getElementById("_aulaProgramada")).value;
    this.instrutor.setIdPrograma(this.aula.aulasProgramadas.find(x => x.titulo === this.aula_escolhida).id);
    this.aula_mostrada = this.aula.aulasProgramadas.find(x => x.titulo === this.aula_escolhida);

    this.instrutor.setAulaSelecionada(this.aula_mostrada);

    this.descricaoPadrao = this.aula_escolhida + " - "  + this.instrutor.getNome()  + " - " + this.aula.datetime;
 
  }

  
  continuar() {
    

    this.descricao_aula = (<HTMLIonTextareaElement>document.getElementById("descricao")).value;
    this.instrutor.setDescricao(this.descricao_aula);
    if (this.instrutor.getIdPrograma() != null && this.descricao_aula != "") {

      this.certeza();
      this.instrutor.setConteudoConcluir(this.aulaRegistro);
     

    }
    else {
      this.alertaDeErro();
    }



  }
  voltar() {
    this.instrutor.setIdPrograma(null);
    this.router.navigate(['/aula']);
  }

  backPage() {
    this.router.navigateByUrl("/aula");
}

mostraModal(){
  if (this.aula_mostrada != null)
  {
  this.presentModal();
  }
  else
  {
  alert('Escolha primeiro uma aula semanal!');
  }
}
}

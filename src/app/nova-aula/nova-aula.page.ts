import { Component, OnInit } from '@angular/core';

import { NomeInstrutorService } from "../nome-instrutor.service";

import { tecnicas, aula_nova, conjunto_aula_exemplo, aula_exemplo } from '../aula/aula.page';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ModaltecnicasPage } from '../modaltecnicas/modaltecnicas.page';


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

  constructor(private modalController: ModalController,public instrutor: NomeInstrutorService, private router: Router,private alertController: AlertController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModaltecnicasPage,
    });
    return await modal.present();
  }

  async alertaDeErro() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Adicione uma aula e digite uma descrição para a mesma',
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {

    this.aula = this.instrutor.getAula();

    this.instrutor.setDatatime(this.aula.datetime);

  }
  actionProgramadas() {
    this.aula_escolhida = (<HTMLIonSelectElement>document.getElementById("_aulaProgramada")).value;
    this.instrutor.setIdPrograma(this.aula.aulasProgramadas.find(x => x.titulo === this.aula_escolhida).id);
    this.aula_mostrada = this.aula.aulasProgramadas.find(x => x.titulo === this.aula_escolhida);

    this.instrutor.setAulaSelecionada(this.aula_mostrada);

  }

  
  continuar() {
    

    this.descricao_aula = (<HTMLIonTextareaElement>document.getElementById("descricao")).value;
    this.instrutor.setDescricao(this.descricao_aula);
    if (this.instrutor.getIdPrograma() != null && this.descricao_aula != "") {
      this.router.navigate(['/metodo']);
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

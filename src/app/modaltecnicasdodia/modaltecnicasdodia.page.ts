import { Component, OnInit } from '@angular/core';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { ModalController, IonRippleEffect } from '@ionic/angular';
import { ModalvideoPage } from '../modalvideo/modalvideo.page';

@Component({
  selector: 'app-modaltecnicasdodia',
  templateUrl: './modaltecnicasdodia.page.html',
  styleUrls: ['./modaltecnicasdodia.page.scss'],
})
export class ModaltecnicasdodiaPage implements OnInit {
tecnicasDia;
diames;


  constructor(
    private instrutor: NomeInstrutorService,
    private modalCtrl: ModalController,
  ) { }


  
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalvideoPage,
    });
    return await modal.present();
  }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    this.tecnicasDia = this.instrutor.getTecnicasDia();
    this.diames = this.instrutor.getDiaMes();
  }

  dismiss()
{
  this.modalCtrl.dismiss();
}

abreVideo(numeroTecnica: number,senhavimeo: string){
  this.instrutor.setIdVimeo(numeroTecnica);
  this.instrutor.setSenhaVimeo(senhavimeo);
  
  this.presentModal();
}

}

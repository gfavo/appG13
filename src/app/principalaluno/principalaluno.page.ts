import { Component, OnInit } from '@angular/core';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-principalaluno',
  templateUrl: './principalaluno.page.html',
  styleUrls: ['./principalaluno.page.scss'],
})
export class PrincipalalunoPage implements OnInit {

exibe_diretorio: boolean = true;


  constructor(
    private instrutor: NomeInstrutorService,
    private router: Router,
    private alertController: AlertController
  ) { }

  async alertaNaoPago() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Você deve ser um usuario premium para acessar esse conteúdo!',
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
if (this.instrutor.getRole() == "ALUNOPAGO")
{
  this.exibe_diretorio = true;
}
else{
  this.exibe_diretorio = false;
}
  }



  abreDiretorio()
  {
    if (this.instrutor.getRole() == "ALUNOPAGO")
    {
      this.router.navigate(["/diretorio"]);
    }
    else
    {
this.alertaNaoPago();
    }

  }

}

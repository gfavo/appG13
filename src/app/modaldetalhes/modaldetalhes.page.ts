import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { tecnicas } from '../aula/aula.page';
 

@Component({
  selector: 'app-modaldetalhes',
  templateUrl: './modaldetalhes.page.html',
  styleUrls: ['./modaldetalhes.page.scss'],
})
export class ModaldetalhesPage implements OnInit {

tecnicas: tecnicas[];


  data: string;
  constructor(private modalCtrl: ModalController,public instrutor: NomeInstrutorService) { }

dismiss()
{
  this.modalCtrl.dismiss();
}

  ngOnInit() {
    this.tecnicas = JSON.parse(this.instrutor.getDescricao());
    this.data = this.instrutor.getDatatime()
  }

}

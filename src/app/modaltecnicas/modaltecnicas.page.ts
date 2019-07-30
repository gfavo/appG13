import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { conjunto_aula_exemplo, tecnicas, aula_exemplo } from '../aula/aula.page';


export class tecnicaId
{
  id: number;
  nome: string;
  incluir: boolean;
}




@Component({
  selector: 'app-modaltecnicas',
  templateUrl: './modaltecnicas.page.html',
  styleUrls: ['./modaltecnicas.page.scss'],
})




export class ModaltecnicasPage implements OnInit {

  constructor(private modalCtrl: ModalController,private instrutor: NomeInstrutorService) { }

aula: conjunto_aula_exemplo;

search_tecnica: any;

tecnicasBool: tecnicaId[];

idtecnicas: number[];



aulaComTecnicasAdicionais: aula_exemplo;

tem: boolean;

ngOnInit(){}
  ionViewWillEnter() {
   

   this.search_tecnica = document.getElementById('search_tecnica');
   this.aula =  this.instrutor.getAula();
   (<tecnicas[]>this.tecnicasBool) = this.aula.tecnicasAvulsas;
   
   
   this.tecnicasBool.forEach(element => {
     element.incluir = false;
   });

  }

  dismiss()
{
  this.modalCtrl.dismiss();
}

temTecnicas(tecnicaAvulsa: tecnicas,tecnicas: tecnicas[]): boolean
{
  
tecnicas.forEach(element => {

  if (element.nome == tecnicaAvulsa.nome){
  this.tem = true;
  }
  
});

if(this.tem == true)
{
  return true;
}
else
{
  return false;
}
}

adicionar(){
  this.aulaComTecnicasAdicionais = this.instrutor.getAulaSelecionada();

  

  
  this.tecnicasBool.forEach(tecnica => {
    this.tem = false;
    if (tecnica.incluir == true && this.temTecnicas(tecnica,this.aulaComTecnicasAdicionais.tecnicas)==false)
      {
       this.aulaComTecnicasAdicionais.tecnicas.push(tecnica);
       this.instrutor.setIdTecnicas(tecnica.id);
      }
  });


  console.log(JSON.stringify(this.instrutor.getIdTecnicas()));
  this.instrutor.setAulaSelecionada(this.aulaComTecnicasAdicionais);
 
  
}


}

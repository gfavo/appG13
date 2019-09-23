import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { ModalvideoPage } from '../modalvideo/modalvideo.page';
import { ModalController } from '@ionic/angular';

export class tecnicasDir{
  idvimeo: number;
  nome: string;
  senhavimeo: string;
  tecnicaextra: number;
  descricao: string;
}

export class conteudoGetDiretorio{
  categoria: string;
  tecnicas: tecnicasDir[];
  expandida: boolean;
}

@Component({
  selector: 'app-diretorio',
  templateUrl: './diretorio.page.html',
  styleUrls: ['./diretorio.page.scss'],
})






export class DiretorioPage implements OnInit {
  headers = new HttpHeaders({"x-version":"1.0.3" ,"x-auth": this.instrutor.getToken() , 'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0','Pragma': 'no-cache','Expires': '0'});

  subscription: any;

  ConteudoDiretorio: conteudoGetDiretorio[];

  podeExpandir: boolean = false;

 

  tecnicaExpandida: conteudoGetDiretorio;

  constructor(private modalController: ModalController,private httpClient: HttpClient,private instrutor: NomeInstrutorService) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalvideoPage,
    });
    return await modal.present();
  }


  ionViewWillEnter() {
this.subscription = this.httpClient.get(this.instrutor.getUrl()+"/diretorio.php",{ responseType: "json", headers: this.headers })
.subscribe(data=>{

this.ConteudoDiretorio = (<conteudoGetDiretorio[]>data);

this.ConteudoDiretorio.forEach(element => {
  element.expandida = false;
});


console.log(this.ConteudoDiretorio);
console.log(data);


});



  }
  ngOnInit() {
  }

  openCategoria(x: string){




this.ConteudoDiretorio.forEach(element => {
  if(element.expandida == true && element.categoria != x)
  {
    element.expandida = false;
  }
});
  if( this.ConteudoDiretorio.find(y => y.categoria === x).expandida == true)
  {
    this.ConteudoDiretorio.find(y => y.categoria === x).expandida = false;
  }
  else if(this.ConteudoDiretorio.find(y => y.categoria === x).expandida == false)
  {
    this.ConteudoDiretorio.find(y => y.categoria === x).expandida = true;
    this.tecnicaExpandida =  this.ConteudoDiretorio.find(y => y.categoria === x);
  }

}
  
  abreVideo(numeroTecnica: number,senhavimeo: string){
    this.instrutor.setIdVimeo(numeroTecnica);
    this.instrutor.setSenhaVimeo(senhavimeo);
    
    this.presentModal();
  }


}

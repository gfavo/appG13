import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NomeInstrutorService } from '../nome-instrutor.service';

class tecnicasDir{
  idvimeo: number;
  nome: string;
  senhavimeo: string;
}

class conteudoGetDiretorio{
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
  headers = new HttpHeaders({ "x-auth": this.instrutor.getToken() , 'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0','Pragma': 'no-cache','Expires': '0'});

  subscription: any;

  ConteudoDiretorio: conteudoGetDiretorio[];

  podeExpandir: boolean = false;

 

  tecnicaExpandida: conteudoGetDiretorio;

  constructor(private httpClient: HttpClient,private instrutor: NomeInstrutorService) { }
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
this.podeExpandir = true;
this.ConteudoDiretorio.forEach(element => {
  if(element.expandida == true)
  {
    this.podeExpandir = false;
  }
});

if (this.podeExpandir == true)
{
    this.ConteudoDiretorio.find(y => y.categoria === x).expandida = true;
    this.tecnicaExpandida =  this.ConteudoDiretorio.find(y => y.categoria === x);
  

}
else
{
  if( this.ConteudoDiretorio.find(y => y.categoria === x).expandida == true)
  {
    this.ConteudoDiretorio.find(y => y.categoria === x).expandida = false;


  }
}
  }
}

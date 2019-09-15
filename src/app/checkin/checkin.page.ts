import { Component, OnInit } from '@angular/core';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

class conteudoAulasAtivas{
  data: string
  descricao: string
  id: number
  nomeinstrutor: string
  idinstrutor: number
}

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {
conteudo: conteudoAulasAtivas;
subscription;
headers = new HttpHeaders({ "x-auth": this.instrutor.getToken() , 'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0','Pragma': 'no-cache','Expires': '0'});

  constructor(
    private instrutor: NomeInstrutorService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  
    this.subscription =  this.httpClient.get(this.instrutor.getUrl()+"/aulasativas.php", { responseType: "json", headers: this.headers })
    .subscribe(
      data => {
        this.conteudo = (<conteudoAulasAtivas>data);
        console.log(data);
  });
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-') +" "+  this.formatZero(d.getHours()) + ":" + this.formatZero(d.getMinutes());
  }

  formatZero(numero) {
    if (parseInt(numero) < 10) {
      return "0" + numero;
    }
    return numero;
  }

  checkin(aulaid,instrutorid){
   console.log(aulaid + " - " + instrutorid);
   
    this.subscription =  this.httpClient.post(this.instrutor.getUrl()+"/checkin.php",{"aulaid": aulaid,"instrutorid": instrutorid,"datahorasolicitacao":this.formatDate(new Date())} ,{ responseType: "json", headers: this.headers })
    .subscribe(
      data => {
        
        console.log(JSON.stringify(data));
  });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { toSegments } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { of, fromEventPattern } from "rxjs";
import { Observable } from "rxjs";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { NomeInstrutorService } from "../nome-instrutor.service";
import { async } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { aula } from '../manutencao-aula/manutencao-aula.page';

import { ActivatedRoute } from '@angular/router';

export class aluno {
  id: number;
  nome: string;
}

export class aula_exemplo {
  id: string;
  titulo: string;
  tecnicas: tecnicas[];
}

export class conjunto_aula_exemplo {
  aberto: boolean;
  datetime: string;
  aulasProgramadas: aula_exemplo[];
  aulasAvulsas: aula_exemplo[];
}

export class Aula_aberta {
  datetime: string;
  aberto: boolean;
  tecnicas: tecnicas[];
  tecnicasAvulsas: tecnicas[];
}

export class tecnicas {
  descricao: string;
  nome: string;
}

export class aula_nova {
  datetime: string;
  aberto: boolean;
  tecnicas: tecnicas[];
  tecnicasAvulsas: tecnicas[];
}


@Component({
  selector: 'app-aula',
  templateUrl: './aula.page.html',
  styleUrls: ['./aula.page.scss'],

})


export class AulaPage implements OnInit {
  id: number;





  constructor(private httpClient: HttpClient, public instrutor: NomeInstrutorService, private router: Router, private _activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.nome_instrutor = this.instrutor.getNome();
        this.httpClient.post("https://www.g13bjj.com.br/ct/mobile/aula.php", { '': '' }, { responseType: "json", headers: this.headers })
          .subscribe(
            data => {
              console.log(data);
    
    
              this.data_aula = (<Aula_aberta>data).datetime;
              this.aula_aberta = (<Aula_aberta>data).aberto;
    
              this.instrutor.setAulaAberta(this.aula_aberta);
    
             

              if ((<Aula_aberta>data).aberto == false) {
                this.aula_nova = <conjunto_aula_exemplo>data;
              }
              else
              {
                this.instrutor.setDatatime(this.data_aula);
               if (this.instrutor.getDescricao() == undefined) this.instrutor.setDescricao(JSON.stringify((<Aula_aberta>data).tecnicas));
              }
    
            });}
    });

   }

  data: Date;

  headers = new HttpHeaders({ "x-auth": this.instrutor.getToken() });

  aula_nova: conjunto_aula_exemplo;

  data_aula: string;

  aula_aberta: boolean;

  nome_instrutor: string;



  ngOnInit() {

    
    

  }

  onClick() {
    console.log('CLICKOU');
    alert(this.data_aula + "e se está aberta: " + this.aula_aberta);
  }

  completarAula() {
    this.router.navigate(["/metodo"]);
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  formatZero(numero: string) {
    if (parseInt(numero) < 10) {
      return "0" + numero;
    }
    return numero;
  }

  novaAula() {

    this.data = new Date();


    this.aula_nova.datetime = this.formatDate(this.data.toDateString()) + " " + this.data.getHours().toString() + ":" + this.formatZero(this.data.getMinutes().toString()) + ":" + this.formatZero(this.data.getSeconds().toString());



    this.instrutor.setAula(this.aula_nova);
    this.router.navigate(["/nova-aula"]);


  }
}



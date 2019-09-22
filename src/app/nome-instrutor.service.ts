import { Injectable } from '@angular/core';

import { tecnicas,aula_nova,conjunto_aula_exemplo,aula_exemplo } from './aula/aula.page';
import { aula } from './manutencao-aula/manutencao-aula.page';
import { AbstractEmitterVisitor } from '@angular/compiler/src/output/abstract_emitter';
import { HttpHeaders } from '@angular/common/http';

export class error{
  error: string;
}

@Injectable({
  providedIn: 'root'
})
export class NomeInstrutorService {

error: error;

  headers = new HttpHeaders({'x-version':'1.0.1' , "x-auth": this.getToken() , 'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0','Pragma': 'no-cache','Expires': '0'});

nome_instrutor: string;

token: string;

aula: conjunto_aula_exemplo;

data: string;

idprograma: string;

descricaoaula: string;

aula_exemplo: aula_exemplo;

url: string;

aberto: boolean;

tecnicas: number[];


idvimeo: number;

senhavimeo: string;

role: string;
  tecnicasdia;
  dia;
  mes;
  margem: any;
  conteudoConcluir: aula;
  aulaProgramaEscolhida: aula_exemplo;

  constructor() { this.tecnicas = []; }

setNome(nome: string)
{
this.nome_instrutor = nome;
}

getNome(): string
{
return this.nome_instrutor;
}

setToken(token: string)
{
this.token = token;
}

getToken(): string
{
return this.token;
}

setAula(aula: conjunto_aula_exemplo)
{
this.aula = aula;
}

getAula(): conjunto_aula_exemplo
{
return this.aula;
}

setIdPrograma(idprograma:  string)
{
this.idprograma = idprograma;
}

getIdPrograma(): string
{
return this.idprograma;
}

setDescricao(descricaoaula: string)
{
this.descricaoaula= descricaoaula;
}

getDescricao(): string
{
return this.descricaoaula;
}

setAulaSelecionada(aula: aula_exemplo)
{
this.aula_exemplo = aula;
}

getAulaSelecionada(): aula_exemplo
{
return this.aula_exemplo;
}

setAulaAberta(aberto: boolean)
{
this.aberto = aberto;
}
getAulaAberta(): boolean
{
return this.aberto;
}

setDatatime(data: string)
{
this.data = data;
}
getDatatime(): string
{
return this.data;
}


setUrl(url: string)
{
this.url = url;
}
getUrl(): string
{
return this.url;
}

setIdTecnicas(tecnica: number)
{
  this.tecnicas.push(tecnica);
}

getIdTecnicas(): number[]
{
  return this.tecnicas;
}

setIdVimeo(idvimeo: number)
{
  this.idvimeo = idvimeo;
}
getIdVimeo(): number
{
  return this.idvimeo;
}
setSenhaVimeo(senhavimeo: string)
{
  this.senhavimeo = senhavimeo;
}
getSenhaVimeo(): string
{
  return this.senhavimeo;
}
setRole(role: string)
{
  this.role = role;
}
getRole(): string
{
  return this.role;
}
setTecnicasDia(tecnicas)
{
  this.tecnicasdia = tecnicas;
}
getTecnicasDia()
{
  return this.tecnicasdia;
}
setDiaMes(dia,mes)
{
  this.dia = dia;
  this.mes = mes;
}
getDiaMes()
{
  return this.dia+"/"+this.mes;
}

setConteudoConcluir(conteudo: aula)
{
this.conteudoConcluir = conteudo
}
getConteudoConcluir(): aula
{
  return this.conteudoConcluir;
}

setAulaProgramaEscolhida(aula: aula_exemplo)
{
this.aulaProgramaEscolhida = aula;
}


}



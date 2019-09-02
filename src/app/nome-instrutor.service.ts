import { Injectable } from '@angular/core';

import { tecnicas,aula_nova,conjunto_aula_exemplo,aula_exemplo } from './aula/aula.page';
import { aula } from './manutencao-aula/manutencao-aula.page';
import { AbstractEmitterVisitor } from '@angular/compiler/src/output/abstract_emitter';

@Injectable({
  providedIn: 'root'
})
export class NomeInstrutorService {
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



}



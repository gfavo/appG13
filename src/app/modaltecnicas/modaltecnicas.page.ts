import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NomeInstrutorService } from "../nome-instrutor.service";
import {
  conjunto_aula_exemplo,
  tecnicas,
  aula_exemplo
} from "../aula/aula.page";
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsModaltecnicas } from './labelsModaltecnicas';

export class tecnicaId {
  id: number;
  nome: string;
  incluir: boolean;
  avancada: boolean;
}

@Component({
  selector: "app-modaltecnicas",
  templateUrl: "./modaltecnicas.page.html",
  styleUrls: ["./modaltecnicas.page.scss"]
})
export class ModaltecnicasPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private instrutor: NomeInstrutorService,
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsModaltecnicas
  ) {}

  aula: conjunto_aula_exemplo;

  search_tecnica: any;

  tecnicasBool: tecnicaId[];

  idtecnicas: number[];

  itemsFiltrados: tecnicaId[];

  aulaComTecnicasAdicionais: aula_exemplo;

  nomesTecnicasAdicionais: string[] = [];
  numeroTecnicaAtual: number = 0;

  tem: boolean;

  searchTerm: string;

  idiomaPadrao: string;

  ngOnInit() {}

  filterItems(items, searchTerm) {
    return items.filter(item => {
      return item.nome.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1;
    });
  }
  //tecnica.nome.toUpperCase().includes(search_tecnica.value.toUpperCase())
  setFilteredItems() {
    this.itemsFiltrados = this.filterItems(this.tecnicasBool, this.searchTerm);
  }


  checkIdioma(){
    this.storage.get("idioma").then(res => {
        
      this.idiomaPadrao = res;
    if(res == "" || res == null)
  {
    this.globalization.getPreferredLanguage().then(res => {
  if(res.value.includes("pt"))
  {
  this.storage.set("idioma","ptbr");
  this.idiomaPadrao = "ptbr";
  }
  else if(res.value.includes("en"))
  {
  this.storage.set("idioma","en");
  this.idiomaPadrao = "en";
  }
  
    });
  }
  });
  }



  ionViewWillEnter() {
this.checkIdioma();



    this.search_tecnica = document.getElementById("search_tecnica");
    this.aula = this.instrutor.getAula();
    (<tecnicas[]>this.tecnicasBool) = this.aula.tecnicasAvulsas;

    this.tecnicasBool.forEach(element => {
      element.incluir = false;
    });

    this.itemsFiltrados = this.tecnicasBool;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  temTecnicas(tecnicaAvulsa: tecnicas, tecnicas: tecnicas[]): boolean {
    tecnicas.forEach(element => {
      if (element.nome == tecnicaAvulsa.nome) {
        this.tem = true;
      }
    });

    if (this.tem == true) {
      return true;
    } else {
      return false;
    }
  }

  adicionar() {
    this.aulaComTecnicasAdicionais = this.instrutor.getAulaSelecionada();

    this.tecnicasBool.forEach(tecnica => {
      this.tem = false;
      if (
        tecnica.incluir == true &&
        this.temTecnicas(tecnica, this.aulaComTecnicasAdicionais.tecnicas) ==
          false
      ) {
        this.aulaComTecnicasAdicionais.tecnicas.push(tecnica);
        this.instrutor.setIdTecnicas(tecnica.id);
      }
    });

    console.log(JSON.stringify(this.instrutor.getIdTecnicas()));
    this.instrutor.setAulaSelecionada(this.aulaComTecnicasAdicionais);
    this.modalCtrl.dismiss();
  }
}

import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import {
  ModalController,
  LoadingController,
  MenuController,
  AlertController
} from "@ionic/angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NomeInstrutorService } from "../nome-instrutor.service";
import { Router, ActivatedRoute } from "@angular/router";
import { stringify } from "querystring";
import { CalendarComponent } from "ionic2-calendar/calendar";
import { identifierModuleUrl } from "@angular/compiler";
import { ModalvideoPage } from "../modalvideo/modalvideo.page";
import { ModaltecnicasdodiaPage } from "../modaltecnicasdodia/modaltecnicasdodia.page";
import { DOCUMENT } from '@angular/platform-browser';
import { LabelsCalendario } from './labelsCalendario';
import { Globalization } from '@ionic-native/globalization/ngx';
import { Storage } from '@ionic/storage';

class conteudo {
  aula_datas: aula_data[];
  faixa: string;
  fundamentals: boolean;
  graus_na_faixa: number;
  modulo1: boolean;
  modulo2: boolean;
  modulo3: boolean;
  num_aulas: number;
  num_aulas_mais_offset: number;
  porcentagem_restante: number;
  porcentagem_troca_faixa: number;
  restando: number;
  total_aulas_mudar_faixa: number;
  nomealuno: string;
  foto: string;
  id: number;
}

class aula_data {
  data: string;
  nome: string;
  senhavimeoid: string;
  vimeoid: string;
}

class erro {
  error: error;
}

class error {
  error: string;
}

@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.page.html",
  styleUrls: ["./calendario.page.scss"]
})
export class CalendarioPage implements OnInit {
  subscription: any;
  mes: string;
  mesEscrito: string;
  ano: string;
  anoInt: number;
  dia: string;
  data: Date;
  currentDate;
  aula_datas: aula_data[];

  codigoQr: string;

  numeroEspaco: number;

  tecnicasExistem: boolean = false;
  nomealuno: string;
  url: string;
  urlFaixa;
  conteudo: conteudo;

  
  headers = new HttpHeaders({
    "x-version": "1.1.1",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  event = {
    title: "",
    startTime: "",
    endTime: "",
    senhavimeoid: "",
    vimeoid: ""
  };

  calendar = {
    mode: "month",
    currentDate: new Date()
  };

  eventSource = [];
  viewTitle: string;
  tecnicasDia;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  idiomaPadrao: string;

  constructor(
    private modalController: ModalController,
    private load: LoadingController,
    private menu: MenuController,
    private httpClient: HttpClient,
    public instrutor: NomeInstrutorService,
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    public labelsCalendario: LabelsCalendario,
    private globalization: Globalization,
    private storage: Storage
  ) {}

  ngOnInit() {
    
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModaltecnicasdodiaPage
    });
    return await modal.present();
  }

  async alertaNaoPago() {
    const alert = await this.alertController.create({
      header: "",
      message: this.labelsCalendario[this.idiomaPadrao],
      buttons: ["OK"]
    });
    await alert.present();
  }

  async dismiss() {
    return await this.load.dismiss().then(() => console.log("dismissed"));
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
    this.dismiss();
this.checkIdioma();
this.tecnicasExistem = false;

    this.subscription = this.httpClient
      .get(this.instrutor.getUrl() + "/calendario.php"+"?idioma="+this.instrutor.idiomaPadrao, {
        responseType: "json",
        headers: this.headers
      })
      .subscribe(
        data => {
          console.log(data);
          this.conteudo = (<conteudo>data);
          
          this.verde_cinza('fundamentals',this.conteudo.fundamentals);
          this.verde_cinza('modulo1',this.conteudo.modulo1);
          this.verde_cinza('modulo2',this.conteudo.modulo2);
          this.verde_cinza('modulo3',this.conteudo.modulo3);

          this.nomealuno = (<conteudo>data).nomealuno;
          this.url = (<conteudo>data).foto;
          this.urlFaixa = (<conteudo>data).faixa;

          this.codigoQr =
            (<conteudo>data).id + ";" + (<conteudo>data).nomealuno;
        },
        error => {
          this.instrutor.error = this.instrutor.error = (<erro>(
            error
          )).error.error;
          this.router.navigate(["/error"]);
        }
      );

this.eventSource = [];

      this.subscription = this.httpClient
      .get(
        this.instrutor.getUrl() +
          "/calendario.php" +
          "?mes=" +
          this.mes +
          "&ano=" +
          this.ano+"&idioma="+this.instrutor.idiomaPadrao,
        { responseType: "json", headers: this.headers }
      )
      .subscribe(data => {
        console.log(data);
        this.aula_datas = (<conteudo>data).aula_datas;

        this.aula_datas.forEach(element => {
          this.data = new Date(element.data);
          this.data.setDate(this.data.getDate() + 1);

          this.addEvent(
            element.nome,
            this.data,
            element.vimeoid,
            element.senhavimeoid
          );
        });
      });
  }



  onViewTitleChanged(title) {
 this.eventSource = [];
    this.viewTitle = title;
    var i = 0;
    for (i = 0; i < this.viewTitle.length; i++) {
      if (this.viewTitle.charAt(i) == " ") {
        this.numeroEspaco = i;
      }
    }

    this.mesEscrito = this.viewTitle.substring(0, this.numeroEspaco);
    this.ano = this.viewTitle.substr(this.numeroEspaco + 1);

    switch (this.mesEscrito) {
      case "January":
        this.mes = "01";
        break;
      case "February":
        this.mes = "02";
        break;
      case "March":
        this.mes = "03";
        break;
      case "April":
        this.mes = "04";
        break;
      case "May":
        this.mes = "05";
        break;
      case "June":
        this.mes = "06";
        break;
      case "July":
        this.mes = "07";
        break;
      case "August":
        this.mes = "08";
        break;
      case "September":
        this.mes = "09";
        break;
      case "October":
        this.mes = "10";
        break;
      case "November":
        this.mes = "11";
        break;
      case "December":
        this.mes = "12";
        break;
    }

    this.subscription = this.httpClient
      .get(
        this.instrutor.getUrl() +
          "/calendario.php" +
          "?mes=" +
          this.mes +
          "&ano=" +
          this.ano+"&idioma="+this.instrutor.idiomaPadrao,
        { responseType: "json", headers: this.headers }
      )
      .subscribe(data => {
        console.log(data);
        this.aula_datas = (<conteudo>data).aula_datas;

        this.aula_datas.forEach(element => {
          this.data = new Date(element.data);
          this.data.setDate(this.data.getDate() + 1);

          this.addEvent(
            element.nome,
            this.data,
            element.vimeoid,
            element.senhavimeoid
          );
        });
      });
  }
  onEventSelected($event) {
    if (this.instrutor.getRole() == "ALUNOPAGO") {
      this.instrutor.setIdVimeo($event.idvimeo);
      this.instrutor.setSenhaVimeo($event.senhavimeo);

      this.presentModal();
    } else {
      this.alertaNaoPago();
    }
  }

  onTimeSelected(data) {
console.log("Data selecionada:"+JSON.stringify(data));

    this.currentDate = data.selectedTime;
    this.dia = (<Date>this.currentDate).getDate().toString();

    this.instrutor.setDiaMes(this.dia, this.mes);

    this.tecnicasExistem = false;
    if (data.events == null) {
      this.tecnicasDia = "";
    } else {
      this.tecnicasDia = data.events;
      this.instrutor.setTecnicasDia(data.events);
    }

    if (this.tecnicasDia != "") {
      this.tecnicasExistem = true;
    }
  }

  resetEvent() {
    this.event = {
      title: "",
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      senhavimeoid: "",
      vimeoid: ""
    };
  }

  addEvent(nome, data, id, senhavimeo) {
    let eventCopy = {
      title: nome,
      startTime: data,
      endTime: data,
      idvimeo: id,
      senhavimeo: senhavimeo
    };

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }

  abreTecnicas() {
    this.presentModal();
  }

  voltaMes() {
    var mySwiper = document.querySelector(".swiper-container")["swiper"];
    mySwiper.slidePrev();
  }

  avancaMes() {
    var mySwiper = document.querySelector(".swiper-container")["swiper"];
    mySwiper.slideNext();
  }


  verde_cinza(nome: string,concluido: boolean){
if(concluido == true)
{
  //document.getElementById(nome).style.backgroundColor = "#25D366";
  document.getElementById(nome).style.backgroundColor= "#25D366";
}else{
  document.getElementById(nome).style.backgroundColor = "rgb(190,190,190)";
}
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsMetodo } from './labelsMetodo';

@Component({
  selector: "app-metodo",
  templateUrl: "./metodo.page.html",
  styleUrls: ["./metodo.page.scss"]
})
export class MetodoPage implements OnInit {
  constructor(
    private router: Router,
    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsMetodo

    ) {}

  idiomaPadrao: string;
  
  ngOnInit() {}

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
  }


  backPage() {
    this.router.navigateByUrl("/aula");
  }
}

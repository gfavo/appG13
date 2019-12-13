import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Globalization } from '@ionic-native/globalization/ngx';
import { LabelsSobre } from './labelsSobre';

@Component({
  selector: "app-sobre",
  templateUrl: "./sobre.page.html",
  styleUrls: ["./sobre.page.scss"]
})
export class SobrePage implements OnInit {
idiomaPadrao: string;

  constructor(    private storage: Storage,
    private globalization: Globalization,
    public labels: LabelsSobre
    ) {}

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


  ngOnInit() {}
}

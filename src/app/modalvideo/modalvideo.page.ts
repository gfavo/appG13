import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NomeInstrutorService } from "../nome-instrutor.service";

@Component({
  selector: "app-modalvideo",
  templateUrl: "./modalvideo.page.html",
  styleUrls: ["./modalvideo.page.scss"]
})
export class ModalvideoPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private instrutor: NomeInstrutorService
  ) {}

  idvimeo: number;

  senhavimeo: string;

  ngOnInit() {}

  ionViewWillEnter() {
    this.idvimeo = this.instrutor.getIdVimeo();
    this.senhavimeo = this.instrutor.getSenhaVimeo();

    (<HTMLIFrameElement>document.getElementById("player")).src =
      "https://player.vimeo.com/video/" + this.idvimeo;
  }

  dismiss() {
    this.modalController.dismiss();
  }
}

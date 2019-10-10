import { Component, OnInit } from "@angular/core";
import { NomeInstrutorService, error } from "../nome-instrutor.service";

@Component({
  selector: "app-error",
  templateUrl: "./error.page.html",
  styleUrls: ["./error.page.scss"]
})
export class ErrorPage implements OnInit {
  erro;

  constructor(private instrutor: NomeInstrutorService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.erro = this.instrutor.error;
  }
}

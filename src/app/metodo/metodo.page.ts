import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-metodo",
  templateUrl: "./metodo.page.html",
  styleUrls: ["./metodo.page.scss"]
})
export class MetodoPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  backPage() {
    this.router.navigateByUrl("/aula");
  }
}

import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Router } from "@angular/router";
import { HttpHeaders, HttpClient, HttpResponse, HttpResponseBase, HttpErrorResponse } from "@angular/common/http";
import { NomeInstrutorService, error } from "../nome-instrutor.service";
import { aula, Alunos } from "../manutencao-aula/manutencao-aula.page";
import { AlertController } from "@ionic/angular";

class sucesso{
  success: string;
}


@Component({
  selector: "app-qr",
  templateUrl: "./qr.page.html",
  styleUrls: ["./qr.page.scss"]
})
export class QrPage implements OnInit {
  scannedCode = null;

  aluno_cobaia: Alunos;

  codigo: string = "";

  codigoAluno: string;

  teste_nome: string = "";
  

  headers = new HttpHeaders({
    "x-version": "1.0.9",
    "x-auth": this.instrutor.getToken(),
    "Cache-Control":
      "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
    Pragma: "no-cache",
    Expires: "0"
  });

  aula: aula;


  situacao: string = "";

  async alertaSimples(mensagem) {
    const alert = await this.alertController.create({
      header: "Atenção",
      message: mensagem,
      buttons: ["OK"]
    });
    await alert.present();
  }

 

  constructor(
    private alertController: AlertController,
    public instrutor: NomeInstrutorService,
    private barCode: BarcodeScanner,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.http
      .get(this.instrutor.getUrl() + "/alunos.php", { headers: this.headers })
      .subscribe(data => {
        console.log(data);
        this.aula = <aula>data;
      });
  }

  scanCode() {

      this.instrutor.setAulaAberta(true);    
    this.barCode.scan().then(data => {
      this.scannedCode = data.text;
   

          this.http
            .post(this.instrutor.getUrl() + "/qrcode.php",{"alunoid": parseInt(this.scannedCode)} , {
              responseType: "json", 
               observe: "response",
              withCredentials: true,
              headers: this.headers
            })
            .subscribe(response => {
              console.log(response);
this.alertaSimples((<sucesso>response.body).success);
              }
           ,error => {
           this.alertaSimples((<error>(<HttpErrorResponse>error).error).error);
            });
            
         
      
    });
  }



  backPage() {
    this.router.navigateByUrl("/aula");
  }
}

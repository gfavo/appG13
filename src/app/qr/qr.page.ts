import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NomeInstrutorService } from '../nome-instrutor.service';
import { aula,Alunos } from '../manutencao-aula/manutencao-aula.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  
  scannedCode = null;

  aluno_cobaia: Alunos;

  codigo: string = "";

  teste_nome: string = "";

  headers = new HttpHeaders({ "x-auth": this.instrutor.getToken() , 'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0','Pragma': 'no-cache','Expires': '0'});

  aula: aula;

  situacao: string = "";



  async simple_alert(message: string,act: boolean)
  {
const presente = await this.alertController.create({
header: 'Note',
message: message,
buttons: [{text: 'OK',handler: () => {if(act) { this.router.navigate(['/aula']);}}}]
})
await presente.present();
  }

  constructor(private alertController: AlertController,public instrutor: NomeInstrutorService, private barCode: BarcodeScanner, private http: HttpClient, private router: Router) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.http.get(this.instrutor.getUrl()+"/alunos.php", { headers: this.headers })
        .subscribe(
          data => {
            console.log(data);
            this.aula = <aula>data;

          });
  }

  scanCode() {
    this.instrutor.setAulaAberta(true);
    if (this.aula.id == null) {
      this.http.post(this.instrutor.getUrl()+"/registrar.php", { "id": "", "descricao": this.instrutor.getDescricao(), "datetime": this.instrutor.getAula().datetime, "idaulaprogramada": this.instrutor.getIdPrograma(), "alunos": this.aula.alunos }, { headers: this.headers })
        .subscribe(res => {
          console.log(res)
          this.aula.id = (<aula>res).id;
        });
    }

    this.barCode.scan().then(data => {
      this.scannedCode = data.text;
this.aluno_cobaia =  this.achaAluno(this.scannedCode,this.aula.alunos);                     




if (this.procurarAluno(this.scannedCode,this.aula.alunos) == false)
{
  this.simple_alert("O aluno não existe na sua grade!",false);
}
else
{
  if(this.aluno_cobaia.presenca == false)
  {
    this.achaAluno(this.scannedCode,this.aula.alunos).presenca = true;
    
    this.http.post(this.instrutor.getUrl()+"/registrar.php", this.aula, { headers: this.headers })
    .subscribe(res => {
      console.log(res)
      this.aula.id = (<aula>res).id;
    });
    this.simple_alert("O aluno foi presenciado com sucesso!",false);
  }else{
    this.simple_alert("O aluno existe, porem ja tem presença!",false);
  }
}






    });




  }

  encerra() {
    if (this.aula.id != null) {
      this.http.post(this.instrutor.getUrl()+"/concluir.php", { "id": this.aula.id }, { observe: "response", headers: this.headers })
        .subscribe(data => console.log(data.status));
      this.instrutor.setAulaAberta(false);
      this.simple_alert("Foi concluída com sucesso!",true);
    }
    else
    {
      this.simple_alert("Primeiro escaneie um aluno!",false);
    }
  }

  procurarAluno(codigo: string,alunos: Alunos[]) : boolean
  {
   var achou = false;
   var i = 0;
  for(i=0;i<alunos.length;i++)
  {
  if (codigo == alunos[i].codigo)
  {
    achou = true;
  }
  }
  
  if (achou == true)
  {
    return true;
  }
  
  else
  {
    return false;
  }
  }
  
  achaAluno(codigo: string,alunos: Alunos[]) : Alunos
  {
    var i = 0;
    for(i=0;i<alunos.length;i++)
    {
    if (codigo == alunos[i].codigo)
    {
      return alunos[i];
    }
    }
    
   
  }

  backPage() {

      this.router.navigateByUrl("/aula");
    
  }

}

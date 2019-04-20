import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QrPage } from './qr.page';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxQRCodeModule} from 'ngx-qrcode3';
import { ModaldetalhesPage } from '../modaldetalhes/modaldetalhes.page';

const routes: Routes = [
  {
    path: '',
    component: QrPage
  }
];

@NgModule({
  imports: [
    NgxQRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QrPage],
  providers: [BarcodeScanner],
})
export class QrPageModule {}

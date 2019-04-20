import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModaldetalhesPage } from './modaldetalhes.page';

const routes: Routes = [
  {
    path: '',
    component: ModaldetalhesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModaldetalhesPage],
  entryComponents: [ModaldetalhesPage]
})
export class ModaldetalhesPageModule {}

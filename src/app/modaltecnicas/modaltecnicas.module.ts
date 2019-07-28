import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModaltecnicasPage } from './modaltecnicas.page';

const routes: Routes = [
  {
    path: '',
    component: ModaltecnicasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModaltecnicasPage]
})
export class ModaltecnicasPageModule {}

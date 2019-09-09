import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModaltecnicasdodiaPage } from './modaltecnicasdodia.page';

const routes: Routes = [
  {
    path: '',
    component: ModaltecnicasdodiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModaltecnicasdodiaPage]
})
export class ModaltecnicasdodiaPageModule {}

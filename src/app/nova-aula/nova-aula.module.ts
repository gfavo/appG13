import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovaAulaPage } from './nova-aula.page';
import { ModaltecnicasPage } from '../modaltecnicas/modaltecnicas.page';
import { ModaltecnicasPageModule } from '../modaltecnicas/modaltecnicas.module';

const routes: Routes = [
  {
    path: '',
    component: NovaAulaPage
  }
];

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [NovaAulaPage],

})
export class NovaAulaPageModule {}

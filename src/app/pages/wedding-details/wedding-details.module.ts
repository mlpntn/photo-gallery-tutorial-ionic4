import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeddingDetailsPage } from './wedding-details.page';

const routes: Routes = [
  {
    path: '',
    component: WeddingDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeddingDetailsPage]
})
export class WeddingDetailsPageModule {}

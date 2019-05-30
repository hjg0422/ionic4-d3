import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DThreeTwPage } from './d-three-tw.page';

const routes: Routes = [
  {
    path: '',
    component: DThreeTwPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DThreeTwPage]
})
export class DThreeTwPageModule {}

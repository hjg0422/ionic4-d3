import { DThreeTwPage } from './d-three-tw/d-three-tw.page';
import { DThreeOnePage } from './d-three-one/d-three-one.page';
import { DThreePageModule } from './d-three/d-three.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DThreePage } from './d-three/d-three.page';

import { IonicModule } from '@ionic/angular';

import { StudyListPage } from './study-list.page';

const routes: Routes = [
  {
    path: '',
    component: StudyListPage
  },
  {
    path: 'd-three',
    component: DThreePage,
  },
  {
    path: 'd-three-one',
    component: DThreeOnePage,
  },
  {
    path: 'd-three-tw',
    component: DThreeTwPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  declarations: [StudyListPage, DThreePage, DThreeOnePage, DThreeTwPage]
})
export class StudyListPageModule { }

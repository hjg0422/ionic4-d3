import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'study-list', loadChildren: './study-list/study-list.module#StudyListPageModule' },
  // { path: 'd-three-tw', loadChildren: './study-list/d-three-tw/d-three-tw.module#DThreeTwPageModule' },
  // { path: 'd-three-one', loadChildren: './study-list/d-three-one/d-three-one.module#DThreeOnePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

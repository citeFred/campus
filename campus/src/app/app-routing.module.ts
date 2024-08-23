import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SidemenuComponent } from './sidemenucomponent/sidemenu.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {LecturePageModule} from "./lecture/lecture.module"; // 사이드 메뉴 컴포넌트

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'top-bar', component: TopBarComponent
  },
  {
    path: 'sidemenu', component: SidemenuComponent
  },
  {
    path: 'exhibitionmain',
    loadChildren: () => import('./exhibitionmain/exhibitionmain.module').then( m => m.ExhibitionmainPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./firstpage/firstpage.module').then( m => m.FirstpagePageModule)
  },
  {
    path: 'secondpage',
    loadChildren: () => import('./secondpage/secondpage.module').then( m => m.SecondpagePageModule)
  },
  {
    path: 'thirdpage',
    loadChildren: () => import('./thirdpage/thirdpage.module').then( m => m.ThirdpagePageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'joinpage',
    loadChildren: () => import('./joinpage/joinpage.module').then( m => m.JoinpagePageModule)
  },
  {
    path: 'exhibition-details',
    loadChildren: () => import('./exhibition-details/exhibition-details.module').then( m => m.ExhibitionDetailsPageModule)
  },
  {
    path: 'exhibition-details/:id', loadChildren: () => import('./exhibition-details/exhibition-details.module').then(m => m.ExhibitionDetailsPageModule)
  },
// 사이드 메뉴 경로
  {
    path: 'lecture',
    loadChildren: () => import('./lecture/lecture.module').then( m => m.LecturePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

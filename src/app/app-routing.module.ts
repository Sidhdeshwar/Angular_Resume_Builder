import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'design1', loadChildren: () => import('./design1/design1.module').then(m => m.Design1Module) },

  { path: 'design2', loadChildren: () => import('./design2/design2.module').then(m => m.Design2Module) },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

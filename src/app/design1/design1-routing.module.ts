import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Design1Component } from './design1.component';
import { Preview1Component } from './preview1/preview1.component';

const routes: Routes = [
  {
   path: '',
  component: Design1Component
  },
  {
    path:'preview1',
    component:Preview1Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Design1RoutingModule { }

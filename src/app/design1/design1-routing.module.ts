import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Design1Component } from './design1.component';

const routes: Routes = [{ path: '', component: Design1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Design1RoutingModule { }

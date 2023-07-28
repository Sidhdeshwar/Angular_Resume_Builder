import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Design2Component } from './design2.component';

const routes: Routes = [{ path: '', component: Design2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Design2RoutingModule { }

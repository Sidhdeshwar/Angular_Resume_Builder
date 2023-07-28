import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Design2RoutingModule } from './design2-routing.module';
import { Design2Component } from './design2.component';


@NgModule({
  declarations: [
    Design2Component
  ],
  imports: [
    CommonModule,
    Design2RoutingModule
  ]
})
export class Design2Module { }

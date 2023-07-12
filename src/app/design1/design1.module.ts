import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Design1RoutingModule } from './design1-routing.module';
import { Design1Component } from './design1.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Design1Component
  ],
  imports: [
    CommonModule,
    Design1RoutingModule,
    ReactiveFormsModule
  ]
})
export class Design1Module { }

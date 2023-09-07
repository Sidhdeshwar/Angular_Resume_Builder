import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Design1RoutingModule } from './design1-routing.module';
import { Design1Component } from './design1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Preview1Component } from './preview1/preview1.component';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    Design1Component,
    Preview1Component
  ],
  imports: [
    CommonModule,
    Design1RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    QRCodeModule
  ]
})
export class Design1Module { }

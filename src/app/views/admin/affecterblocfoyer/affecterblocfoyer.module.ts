import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffecterblocfoyerRoutingModule } from './affecterblocfoyer-routing.module';
import { AffecterblocfoyerComponent } from './affecterblocfoyer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AffecterblocfoyerComponent
  ],
  imports: [
    CommonModule,
    AffecterblocfoyerRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class AffecterblocfoyerModule { }

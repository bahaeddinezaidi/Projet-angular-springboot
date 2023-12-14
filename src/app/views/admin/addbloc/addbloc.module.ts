import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddblocRoutingModule } from './addbloc-routing.module';
import { AddblocComponent } from './addbloc.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddblocComponent
  ],
  imports: [
    CommonModule,
    AddblocRoutingModule, ReactiveFormsModule,
  ]
})
export class AddblocModule { }

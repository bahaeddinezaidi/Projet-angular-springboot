import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyersRoutingModule } from './foyers-routing.module';
import { FoyersComponent } from '../foyers/foyers.component';


@NgModule({
  declarations: [
    FoyersComponent
  ],
  imports: [
    CommonModule,
    FoyersRoutingModule
  ]
})
export class FoyersModule { }

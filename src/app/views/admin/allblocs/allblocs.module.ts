import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllblocsRoutingModule } from './allblocs-routing.module';
import { AllblocsComponent } from './allblocs.component';
import { FoyerInfoComponent } from './foyer-info/foyer-info.component';



@NgModule({
  declarations: [
    AllblocsComponent,
    FoyerInfoComponent
  ],
  imports: [
    CommonModule
     ,
    AllblocsRoutingModule
  ]
})
export class AllblocsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffecterblocfoyerComponent } from './affecterblocfoyer.component';

const routes: Routes = [{
  path:'',component:AffecterblocfoyerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffecterblocfoyerRoutingModule { }

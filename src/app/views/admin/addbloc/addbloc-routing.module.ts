import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblocComponent } from './addbloc.component';

const routes: Routes = [
  {path:'',component:AddblocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddblocRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoyersComponent } from './foyers.component';

const routes: Routes = [{
  path:'',component:FoyersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyersRoutingModule { }

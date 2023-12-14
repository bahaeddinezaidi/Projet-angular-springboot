import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllblocsComponent } from './allblocs.component';

const routes: Routes = [
  {
    path:'',component:AllblocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllblocsRoutingModule { }

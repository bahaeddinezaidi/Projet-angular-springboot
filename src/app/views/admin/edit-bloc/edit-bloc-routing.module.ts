import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBlocComponent } from './edit-bloc.component';

const routes: Routes = [
  { path: '', component: EditBlocComponent },
  { path: ':id', component: EditBlocComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditBlocRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,FormsModule,DatePipe,ReactiveFormsModule
  ]
})
export class EditProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAdminRoutingModule } from './login-admin-routing.module';
import { LoginadminComponent } from './loginadmin/loginadmin.component';


@NgModule({
  declarations: [
    LoginadminComponent
  ],
  imports: [
    CommonModule,
    LoginAdminRoutingModule
  ]
})
export class LoginAdminModule { }

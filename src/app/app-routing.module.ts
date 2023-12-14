import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginAdminModule } from './views/admin/login-admin/login-admin.module';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { UserGuard } from './guards/user.guard';
import { FoyerInfoComponent } from './views/admin/allblocs/foyer-info/foyer-info.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'login',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)}
  ]},
  {path:'admin' , component:AdminLayoutComponent,canActivate: [AuthguardGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allblocs',loadChildren:()=>import('./views/admin/allblocs/allblocs.module').then(m=>m.AllblocsModule)},
    {path:'addbloc',loadChildren:()=>import('./views/admin/addbloc/addbloc.module').then(m=>m.AddblocModule)},
    {path:'editbloc',loadChildren:()=>import('./views/admin/edit-bloc/edit-bloc.module').then(m=>m.EditBlocModule)},
    {path:'foyers',loadChildren:()=>import('./views/admin/foyers/foyers.module').then(m=>m.FoyersModule)},
    {path:'affecterblocfoyer',loadChildren:()=>import('./views/admin/affecterblocfoyer/affecterblocfoyer.module').then(m=>m.AffecterblocfoyerModule)},
    {path:'loginadmin',loadChildren:()=>import('./views/admin/login-admin/login-admin.module').then(m=>LoginAdminModule)}
  ]},
  {path:'admin/login',component:AuthAdminLayoutComponent},
  {path:'etudiant' ,component:UserLayoutComponent,canActivate:[UserGuard],children:[
    {path:'profile/:name',loadChildren:()=>import('./views/user/profile/profile.module').then(m=>m.ProfileModule)},
    {path:'editprofile/:name',loadChildren:()=>import('./views/user/edit-profile/edit-profile/edit-profile.module').then(m=>m.EditProfileModule) 
      
    },
    {path:"foyer-info",component:FoyerInfoComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'admin', component: AdminComponent }, 
  { path: 'no-access', component: NoAccessComponent }, 
  // { path: 'logout', component: AdminComponent },
  { path: '', component: HomeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

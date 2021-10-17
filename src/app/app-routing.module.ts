import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUrlComponent } from './add-url/add-url.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewTabComponent } from './new-tab/new-tab.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:NavbarComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'addURL',
    component:AddUrlComponent
  },
  {
    path:'p/:id',
    component:NewTabComponent
  },
  {
    path:'charts/:id',
    component:ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

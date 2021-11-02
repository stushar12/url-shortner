import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUrlComponent } from './add-url/add-url.component';
import { NewTabComponent } from './new-tab/new-tab.component';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddUrlComponent,
    NewTabComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBUA09rx6BkvokHLcEmPuAhGZ2PnM3oY2k",
      authDomain: "practice-fc4a3.firebaseapp.com",
      projectId: "practice-fc4a3",
      storageBucket: "practice-fc4a3.appspot.com",
      messagingSenderId: "220300770051",
      appId: "1:220300770051:web:aeb2614a8e12724b96c736"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

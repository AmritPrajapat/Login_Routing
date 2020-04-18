import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from "@angular/forms"
import {ReactiveFormsModule} from '@angular/forms';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'
import { ActivateGuard } from './activate.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminDashbordComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [ActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

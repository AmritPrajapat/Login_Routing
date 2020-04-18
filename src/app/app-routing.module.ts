import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ActivateGuard } from './activate.guard';


const routes = [
  {path: 'login', component: LoginComponent},
  {path: 'reg', component: RegistrationComponent},
  {path : 'adminpanel', component : AdminDashbordComponent},
  {path : 'userpanel', component: UserDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

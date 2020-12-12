import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompanyComponent } from './auth/create-company/create-company.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'sign-up', component: SignupComponent },
  {path: 'create-company', component: CreateCompanyComponent },
  {path: 'login', component: LoginComponent },
  {path: 'user-dashboard', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateCompanyComponent } from './auth/create-company/create-company.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { CookieService } from 'ngx-cookie-service';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    CreateCompanyComponent,
    LoginComponent,
    UserComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

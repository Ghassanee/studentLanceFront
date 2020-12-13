import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { LoginPayload } from './login.payload';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  loginPayload: LoginPayload ;
  loginForm?: FormGroup;
  error: boolean;
  choice: boolean;
  
  constructor(private authService: AuthService, private router: Router,  private cookieService: CookieService) { 
    this.loginPayload ={
      email: '',
      password: ''
    };
  }

  ngOnInit() {
    this.error = false ;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      choice: new FormControl(false, Validators.required)
    })
  }

  login(){
    this.loginPayload!.email = this.loginForm!.get('email')!.value;
    this.loginPayload!.password = this.loginForm!.get('password')!.value;
    this.choice = this.loginForm!.get('choice')!.value;
    
    if(this.choice){
      this.authService.loginCompany(this.authService.cloneLogin(this.loginPayload))
    .subscribe(data =>{ console.log(data);
    },
    error => { this.error = true;} , 
    () => {
      this.error = false;
      this.router.navigate(['/']);
    });
    }
    else{
        this.authService.loginUser(this.authService.cloneLogin(this.loginPayload))
      .subscribe(data =>{ console.log(data);
      this.cookieService.set('user', JSON.stringify(data));
      },
      error => { this.error = true; this.ngOnInit()} , 
      () => {
        this.error = false;
        this.router.navigate(['/user-dashboard']);
        this.ngOnInit();
      });
    }
 }

}

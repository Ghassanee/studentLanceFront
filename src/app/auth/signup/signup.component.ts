import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../shared/auth.service';
import { SignupRequestPayload } from './singup-request.payload';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  cookieValue!: string;
  objectCookieValue?: object;
  hasCookieTrue!: boolean;
  hasCookieFalse!: boolean;
  private key = 'myCookie';
  private objectKey = 'myObjectCookie';
  signupRequestPayLoad: SignupRequestPayload ;
  signupForm?: FormGroup;
  public formData = new FormData();
  error: boolean;
  isLogged : boolean
  constructor(private authService: AuthService,  private cookieService: CookieService) { 
    
    this.signupRequestPayLoad ={
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        education: '',
        experience: 0,
        skills: '',
        introduction: '',
        userRef: '',
    };
  }

  ngOnInit() {
    this.error = false;
    this.signupForm = new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      phone: new FormControl('',[Validators.required]),
      education: new FormControl('',Validators.required),
      experience: new FormControl('',Validators.required),
      skills: new FormControl('',Validators.required),
      introduction: new FormControl('',Validators.required)
    })
  }

  signup(){
    this.signupRequestPayLoad!.firstname = this.signupForm!.get('firstname')!.value;
    this.signupRequestPayLoad!.lastname = this.signupForm!.get('lastname')!.value;
    this.signupRequestPayLoad!.email = this.signupForm!.get('email')!.value;
    this.signupRequestPayLoad!.password = this.signupForm!.get('password')!.value;
    this.signupRequestPayLoad!.address = this.signupForm!.get('address')!.value;
    this.signupRequestPayLoad!.phone = this.signupForm!.get('phone')!.value;
    this.signupRequestPayLoad!.education = this.signupForm!.get('education')!.value;
    this.signupRequestPayLoad!.experience = this.signupForm!.get('experience')!.value;
    this.signupRequestPayLoad!.skills = this.signupForm!.get('skills')!.value;
    this.signupRequestPayLoad!.introduction = this.signupForm!.get('introduction')!.value;
    this.signupRequestPayLoad!.userRef = Math.random().toString(36).substring(7);

    this.authService.signup(this.authService.cloneUser(this.signupRequestPayLoad), this.formData)
    .subscribe(data => {
      console.log(data);
      this.cookieService.set('user', JSON.stringify(data));
    },
    error => {
      this.ngOnInit();
      this.error = true;
    },
    ()=> this.ngOnInit());
    
    
  }

  uploadFiles( e:Event ) {
          let file = (e.target as HTMLInputElement).files ;
          console.log( 'file', file )
          for ( let i = 0; i < file.length; i++ ) {
              this.formData.append( "file", file[i], file[i]['name'] );
          }
      }


}

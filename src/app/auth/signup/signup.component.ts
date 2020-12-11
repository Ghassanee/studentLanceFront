import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { SignupRequestPayload } from './singup-request.payload';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  signupRequestPayLoad: SignupRequestPayload ;
  signupForm?: FormGroup;
  public formData = new FormData();
  
  constructor(private authService: AuthService) { 
    
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
      photo: new FormControl('',Validators.required),
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

    this.formData.append('userRef', this.authService.cloneUser(this.signupRequestPayLoad).userRef);

    this.authService.signup(this.authService.cloneUser(this.signupRequestPayLoad), this.formData);
    
    
  }

  uploadFiles( e:Event ) {
          let file = (e.target as HTMLInputElement).files ;
          console.log( 'file', file )
          for ( let i = 0; i < file.length; i++ ) {
              this.formData.append( "file", file[i], file[i]['name'] );
          }
      }


}

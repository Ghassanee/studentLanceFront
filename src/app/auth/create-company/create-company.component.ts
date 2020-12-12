import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { CreateCompanyPayload } from './create-company.payload';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  
  createCompanyPayload: CreateCompanyPayload ;
  createCompanyForm?: FormGroup;
  error: boolean;
  constructor(private authService: AuthService,private router: Router) { 
    this.createCompanyPayload ={
      companyName : '',
      companyRef: '',
      companyEmail: '',
      password: '',
      website: '',
      description: '',
      location: ''
    };
  }

  ngOnInit() {
    this.error = false ;
    this.createCompanyForm = new FormGroup({
      companyName: new FormControl('',Validators.required),
      companyEmail: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
      website: new FormControl('',Validators.required),
      description: new FormControl('',[Validators.required]),
      location: new FormControl('',Validators.required),
    })
  }

  createCompany(){
    this.createCompanyPayload!.companyName = this.createCompanyForm!.get('companyName')!.value;
    this.createCompanyPayload!.companyEmail = this.createCompanyForm!.get('companyEmail')!.value;
    this.createCompanyPayload!.password = this.createCompanyForm!.get('password')!.value;
    this.createCompanyPayload!.website = this.createCompanyForm!.get('website')!.value;
    this.createCompanyPayload!.description = this.createCompanyForm!.get('description')!.value;
    this.createCompanyPayload!.location = this.createCompanyForm!.get('location')!.value;
    this.createCompanyPayload!.companyRef = Math.random().toString(36).substring(7);

    this.authService.createCompany(this.authService.cloneCompany(this.createCompanyPayload))
    .subscribe(data =>{ console.log(data);
    },
    error => { this.error = true;} , 
    () => {
      this.error = false;
      this.router.navigate(['/login']);
      this.ngOnInit();
  })

 }
}

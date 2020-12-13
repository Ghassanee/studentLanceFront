import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JobPayload } from './job.payload';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  jobPayload: JobPayload ;
  jobForm?: FormGroup;
  error: boolean;
  company: any;
  panelOpenState: boolean;
  panelOpenState1: boolean;

  constructor(private jobService: ServiceService, private router: Router,  private cookieService: CookieService) {
    this.jobPayload ={
    jobOpeningRef: '',
    title: '',
    salary: 0,
    responsibilities: '',
    location: '',
    description: '',
    company: null
    };
   }
  ngOnInit(): void {
    this.panelOpenState = false;
    this.panelOpenState1 = false;
    this.company = JSON.parse(this.cookieService.get('company'));
    this.error = false ;
    this.jobForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      salary: new FormControl(0, Validators.required),
      responsibilities: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }


  create(){
    this.jobPayload!.title = this.jobForm!.get('title')!.value;
    this.jobPayload!.salary = this.jobForm!.get('salary')!.value;
    this.jobPayload!.responsibilities = this.jobForm!.get('responsibilities')!.value;
    this.jobPayload!.description = this.jobForm!.get('description')!.value;
    this.jobPayload!.location = this.jobForm!.get('location')!.value;
    this.jobPayload!.company = this.company;
    this.jobPayload!.jobOpeningRef = Math.random().toString(36).substring(7);

    this.jobService.create(this.jobService.cloneJob(this.jobPayload))
    .subscribe(data =>{ console.log(data);
    },
    error => { this.error = true;} , 
    () => {
      this.error = false;
      this.ngOnInit();
  })

 }


}

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JobUserPayload } from './jobUser.payload';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private cookieService: CookieService, private userService: UserServiceService) { }
  user: any;
  jobs: any;
  submittedJobs: any;
  panelOpenState: boolean;
  panelOpenState1: boolean;
  clicked: boolean;
  jobUser: JobUserPayload;
  ngOnInit(): void {
    this.clicked = false;
    this.panelOpenState = false;
    this.panelOpenState1 = false;
    this.user = JSON.parse(this.cookieService.get('user'));
    this.userService.getJobs()
    .subscribe(data =>{ console.log(data);
      this.jobs = data;
    });
    this.userService.getSubmittedJobs(this.user.userRef)
    .subscribe(data =>{ console.log(data);
      this.submittedJobs = data;
    });
  }
  submit(job: any){
    this.jobUser.jobOpening = job;
    this.jobUser.user = this.user;
    this.jobUser.jobUserRef = Math.random().toString(36).substring(7);
    this.userService.submitJob(this.jobUser)
    .subscribe(data =>{ console.log(data);
    });
  }
  actionMethod(event: any) {
    event.target.disabled = true;
}
}

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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
  panelOpenState: boolean;
  panelOpenState1: boolean;
  ngOnInit(): void {
    this.panelOpenState = false;
    this.panelOpenState1 = false;
    this.user = JSON.parse(this.cookieService.get('user'));
    this.userService.getJobs()
    .subscribe(data =>{ console.log(data);
      this.jobs = data;
    })
  }

}

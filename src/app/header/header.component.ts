import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cookieService: CookieService) { }
  user: any;
  company: any;
  ngOnInit(): void {
    this.loggedIn();
  }
  loggedIn(){
    if (this.cookieService.check('user')) this.user = JSON.parse(this.cookieService.get('user'));
    if (this.cookieService.check('company')) this.company = JSON.parse(this.cookieService.get('company'));
   
  }
  logout(){
    this.cookieService.deleteAll();
    this.loggedIn();
  }
}

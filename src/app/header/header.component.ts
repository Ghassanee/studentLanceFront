import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  isLoggedInU: boolean;
  isLoggedInC: boolean;
  user: any;
  company: any;
  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user'));
    this.company = JSON.parse(this.cookieService.get('company'));
    if (this.user != null ){
      this.isLoggedInU = true;
    }
    if ( this.company != null){
      this.isLoggedInC = true;
    }
    else{
      this.isLoggedInU = false;
      this.isLoggedInC = false;
    }
  }

}

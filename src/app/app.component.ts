import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentLanceFront';
  user: any;
  company: any;
  constructor(private router: Router, private cookieService: CookieService){
    if (this.router.url == '' ) {
    if (this.cookieService.check('user')) this.user = JSON.parse(this.cookieService.get('user'));
    if (this.cookieService.check('company')) this.company = JSON.parse(this.cookieService.get('company'));
    if (this.user != null ){
      this.router.navigate(['/user-dashboard']);
    }
    if ( this.company != null){
      this.router.navigate(['/company-dashboard']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  }
}

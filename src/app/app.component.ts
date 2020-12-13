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

  constructor(private router: Router, private cookieService: CookieService){
    if (JSON.parse(this.cookieService.get('user')) != null){
      this.router.navigate(['/user-dashboard']);
    }else{
      this.router.navigate(['/login']);
    }

  }
}

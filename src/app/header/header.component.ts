import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  isLoggedIn: boolean;
  user: any;
  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user'));
    if (this.user != null){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
  }

}

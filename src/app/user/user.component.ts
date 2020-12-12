import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  user: any;
  ngOnInit(): void {
    this.user = this.cookieService.get('user');
  }

}

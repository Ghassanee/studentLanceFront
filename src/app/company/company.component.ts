import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  company: any;
  panelOpenState: boolean;
  panelOpenState1: boolean;
  ngOnInit(): void {
    this.panelOpenState = false;
    this.panelOpenState1 = false;
    this.company = JSON.parse(this.cookieService.get('company'));
  }

}

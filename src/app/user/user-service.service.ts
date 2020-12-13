import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getJobs(): Observable<any>{
    return this.httpClient.get(`https://shrouded-beyond-14016.herokuapp.com/StudentLance/JobOpening/`);
  }
}

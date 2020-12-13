import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobUserPayload } from './jobUser.payload';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getJobs(): Observable<any>{
    return this.httpClient.get(`https://shrouded-beyond-14016.herokuapp.com/StudentLance/JobOpening/`);
  }
  
  getSubmittedJobs(ref: string): Observable<any>{
    return this.httpClient.get(`https://shrouded-beyond-14016.herokuapp.com/StudentLance/JobOpening_User/${ref}`);
  }
  submitJob(job: JobUserPayload): Observable<any>{
    return this.httpClient.post(`https://shrouded-beyond-14016.herokuapp.com/StudentLance/JobOpening_User/`, job);
  }
}

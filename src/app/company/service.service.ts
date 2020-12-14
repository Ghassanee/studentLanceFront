import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobPayload } from './job.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  create(jobPayload: JobPayload): Observable<any> {
    return this.httpClient.post('https://shrouded-beyond-14016.herokuapp.com/StudentLance/JobOpening/', jobPayload);
  }

  getJobs(companyRef : string): Observable<any>{
    return this.httpClient.get(`https://shrouded-beyond-14016.herokuapp.com/StudentLance/JobOpening/company/${companyRef}`);
  }

  getUsersPerJob(jobRef : string): Observable<any>{
    return this.httpClient.get(`https://shrouded-beyond-14016.herokuapp.com/StudentLance/JobOpeninng_User/jobOpening/${jobRef}`);
  }

  cloneJob(job: JobPayload) {
    const myClone =  new JobPayload() ;
    myClone.description= job.description;
    myClone.jobOpeningRef= job.jobOpeningRef;
    myClone.location= job.location;
    myClone.responsibilities= job.responsibilities;
    myClone.salary= job.salary;
    myClone.title= job.title;
    myClone.company= job.company;
    return myClone;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupRequestPayload } from '../signup/singup-request.payload';
import { Observable } from 'rxjs';
import { CreateCompanyPayload } from '../create-company/create-company.payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signup(signupRequestPayload: SignupRequestPayload, formData:FormData): Observable<any> {
    return this.httpClient.post('https://shrouded-beyond-14016.herokuapp.com/StudentLance/User/create', signupRequestPayload);
  }

  createCompany(createCompanyPayload : CreateCompanyPayload) {
    return this.httpClient.post('https://shrouded-beyond-14016.herokuapp.com/StudentLance/company/create', createCompanyPayload);
  }
   cloneUser(client: SignupRequestPayload) {
    const myClone =  new SignupRequestPayload() ;
    myClone.firstname= client.firstname;
    myClone.lastname= client.lastname;
    myClone.email= client.email;
    myClone.password= client.password;
    myClone.address= client.address;
    myClone.phone= client.phone;
    myClone.education= client.education;
    myClone.experience= client.experience;
    myClone.skills= client.skills;
    myClone.introduction= client.introduction;
    myClone.userRef = client.userRef;
    return myClone;
  }
  
  cloneCompany(client: CreateCompanyPayload) {
    const myClone =  new CreateCompanyPayload() ;
    myClone.companyEmail= client.companyEmail;
    myClone.companyRef= client.companyRef;
    myClone.description= client.description;
    myClone.location= client.location;
    myClone.password= client.password;
    myClone.website= client.website;
    myClone.companyName= client.companyName;
    return myClone;
  }
}

   





import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupRequestPayload } from '../signup/singup-request.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signup(signupRequestPayload: SignupRequestPayload, formData:FormData): Observable<any> {
    return this.httpClient.post('https://shrouded-beyond-14016.herokuapp.com/StudentLance/User/create', signupRequestPayload);
  }
  postImage(signupRequestPayload: SignupRequestPayload, formData:FormData): Observable<any> {
    return this.httpClient.put('https://shrouded-beyond-14016.herokuapp.com/StudentLance/User/postImage',formData);
  }


   



}


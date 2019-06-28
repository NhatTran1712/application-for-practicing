import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginInput } from '../login/login-input';
import { SignUpInput } from '../register/register-input';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/rest/login';
  private signupUrl = 'http://localhost:8080/rest/register';
 
  constructor(private http: HttpClient) {}
 
  attemptAuth(credentials: LoginInput): Observable<any> {
    console.log("credentials ", credentials);
    return this.http.post(this.loginUrl, credentials, httpOptions);
  }
 
  signUp(signUpInput: SignUpInput): Observable<string> {
    return this.http.post<string>(this.signupUrl, signUpInput, httpOptions);
  }
}

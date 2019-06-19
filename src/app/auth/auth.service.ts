import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginInput } from '../login/login-input';
import { SignUpInfo } from './signup-info';

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
 
  // attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
  //   return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  // }

  attemptAuth(credentials: LoginInput): Observable<any> {
    console.log("credentials ", credentials);
    return this.http.post(this.loginUrl, credentials, httpOptions);
  }
 
  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}

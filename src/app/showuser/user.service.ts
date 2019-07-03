import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private baseUrl = 'http://localhost:8080/rest/users';

  constructor(private http: HttpClient) { }
 
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, httpOptions);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, httpOptions);
  }
}
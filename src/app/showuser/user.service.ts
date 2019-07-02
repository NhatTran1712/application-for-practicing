import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private baseUrl = 'http://localhost:8080/rest/users';

  constructor(private http: HttpClient) { }
 
  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}


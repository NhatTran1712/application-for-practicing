import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private baseUrl = 'http://localhost:8080/rest/devices';

  constructor(private http: HttpClient) { }

  getDeviceIp(): Observable<any>{
    return this.http.get(`${this.baseUrl}/ipconfig`, httpOptions);
  }

  getDeviceInfor(): Observable<any>{
    return this.http.get(`${this.baseUrl}/information`, httpOptions);
  }

  getWritedDeviceIp(ip: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${ip}/ipconfig`, httpOptions);
  }

  getWritedDeviceInfor(ip: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${ip}/information`, httpOptions);
  }

  // CHECK IP WITH RANGE_EX

  getIpDevices(): any{
    return this.http.get(`${this.baseUrl}/ips`, httpOptions);
  }
}
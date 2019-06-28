import { Component, OnInit } from '@angular/core';

import { LoginService } from './login/login.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private authority: string = '';
  private username: string = '';
  private id: number = 0;
 
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    if(this.loginService.isLogin()){
      this.authority = this.loginService.getAuthorities();
      this.id = this.loginService.getId();
      this.username = atob(this.loginService.getUsername());
    }
  }
}
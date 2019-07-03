import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user';
import { UserService } from '../showuser/user.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userOutputs: Observable<User[]>;
  isAuthenticate = false;

  constructor(
    private userService: UserService,
    private loginService: LoginService) { }

  checkAuthenticate(): void {
    if(this.loginService.isLogin() && (this.loginService.getAuthorities() === 'admin')){
      this.isAuthenticate = true;
    }
    
  }

  loadUserOutputs(): void{
    if(this.isAuthenticate){
      this.userOutputs = this.userService.getUsers();
      console.log(this.userOutputs);
    }
  }

  ngOnInit() {
    this.checkAuthenticate();
    this.loadUserOutputs();
  }
}

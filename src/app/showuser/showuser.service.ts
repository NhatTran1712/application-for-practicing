import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user';
import { UserService } from './user.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ShowUserService {
  users: Observable<User[]>;
  
  constructor(
    private userService: UserService,
    private loginService: LoginService) { }

  loadData(){
    this.users = this.userService.getUsers();
    console.log(this.users);
  }
  
  public checkAuth(roleInput: string): boolean {
    let authority: string;

    if(this.loginService.isLogin()){
      authority = this.loginService.getAuthorities();
      if (authority === roleInput) {
        return true;
      }
    }
    return false;
  }
  
  getUsers(): Observable<User[]>{
    return this.users;
  }
}

import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShowUserService {
  users: Observable<User[]>;
  
  constructor(
    private userService: UserService,
    private token: TokenStorageService) { }

  loadData(){
    this.users = this.userService.getUsers();
  }
  
  public checkAuth(roleInput: string): any {
    let roles: Array<string>;
    let isAuth = false;

    if(this.token.getToken()){
      roles = this.token.getAuthorities();
      roles.forEach(role => {
        if (role === roleInput) {
          isAuth = true;
        }
        else{
          isAuth = false;
        }
      });
    }
    else{
      isAuth = false;
    }
    if(isAuth){
      return true;
    }
    return false;
  }
  
  getUsers(): Observable<User[]>{
    return this.users;
  }
}

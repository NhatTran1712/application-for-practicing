import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user';
import { UserService } from './user.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ShowUserService {
  
  constructor(private loginService: LoginService) { }

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
}

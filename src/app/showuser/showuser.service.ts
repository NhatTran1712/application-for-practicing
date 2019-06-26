import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserOutput } from '../user/user-output';

@Injectable({
  providedIn: 'root'
})
export class ShowUserService {
  users: User[];
  userOutputs: UserOutput[];
  
  constructor(
    private userService: UserService,
    private token: TokenStorageService) { }

  loadData(){
    this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users as User[];
      console.log(this.users);
    });
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

  tranferToUserOutput(): void{
    let userOutput: UserOutput;

    this.users.forEach(user => {
      userOutput.id = user.id;
      userOutput.username = user.username;
      user.roles.forEach(role => {
        if (role === 'ROLE_ADMIN') {
          userOutput.roles = 'admin';
        }
        else{
          userOutput.roles = 'user';
        }
      });
      this.userOutputs.push(userOutput);
    });
  }

  getUserOutput(): UserOutput[] {
    return this.userOutputs;
  }
}

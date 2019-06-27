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
  
  constructor(
    private userService: UserService,
    private token: TokenStorageService) { }

  // loadData(){
  //   this.userService.getUsers().pipe(
  //     map((users: Array<any>) => {
  //       let result:Array<User> = [];

  //       if (users) {
  //         users.forEach((erg) => {
  //           result.push(new User(erg.id, erg.username, erg.roles));
  //         });
  //       }
  //     return result; // <<<=== missing return
  //   }))
  //   .subscribe(user => this.user = user);
  //   console.log(this.users);
  //   // let userOutput: UserOutput;

  //   // this.userService.getUsers().subscribe(users => {
  //   //   console.log(users);
  //   //   users.forEach(user => {
  //   //     console.log(user);
  //   //     userOutput.id = user.id;
  //   //     userOutput.username = user.username;
  //   //     user.roles.every(role => {
  //   //       if (role === 'ROLE_ADMIN') {
  //   //         userOutput.roles = 'admin';
  //   //       }
  //   //       else{
  //   //         userOutput.roles = 'user';
  //   //       }
  //   //     });
  //   //     this.userOutputs.push(userOutput);
  //   //     console.log(this.userOutputs);
  //   //   });
  //   // });
  //   // console.log(this.userOutputs);
  // }

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
  // transferToUserOutputs(): UserOutput[]{
  //   let userOutputs: UserOutput[];
  //   let userOutput: UserOutput;

  //   this.users.forEach(user => {
  //         console.log(user);
  //         userOutput.id = user.id;
  //         userOutput.username = user.username;
  //         user.roles.every(role => {
  //           if (role === 'ROLE_ADMIN') {
  //             userOutput.roles = 'admin';
  //           }
  //           else{
  //             userOutput.roles = 'user';
  //           }
  //         });
  //         this.userOutputs.push(userOutput);
  //         console.log(this.userOutputs);
  //       });
  // }
}

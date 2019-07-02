import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../showuser/user.service';
import { ShowUserService } from '../showuser/showuser.service';
import { LoginService } from '../login/login.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_id: number;
  userOutput: any;
  isAuthenticate = false;
  authority: string;
  errorMessage: string = '';
  isLoadingFailed = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private showUserService: ShowUserService,
    private loginService : LoginService) { }
  
  getUserId(): void {
    this.route.params.subscribe(event => {
      this.user_id = event.user_id;
      console.log(this.user_id);
    });
  }

  loadUserOutput(): void{
    if(this.isAuthenticate){
      this.userService.getUser(this.user_id).subscribe(
        data => {
          if(data!=null){
            console.log(data);
            this.userOutput = data;
            this.userOutput.username = atob(this.userOutput.username);
            console.log(this.userOutput.username);
            console.log(this.userOutput);
          }
          else{
            this.errorMessage = 'Account did not exited';
            this.isLoadingFailed = true;
            console.log(this.errorMessage);
          }
        },
      );
    }
  }

  getAuthority(): void {
    this.authority = this.loginService.getAuthorities();
  }

  checkAuth(): void{
    if(this.showUserService.checkAuth('user')){
      // console.log('user');
      // console.log(this.user_id);
      // console.log(this.loginService.getId());
      if(this.user_id == this.loginService.getId()){
        this.isAuthenticate = true;
      }
    }
    else if(this.showUserService.checkAuth('admin')){
      this.isAuthenticate = true;
    }
    console.log(this.isAuthenticate);
  }

  ngOnInit() {
    this.getUserId();
    this.checkAuth();
    this.loadUserOutput();
    this.getAuthority();
  }
}
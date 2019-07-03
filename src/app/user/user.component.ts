import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../showuser/user.service';
import { LoginService } from '../login/login.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userIdInput: number;
  userOutput: any;
  isAuthenticate = false;
  authority = '';
  errorMessage: string = '';
  isLoadingFailed = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private loginService : LoginService) { }
  
  getUserId(): void {
    this.route.params.subscribe(event => {
      this.userIdInput = event.user_id;
      console.log(this.userIdInput);
    });
  }

  loadUserOutput(): void{
    if(this.isAuthenticate){
      this.userService.getUser(this.userIdInput).subscribe(
        data => {
          if(data!=null){
            console.log(data);
            this.userOutput = data;
            if((this.authority === 'user') || (this.userIdInput == this.loginService.getId())){
              this.userOutput.username = atob(this.userOutput.username);
            }
            console.log(this.userOutput.username);
            console.log(this.userOutput);
          }
          else{
            this.errorMessage = 'Account did not exited';
            this.isLoadingFailed = true;
            console.log(this.errorMessage);
          }
        }
      );
    }
  }

  getAuthority(): void {
    if(this.loginService.isLogin()){
      this.authority = this.loginService.getAuthorities();
    }
  }

  checkAuth(): void{
    if(this.authority === 'user'){
      // console.log('user');
      // console.log(this.user_id);
      // console.log(this.loginService.getId());
      if(this.userIdInput == this.loginService.getId()){
        this.isAuthenticate = true;
      }
    }
    else if(this.authority === 'admin'){
      this.isAuthenticate = true;
    }
    console.log(this.isAuthenticate);
  }

  ngOnInit() {
    this.getUserId();
    this.getAuthority();
    this.checkAuth();
    this.loadUserOutput();
  }
}
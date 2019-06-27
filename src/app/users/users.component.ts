import { Component, OnInit } from '@angular/core';

import { ShowUserService } from '../showuser/showuser.service';
import { UserOutput } from '../user/user-output';
import { Observable } from 'rxjs';
import { UserService } from '../showuser/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userOutputs: Observable<User[]>;
  isAuthenticate = false;

  constructor(private showUserService: ShowUserService, private userService: UserService) { }

  checkAuthenticate(): void {
    if(this.showUserService.checkAuth('ROLE_ADMIN')){
      this.isAuthenticate = true;
    }
    else {
      this.isAuthenticate = false;
    }
  }

  loadUserOutputs(): void{
    if(this.isAuthenticate){
      this.showUserService.loadData();
      // this.userOutputs = this.showUserService.getUserOutput();
      this.userOutputs = this.userService.getUsers();
    }
  }

  ngOnInit() {
    this.checkAuthenticate();
    this.loadUserOutputs();
  }
}

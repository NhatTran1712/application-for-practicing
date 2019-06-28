import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShowUserService } from '../showuser/showuser.service';
import { User } from '../user/user';
import { UserService } from '../showuser/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userOutputs: Observable<User[]>;
  isAuthenticate = false;

  constructor(
    private showUserService: ShowUserService,
    private userService: UserService) { }

  checkAuthenticate(): void {
    if(this.showUserService.checkAuth('admin')){
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

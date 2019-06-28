import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShowUserService } from '../showuser/showuser.service';
import { User } from '../user/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userOutputs: Observable<User[]>;
  isAuthenticate = false;

  constructor(private showUserService: ShowUserService) { }

  checkAuthenticate(): void {
    if(this.showUserService.checkAuth('admin')){
      this.isAuthenticate = true;
    }
  }

  loadUserOutputs(): void{
    if(this.isAuthenticate){
      this.showUserService.loadData();
      this.userOutputs = this.showUserService.getUsers();
      console.log(this.userOutputs);
    }
  }

  ngOnInit() {
    this.checkAuthenticate();
    this.loadUserOutputs();
  }
}

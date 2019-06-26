import { Component, OnInit } from '@angular/core';

import { ShowUserService } from '../showuser/showuser.service';
import { UserOutput } from '../user/user-output';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userOutputs: UserOutput[];
  isAuthenticate = false;

  constructor(private showUserService: ShowUserService) { }

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
      this.showUserService.tranferToUserOutput();
      this.userOutputs = this.showUserService.getUserOutput();
    }
  }

  ngOnInit() {
    this.checkAuthenticate();
    this.loadUserOutputs();
  }
}

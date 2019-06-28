import { Component, OnInit } from '@angular/core';
import { UserService } from '../showuser/user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import { ShowUserService } from '../showuser/showuser.service';
import { TokenStorageService } from '../auth/token-storage.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_id: number;
  userOutput: User;
  isAuthenticate = false;
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private showUserService: ShowUserService,
    private token : TokenStorageService) { }
  
  loadUserOutput(): void{
    if(this.isAuthenticate){
      this.route.params.subscribe(event => {
        this.user_id = event.user_id;
      });
      console.log(this.user_id);
      this.userService.getUser(this.user_id).subscribe(
        data => {
          this.userOutput = data;
        });
      console.log(this.userOutput);
    }
  }

  checkAuth(): void{
    if(this.showUserService.checkAuth('user')){
      if(this.user_id === this.token.getID()){
        this.isAuthenticate = true;
      }
    }
    else if(this.showUserService.checkAuth('admin')){
      this.isAuthenticate = true;
    }
  }

  ngOnInit() {
    this.checkAuth();
    this.loadUserOutput();
  }
}
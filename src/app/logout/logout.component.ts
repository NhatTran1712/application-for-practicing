import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private token: TokenStorageService) { }

  logout(){
    this.token.signOut();
    window.location.href='/home';
  }

  ngOnInit() {
    this.logout();
  }

}

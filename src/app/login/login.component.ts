import { Component, OnInit } from '@angular/core';
 
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { LoginInput } from './login-input';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInput: LoginInput;
 
  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService
  ) { }
 
  checkLogin(): void{
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getAuthorities();
    }
  }

  ngOnInit() {
    this.checkLogin();
  }
 
  onSubmit() {
    console.log(this.form);
    this.loginInput = new LoginInput(
      btoa(this.form.username),
      btoa(this.form.password));
    
    console.log(this.loginInput);
    this.authService.attemptAuth(this.loginInput).subscribe(
      data => {
        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveUsername(data.username);
        this.tokenStorageService.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorageService.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
    console.log("token ",this.tokenStorageService.getToken);
    console.log("username ",this.tokenStorageService.getUsername);
  }
 
  reloadPage() {
    window.location.reload();
  }
}
import { Component, OnInit } from '@angular/core';
 
import { AuthService } from '../auth/auth.service';
import { SignUpInput } from './signup-input';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInput: SignUpInput;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
 
  constructor(private authService: AuthService) { }
 
  ngOnInit() { }
 
  onSubmit() {
    console.log(this.form);
    if(this.form.confirmpassword !== this.form.password){
      this.isSignedUp = false;
      this.isSignUpFailed = true;
      this.errorMessage = 'Password Confirm does not match';
    }
    else{
      this.signupInput = new SignUpInput(
        btoa(this.form.username),
        btoa(this.form.password));

      this.authService.signUp(this.signupInput).subscribe(
        data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  }
}
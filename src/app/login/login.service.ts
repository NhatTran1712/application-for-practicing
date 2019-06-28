import { Injectable } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private tokenStorageService: TokenStorageService) { }
  
  isLogin(): boolean{
    if (this.tokenStorageService.getToken()) {
      return true;
    }
    return false;
  }

  getId(): number{
    return this.tokenStorageService.getID();
  }

  getUsername(): string{
      return this.tokenStorageService.getUsername();
  }

  getAuthorities(): string{
    let authors: string[];
    let authority: string;

    authors = this.tokenStorageService.getAuthorities();
    authors.every(author => {
      if (author === 'ROLE_ADMIN') {
        authority = 'admin';
        return false;
      }
      else if (author === 'ROLE_PM') {
        authority = 'pm';
        return false;
      }
      authority = 'user';
      return true;
    });
    return authority;
  }
}

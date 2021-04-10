import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    if (this.router.url === '/login' ||
        this.router.url === '/create-website' ||
        this.router.url === '/update/' + this.router.url.substr(this.router.url.length - 2, 2) ||
        this.router.url === '/details/' + this.router.url.substr(this.router.url.length - 2, 2)) {
      // console.log(this.router.url);
      return true;
    }
    else {
      // console.log(this.router.url);

      return false;
    }
  }
}

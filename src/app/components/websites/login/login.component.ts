import { Component, OnInit } from '@angular/core';
import {User} from './model/user';
import {LoginService} from './service/login.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private loginService: LoginService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  enterUser(): void {
    this.loginService.loginUser(this.user).subscribe(data => {
      console.log(this.user.username + ' ' + this.user.password);
        if (this.user.username === 'username' && this.user.password === 'password') {
          console.log(data);
          this.gotToList();
        }
      },
      error => console.log(error));
  }

  gotToList(): void{
    this.router.navigate(['/websites']);
  }

  onSubmit(): void {
    console.log(this.user);
    this.enterUser();
  }



}

import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../register/model/user';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private dialog: MatDialog) { }

  user: User = new User();

  ngOnInit(): void {
  }

  enterUser(): void {

    localStorage.setItem('user', this.user.firstName + this.user.lastName);
    this.loginService.userRegistration(this.user).subscribe((data) => {
        if (data.toString() === 'true') {
          console.log(this.user.email+ this.user.password);
          this.gotToList();
        }
    });
  }



  // accessUser(): string {
  //   this.loginService.loginUser(this.user2).subscribe(() => {
  //     console.log(this.user2.username);
  //     this.username = this.user2.username;
  //   });
  //   return this.username;
  // }

  gotToList(): void{
    this.router.navigate(['/websites']);
  }

  onSubmit(): void {
    this.enterUser();
  }

}

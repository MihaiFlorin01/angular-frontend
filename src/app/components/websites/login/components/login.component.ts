import {Component, OnInit} from '@angular/core';
import {User} from '../../register/model/user';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  user: User = new User();

  ngOnInit(): void {
  }

  loginUser(): void {
    localStorage.setItem('user', this.user.username);
    this.loginService.userRegistration(this.user).subscribe((data) => {
        if (data.toString() === 'true') {
          localStorage.setItem('auth', 'true');
          console.log(this.user.username + ' ' + this.user.password);
          this.gotToList();
        }
    });
  }

  gotToList(): void{
    this.router.navigate(['/websites']);
  }

  onSubmit(): void {
    this.loginUser();
  }

}

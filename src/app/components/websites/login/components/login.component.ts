import {Component, OnInit} from '@angular/core';
import {User} from '../../register/model/user';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Website} from "../../../../model/website";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  hide = true;

  user: User = new User();

  loginForm: FormGroup = this.formBuilder.group({
    username: [, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)], updateOn: 'change' }],
    password: [, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)], updateOn: 'change' }],
  });


  ngOnInit(): void {
  }

  loginUser(): void {
    localStorage.setItem('user', this.user.username);
    this.loginService.userLogin(this.user).subscribe((data) => {
        if (data.toString() === 'true') {
          localStorage.setItem('auth', 'true');
          this.loginService.findEmailByUsername(this.user.username).subscribe(data => {
            console.log('Email is here: ' + JSON.stringify(data));
            localStorage.setItem('email', data.email);
          }, error => console.log(error));
          this.snackBar.open('Successful login!', 'Close', {
            duration: 3000,
          });
          this.goToList();
        }
        else {
          this.snackBar.open('Username or password is wrong!', 'Close', {
            duration: 3000,
          });
        }
    });
  }

  goToList(): void{
    this.router.navigate(['/websites']);
  }

  onSubmit(): void {
    this.loginUser();
  }

}

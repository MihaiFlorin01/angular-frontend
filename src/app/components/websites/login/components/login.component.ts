import {Component, OnInit} from '@angular/core';
import {User} from '../../register/model/user';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    username: [, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(30)], updateOn: 'change' }],
    password: [, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(30)], updateOn: 'change' }],
  });


  ngOnInit(): void {
  }

  loginUser(): void {
    localStorage.setItem('user', this.user.username);
    this.loginService.userRegistration(this.user).subscribe((data) => {
        if (data.toString() === 'true') {
          localStorage.setItem('value', 'true');
          console.log(this.user.username + ' ' + this.user.password);
          this.goToList();
        }
    });
  }

  goToList(): void{
    this.router.navigate(['websites']);
  }

  onSubmit(): void {
    this.loginUser();
    if (localStorage.getItem('value') === 'true') {
      this.snackBar.open('Successful login!', 'Close', {
        duration: 3000,
      });
    }
    else {
      this.snackBar.open('Username or password is wrong!', 'Close', {
        duration: 3000,
      });
    }
  }

}

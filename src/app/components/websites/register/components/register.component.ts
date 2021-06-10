import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../service/register.service';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router, private snackBar: MatSnackBar, private formBuilder: FormBuilder) {}

  hide = true;

  user: User = new User();

  registerForm: FormGroup = this.formBuilder.group({
    username: [, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(30)], updateOn: 'change' }],
    email: [, {validators: [Validators.required, Validators.email], updateOn: 'change', }],
    password: [, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(30)], updateOn: 'change' }],
  });

  ngOnInit(): void {
  }

  registerUser(): void {
    this.registerService.userRegistration(this.user).subscribe(() => {
      this.snackBar.open('Successful registration!', 'Close', {
        duration: 3000,
      });
      this.goToList();
    });
  }

  goToList(): void{
    this.router.navigate(['login']);
  }

  onSubmit(): void {
    this.registerUser();
  }

}

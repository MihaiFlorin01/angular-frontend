import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../service/register.service';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }

  user: User = new User();

  ngOnInit(): void {
  }

  registerUser(): void {
    this.registerService.userRegistration(this.user).subscribe(data => {
      console.log(data);
      this.gotToList();
    });
  }

  gotToList(): void{
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    this.registerUser();
  }

}

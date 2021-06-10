import {Component, OnInit} from '@angular/core';
import {Website} from '../../../model/website';
import {WebsiteService} from '../../../service/website.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-website',
  templateUrl: './create-website.component.html',
  styleUrls: ['./create-website.component.css']
})
export class CreateWebsiteComponent implements OnInit {

  user = localStorage.getItem('user');
  website: Website = new Website();
  selectedPeriod = '';
  periods = ['none', '15', '30', '60'];

  constructor(private websiteService: WebsiteService, private router: Router, private dialog: MatDialog, private formBuilder: FormBuilder) { }

  createForm: FormGroup = this.formBuilder.group({
    name: [, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)], updateOn: 'change' }],
    url: [, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)], updateOn: 'change' }],
  });

  ngOnInit(): void {
  }

  save(): void {
    this.website.period = this.selectedPeriod;
    this.website.email = localStorage.getItem('email');
    this.websiteService.create(this.website).subscribe((data) => {
        console.log(data);
        this.dialog.open(DialogCreateWebsite);
        this.goToList();
    },
    error => console.log(error));
  }

  goToList(): void{
    this.router.navigate(['/websites']);
  }

  selected(): void {
    console.log(this.selectedPeriod);
  }

  onSubmit(): void {
    console.log(this.website);
    this.save();
  }
}

@Component({
  selector: 'Dialog-Success',
  templateUrl: 'dialogCreateWebsite.html',
})

export class DialogCreateWebsite {}

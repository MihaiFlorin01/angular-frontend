import {Component, OnInit} from '@angular/core';
import {Website} from '../../../model/website';
import {WebsiteService} from '../../../service/website.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-create-website',
  templateUrl: './create-website.component.html',
  styleUrls: ['./create-website.component.css']
})
export class CreateWebsiteComponent implements OnInit {

  user = localStorage.getItem('user');
  website: Website = new Website();
  constructor(private websiteService: WebsiteService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  save(): void {
    this.websiteService.create(this.website).subscribe(data => {
      console.log(data);
      this.dialog.open(DialogCreateWebsite);
      this.gotToList();
    },
    error => console.log(error));
  }

  gotToList(): void{
    this.router.navigate(['/websites']);
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

import {Component, OnInit} from '@angular/core';
import {Website} from '../../../model/website';
import {WebsiteService} from '../../../service/website.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogDeleteWebsite} from '../delete/DialogDeleteWebsite';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css'],
})

export class WebsiteListComponent implements OnInit {
  website: Website;
  websites: Website[];
  columnsToDisplay = ['name', 'url', 'status', 'actions', 'create_website'];

  constructor(private websiteService: WebsiteService,
              private router: Router,
              private dialog: MatDialog)
  {}

  ngOnInit(): void {
    this.getWebsite();
  }

  private getWebsite(): void {
    this.websiteService.getList().subscribe(data => {
      this.websites = data;
    });
  }

  websiteDetails(id: number): void {
    this.router.navigate(['details', id]);
  }

  update(id: number): void {
    this.router.navigate(['update', id]);
  }

  delete(id: number): void {
    this.dialog.open(DialogDeleteWebsite, {
      data: {
        dataKey: id
      }
    }).afterClosed().subscribe(r => {
      this.getWebsite();
    });
  }
}

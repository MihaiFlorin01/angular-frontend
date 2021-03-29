import { Component, OnInit } from '@angular/core';
import {Website} from '../../../model/website';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../service/website.service';

@Component({
  selector: 'app-website-details',
  templateUrl: './website-details.component.html',
  styleUrls: ['./website-details.component.css']
})
export class WebsiteDetailsComponent implements OnInit {

  id: number;
  website: Website;
  constructor(private route: ActivatedRoute, private websiteService: WebsiteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.website = new Website();
    this.websiteService.getById(this.id).subscribe(data => {
      this.website = data;
    });
  }

}

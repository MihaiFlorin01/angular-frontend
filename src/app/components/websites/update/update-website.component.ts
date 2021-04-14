import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../service/website.service';
import {Website} from '../../../model/website';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-update-website',
  templateUrl: './update-website.component.html',
  styleUrls: ['./update-website.component.css']
})
export class UpdateWebsiteComponent implements OnInit {

  id: number;
  websiteModel: Website = new Website();
  user = localStorage.getItem('user');

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute,
              private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.websiteService.getById(this.id).subscribe(data => {
      this.websiteModel = data;
    }, error => console.log(error));
  }

  onSubmit(): any {
    this.websiteService.update(this.id, this.websiteModel).subscribe(data => {
        this.dialog.open(DialogUpdateWebsite);
        this.goToWebsitesList();
      },
      error => console.log(error));
  }

  goToWebsitesList(): void {
    this.router.navigate(['/websites']);
  }
}

@Component({
  selector: 'Dialog-Success',
  templateUrl: 'dialogUpdateWebsite.html',
})

export class DialogUpdateWebsite {

  constructor(public dialogRef: MatDialogRef<DialogUpdateWebsite>) {}

  ok(): void {
    this.dialogRef.close();
  }
}


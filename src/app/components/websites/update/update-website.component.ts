import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../service/website.service';
import {Website} from '../../../model/website';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-website',
  templateUrl: './update-website.component.html',
  styleUrls: ['./update-website.component.css']
})
export class UpdateWebsiteComponent implements OnInit {
  id: number;
  websiteModel: Website = new Website();
  user = localStorage.getItem('user');
  selectedPeriod = '';
  periods = ['none', '15', '30', '60'];

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute,
              private router: Router, private dialog: MatDialog, private formBuilder: FormBuilder) {
  }

  updateForm: FormGroup = this.formBuilder.group({
    name: [, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)], updateOn: 'change' }],
    url: [, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)], updateOn: 'change' }],
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.websiteService.getById(this.id).subscribe(data => {
      this.websiteModel = data;
    }, error => console.log(error));
  }

  onSubmit(): any {
    this.websiteModel.period = this.selectedPeriod;
    this.websiteService.update(this.id, this.websiteModel).subscribe(data => {
        this.dialog.open(DialogUpdateWebsite);
        this.goToWebsitesList();
      },
      error => console.log(error));
  }

  selected(): void {
    console.log(this.selectedPeriod);
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


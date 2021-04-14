import {Component, Inject} from '@angular/core';
import {WebsiteService} from '../../../service/website.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'Dialog-Success',
  templateUrl: './dialogDeleteWebsite.html',
  styleUrls: ['./DialogDeleteWebsite.css']
})

export class DialogDeleteWebsite {

  constructor(public websiteService: WebsiteService,
              public dialogRef: MatDialogRef<DialogDeleteWebsite>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  no(): void {
    console.log('no');
    this.dialogRef.close(true);
  }

  yes(): void {
    const idR: number = +this.data.dataKey;
    this.websiteService.delete(idR).subscribe(() => {
      this.dialogRef.close('SUCCESS_DELETE');
  });
  }
}

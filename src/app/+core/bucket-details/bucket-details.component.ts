import { Component, OnInit } from '@angular/core';
import { DeleteConfirmComponent } from '../../+shared/-modals/delete-confirm/delete-confirm.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BucketFilesService } from '../-services/bucket-files.service';

@Component({
  selector: 'app-bucket-details',
  templateUrl: './bucket-details.component.html',
  styleUrls: ['./bucket-details.component.scss']
})
export class BucketDetailsComponent implements OnInit {
  delete: MatDialogRef<DeleteConfirmComponent>;
  bucketID: string;
  gotBucket: boolean = false;
  constructor(
    private dialog: MatDialog,
    public bucketService: BucketFilesService,
    public route: ActivatedRoute,
    private router: Router
  ) {
    this.bucketID = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.bucketService.getBucket(this.bucketID);
    this.bucketService.getFiles(this.bucketID);
  }

  deleteDialog() {
    this.delete = this.dialog.open(DeleteConfirmComponent, {
      hasBackdrop: true,
      width: '370px',
      height: '140px',
      data: {
        message: 'Do you really want to delete this bucket?'
      }
    });

    this.delete.afterClosed().subscribe(res => {
      if (res) {
        this.bucketService.deleteBucket(this.bucketID);

        this.router.navigateByUrl('/home');
      }
    });
  }
}

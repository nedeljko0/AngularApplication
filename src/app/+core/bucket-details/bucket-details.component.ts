import { Component, OnInit } from '@angular/core';
import { DeleteConfirmComponent } from '../../+shared/-modals/delete-confirm/delete-confirm.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-bucket-details',
  templateUrl: './bucket-details.component.html',
  styleUrls: ['./bucket-details.component.scss']
})
export class BucketDetailsComponent implements OnInit {
  delete: MatDialogRef<DeleteConfirmComponent>;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

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
      console.log('DELETE?' + res);
    });
  }
}

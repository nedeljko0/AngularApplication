import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteConfirmComponent } from '../../+shared/-modals/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-bucket-files-list',
  templateUrl: './bucket-files-list.component.html',
  styleUrls: ['./bucket-files-list.component.scss']
})
export class BucketFilesListComponent implements OnInit {
  delete: MatDialogRef<DeleteConfirmComponent>;
  deleteEnabled = false;
  selectedRow: number;
  files = [
    {
      name: 'filename1',
      last_modified: '13.06.1999',
      size: '56KB'
    },
    {
      name: 'filename2',
      last_modified: '13.06.1999',
      size: '56KB'
    },
    {
      name: 'filename3',
      last_modified: '13.06.1999',
      size: '56KB'
    }
  ];

  selectFile(file, i) {
    this.selectedRow = i;
    this.deleteEnabled = true;
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  deleteFile() {
    this.delete = this.dialog.open(DeleteConfirmComponent, {
      hasBackdrop: true,
      width: '370px',
      height: '140px',
      data: {
        message: 'Do you really want to delete this file?'
      }
    });

    this.delete.afterClosed().subscribe(res => {
      console.log('DELETE?' + res);
    });
  }
}

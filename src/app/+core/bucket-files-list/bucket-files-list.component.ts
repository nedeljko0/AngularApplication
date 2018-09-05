import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteConfirmComponent } from '../../+shared/-modals/delete-confirm/delete-confirm.component';
import { BucketFilesService } from '../-services/bucket-files.service';
import { FileL } from '../-models/file.model';

@Component({
  selector: 'app-bucket-files-list',
  templateUrl: './bucket-files-list.component.html',
  styleUrls: ['./bucket-files-list.component.scss']
})
export class BucketFilesListComponent implements OnInit {
  delete: MatDialogRef<DeleteConfirmComponent>;
  deleteEnabled: boolean = false;
  selectedRow: number;
  bucketID: string;
  showName: boolean = false;
  file: FileL;

  constructor(
    private dialog: MatDialog,
    private bucketService: BucketFilesService,
    public route: ActivatedRoute
  ) {
    this.bucketID = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.bucketService.getBucket(this.bucketID);
    this.bucketService.getFiles(this.bucketID);
  }

  selectFile(file, i) {
    this.file = file;
    this.selectedRow = i;
    this.deleteEnabled = true;
  }

  upload(files: File[]) {
    let formData = new FormData();
    Array.from(files).forEach(f => {
      formData.append('file', f);
    });
    this.bucketService.uploadFile(this.bucketID, formData);
  }

  deleteFile() {
    this.delete = this.dialog.open(DeleteConfirmComponent, {
      hasBackdrop: true,
      width: '370px',
      height: '140px',
      data: {
        message: 'Do you really want to delete this file?'
      }
    });

    this.delete.afterClosed().subscribe((response: boolean) => {
      if (response) {
        this.bucketService.deleteFile(this.bucketID, this.file.name);
        this.selectedRow = null;
        this.deleteEnabled = false;
      }
    });
  }
}

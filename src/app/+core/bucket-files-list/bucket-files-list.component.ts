import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteConfirmComponent } from '../../+shared/-modals/delete-confirm/delete-confirm.component';
import { BucketFilesService } from '../-services/bucket-files.service';
import { FileL } from '../-models/file.model';
import { ThrowErrorService } from '../../+shared/-services/throw-error.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ErrorMessage } from '../-models/error.model';
import { HttpService } from '../-services/http.service';
import { HttpEventType } from '@angular/common/http';

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
  percentDone: number = 0;
  startupload: boolean = false;

  constructor(
    private dialog: MatDialog,
    public bucketService: BucketFilesService,
    public route: ActivatedRoute,
    private http: HttpService,
    private throwError: ThrowErrorService,
    private loadingBar: SlimLoadingBarService
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

  uploadFile(bucketID, file) {
    this.http.uploadFile(bucketID, file).subscribe(
      response => {
        if (response.type === HttpEventType.UploadProgress) {
          this.startupload = true;
          this.percentDone = Math.round(
            (100 * response.loaded) / response.total
          );
          if (this.percentDone === 100) {
            this.bucketService.getFiles(this.bucketID);
          }
        } else {
          this.startupload = false;
        }
      },
      (error: ErrorMessage) => {
        this.startupload = false;
        this.percentDone = 0;
        let tryAgain = this.throwError.tryAgain(
          this.throwError.tryAgainLimit,
          error.status
        );
        if (tryAgain) this.uploadFile(bucketID, file);
        this.throwError.changeMessage(error.error.message);
      }
    );
  }

  upload(files: File[]) {
    let formData = new FormData();
    Array.from(files).forEach(f => {
      formData.append('file', f);
    });
    this.uploadFile(this.bucketID, formData);
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

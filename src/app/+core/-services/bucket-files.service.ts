import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Location, Locations } from '../-models/location.model';
import { Buckets, Bucket, BucketR } from '../-models/bucket.model';
import { ThrowErrorService } from '../../+shared/-services/throw-error.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ErrorMessage } from '../-models/error.model';
import { Files, File } from '../-models/file.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BucketFilesService {
  bucket: Bucket;
  files;
  storageSize: number = 0;
  bucketLoaded: boolean = false;
  filesLoaded: boolean = false;
  constructor(
    private http: HttpService,
    private throwError: ThrowErrorService,
    private loadingBar: SlimLoadingBarService
  ) {}

  getBucket(id: string) {
    this.loadingBar.start();
    this.http.getBucketID(id).subscribe(
      (response: BucketR) => {
        this.bucket = response.bucket;
        this.loadingBar.complete();
        this.bucketLoaded = true;
      },
      (error: ErrorMessage) => {
        const tryAgain = this.throwError.tryAgain(
          this.throwError.tryAgainLimit,
          error.status
        );
        if (tryAgain) this.getBucket(id);
        this.throwError.changeMessage(error.error.message);
        this.bucketLoaded = false;
      }
    );
  }

  deleteBucket(id: string) {
    this.loadingBar.start();
    this.http.deleteBucket(id).subscribe(
      response => {
        this.loadingBar.complete();
      },
      (error: ErrorMessage) => {
        const tryAgain = this.throwError.tryAgain(
          this.throwError.tryAgainLimit,
          error.status
        );
        if (tryAgain) this.deleteBucket(id);
        this.throwError.changeMessage(error.error.message);
      }
    );
  }

  getFiles(bucketID: string) {
    this.loadingBar.start();
    this.http.getFiles(bucketID).subscribe(
      (response: Files) => {
        this.files = response.objects;
        this.storageSize = 0;
        for (let file of this.files) {
          this.storageSize += file.size;
        }
        this.loadingBar.complete();
        this.filesLoaded = true;
      },
      (error: ErrorMessage) => {
        const tryAgain = this.throwError.tryAgain(
          this.throwError.tryAgainLimit,
          error.status
        );
        if (tryAgain) this.getFiles(bucketID);
        this.throwError.changeMessage(error.error.message);
        this.filesLoaded = false;
      }
    );
  }

  deleteFile(bucketID: string, fileID: string) {
    this.loadingBar.start();
    this.http.deleteFile(bucketID, fileID).subscribe(
      response => {
        this.loadingBar.complete();
        this.getFiles(bucketID);
      },
      (error: ErrorMessage) => {
        const tryAgain = this.throwError.tryAgain(
          this.throwError.tryAgainLimit,
          error.status
        );
        if (tryAgain) this.deleteFile(bucketID, fileID);
        this.throwError.changeMessage(error.error.message);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Location, Locations } from '../-models/location.model';
import { Buckets, Bucket, BucketR } from '../-models/bucket.model';
import { ThrowErrorService } from '../../+shared/-services/throw-error.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ErrorMessage } from '../-models/error.model';
import { Files, File } from '../-models/file.model';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BucketFilesService {
  bucket: Bucket;
  files;
  storageSize: number = 0;
  constructor(
    private http: HttpService,
    private throwError: ThrowErrorService,
    private loadingBar: SlimLoadingBarService
  ) {}

  getBucket(id: string) {
    this.http.getBucketID(id).subscribe(
      (response: BucketR) => {
        this.bucket = response.bucket;
      },
      (error: ErrorMessage) => {
        this.throwError.changeMessage(error.message);
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
        this.throwError.changeMessage(error.message);
      }
    );
  }

  getFiles(bucketID: string) {
    this.http.getFiles(bucketID).subscribe(
      (response: Files) => {
        this.files = response.objects;
        this.storageSize = 0;
        for (let file of this.files) {
          this.storageSize += file.size;
        }
      },
      (error: ErrorMessage) => {
        this.throwError.changeMessage(error.message);
      }
    );
  }

  uploadFile(bucketID, file) {
    this.http.uploadFile(bucketID, file).subscribe(
      response => {
        this.getFiles(bucketID);
      },
      (error: ErrorMessage) => {
        this.throwError.changeMessage(error.message);
      }
    );
  }

  deleteFile(bucketID: string, fileID: string) {
    this.http.deleteFile(bucketID, fileID).subscribe(
      response => {
        this.getFiles(bucketID);
      },
      (error: ErrorMessage) => {
        this.throwError.changeMessage(error.message);
      }
    );
  }
}

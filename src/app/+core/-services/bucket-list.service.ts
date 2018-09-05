import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Location, Locations } from '../-models/location.model';
import { Buckets, Bucket } from '../-models/bucket.model';
import { ThrowErrorService } from '../../+shared/-services/throw-error.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ErrorMessage } from '../-models/error.model';

@Injectable({
  providedIn: 'root'
})
export class BucketListService {
  locations = [];
  buckets = [];
  constructor(
    private http: HttpService,
    private throwError: ThrowErrorService,
    private loadingBar: SlimLoadingBarService
  ) {}

  getLocations() {
    this.loadingBar.start();
    this.http.getLocations().subscribe(
      (response: Locations) => {
        this.locations = response.locations;
        this.loadingBar.complete();
      },
      (error:ErrorMessage) => {
        const tryAgain = this.throwError.tryAgain(
          this.throwError.tryAgainLimit,
          error.status
        );
        if (tryAgain) this.getLocations();
        this.http.handleError(error.error.message);
      }
    );
  }

  getBuckets() {
    this.loadingBar.start();
    this.http.getBuckets().subscribe(
      (response: Buckets) => {
        this.buckets = response.buckets;
        this.loadingBar.complete();
      },
      (error:ErrorMessage) => {
        const tryAgain = this.throwError.tryAgain(
          this.throwError.tryAgainLimit,
          error.status
        );
        if (tryAgain) this.getBuckets();
        this.http.handleError(error.error.message);
      }
    );
  }
}

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
  locationsLoaded: boolean = false;
  bucketsLoaded: boolean = false;
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
        this.locationsLoaded = true;
      },
      (error: ErrorMessage) => {
        const tryAgain = this.throwError.tryAgain(
          this.throwError.tryAgainLimit,
          error.status
        );
        if (tryAgain) this.getLocations();
        if (typeof error.error.message !== 'undefined')
          this.http.handleError(error.error.message);
        this.locationsLoaded = false;
      }
    );
  }

  getBuckets() {
    this.loadingBar.start();
    this.http.getBuckets().subscribe(
      (response: Buckets) => {
        this.buckets = response.buckets;
        this.loadingBar.complete();
        this.bucketsLoaded = true;
      },
      (error: ErrorMessage) => {
        const tryAgain = this.throwError.tryAgain(
          this.throwError.tryAgainLimit,
          error.status
        );
        if (tryAgain) this.getBuckets();
        if (typeof error.error.message !== 'undefined')
          this.http.handleError(error.error.message);
        this.bucketsLoaded = false;
      }
    );
  }
}

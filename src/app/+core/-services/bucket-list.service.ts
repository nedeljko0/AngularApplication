import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Location, Locations } from '../-models/location.model';
import { Buckets, Bucket } from '../-models/bucket.model';
import { ThrowErrorService } from '../../+shared/-services/throw-error.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

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
    this.http.getLocations().subscribe(
      (response: Locations) => {
        this.locations = response.locations;
      },
      error => {
        this.http.handleError(error);
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
      error => {
        this.loadingBar.stop();
        this.http.handleError(error);
      }
    );
  }
}

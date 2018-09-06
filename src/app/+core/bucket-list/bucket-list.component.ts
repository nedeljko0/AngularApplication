import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { HttpService } from '../-services/http.service';
import { BucketListService } from '../-services/bucket-list.service';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
export class BucketListComponent implements OnInit {
  requestError = false;
  allBucketsCounter = 10;

  createNewBucket = false;
  visibleButton = true;

  constructor(
    private loadingBar: SlimLoadingBarService,
    private http: HttpService,
    public bucketListService: BucketListService
  ) {}

  ngOnInit() {
    this.bucketListService.getLocations();
    this.bucketListService.getBuckets();
  }

  createBucket() {
    this.createNewBucket = true;
    this.visibleButton = false;
  }

  newBucketCreated(value) {
    this.createNewBucket = false;
    this.visibleButton = true;
  }
}

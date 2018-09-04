import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

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
  createBucket() {
    this.createNewBucket = true;
    this.visibleButton = false;
  }

  newBucketCreated(value) {
    this.createNewBucket = false;
    this.visibleButton = true;
  }

  test(){
    this.loadingBar.start()
  }

  bucketList = [
    {
      name: 'mojbucket',
      location: {
        name: 'kranj'
      }
    },
    {
      name: 'mojbucket32',
      location: {
        name: 'krafnj'
      }
    },
    {
      name: 'mojbucket3',
      location: {
        name: '3sdf'
      }
    }
  ];
  constructor(
    private loadingBar: SlimLoadingBarService
  ) {}

  ngOnInit() {}
}

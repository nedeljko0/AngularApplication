import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bucket-create',
  templateUrl: './bucket-create.component.html',
  styleUrls: ['./bucket-create.component.scss']
})
export class BucketCreateComponent implements OnInit {
  @Output()
  create: EventEmitter<boolean> = new EventEmitter();
  bucketName = 'buckername';
  selectedLocation = 'selectedloc';
  locations = [{ name: 'Kranj' }, { name: 'Ljubljana' }];
  constructor() {}

  ngOnInit() {}

  createBucket() {
    console.log('clicked');
    this.create.emit(true);
  }
}

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { BucketListService } from '../-services/bucket-list.service';
import { HttpService } from '../-services/http.service';
import { NgForm } from '@angular/forms';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ThrowErrorService } from '../../+shared/-services/throw-error.service';

@Component({
  selector: 'app-bucket-create',
  templateUrl: './bucket-create.component.html',
  styleUrls: ['./bucket-create.component.scss']
})
export class BucketCreateComponent implements OnInit {
  @Output()
  create: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('f')
  form: NgForm;
  bucketName: string = '';
  selectedLocation;
  locations = [];

  constructor(
    private bucketLService: BucketListService,
    private http: HttpService,
    private loadingBar: SlimLoadingBarService,
    private throwError: ThrowErrorService
  ) {}

  ngOnInit() {
    if (this.locations.length === 0) {
      this.bucketLService.getLocations();
    }
  }

  createBucket(form: NgForm) {
    const value = form.value;

    this.loadingBar.start();
    this.http.createBucket(value.bucketName, value.bucketLocation).subscribe(
      response => {
        this.loadingBar.complete();
        this.form.reset();
        this.bucketLService.getBuckets();
        this.create.emit(true);
      },
      error => {
        this.throwError.changeMessage(error.message);
      }
    );
  }

  clicked = 0;
  onClickedOutside(event: Event) {
    this.clicked++;
    if (this.clicked > 1) {
      this.create.emit(true);
      this.clicked = 0;
    }
  }
}

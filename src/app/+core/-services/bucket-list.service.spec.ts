import { TestBed, inject } from '@angular/core/testing';
import { BucketListService } from './bucket-list.service';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

describe('BucketListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketListService, SlimLoadingBarService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject(
    [BucketListService],
    (service: BucketListService) => {
      expect(service).toBeTruthy();
    }
  ));
});

import { TestBed, inject } from '@angular/core/testing';
import { BucketFilesService } from './bucket-files.service';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

describe('BucketFilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketFilesService, SlimLoadingBarService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject(
    [BucketFilesService],
    (service: BucketFilesService) => {
      expect(service).toBeTruthy();
    }
  ));
});

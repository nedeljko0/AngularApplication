import { TestBed, inject } from '@angular/core/testing';

import { BucketFilesService } from './bucket-files.service';

describe('BucketFilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketFilesService]
    });
  });

  it('should be created', inject([BucketFilesService], (service: BucketFilesService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ThrowErrorService } from './throw-error.service';

describe('ThrowErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThrowErrorService]
    });
  });

  it('should be created', inject([ThrowErrorService], (service: ThrowErrorService) => {
    expect(service).toBeTruthy();
  }));
});

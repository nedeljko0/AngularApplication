import { TestBed, inject } from '@angular/core/testing';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { defer } from 'rxjs';
import { ThrowErrorService } from '../../+shared/-services/throw-error.service';
import { AuthService } from '../../+shared/-services/auth.service';
import { Location, Locations } from '../-models/location.model';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('HttpService', () => {
  let httpClientSpy: {
    get: jasmine.Spy;
    post: jasmine.Spy;
    delete: jasmine.Spy;
  };
  let httpClient: HttpService;

  const expectedLocationsResponse = [
    { id: 'id1', name: 'Koper' },
    { id: 'id2', name: 'Ptuj' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService, ThrowErrorService],
      imports: [HttpClientModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete'
    ]);
    httpClient = new HttpService(
      <any>httpClientSpy,
      new ThrowErrorService(),
      new AuthService()
    );
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
  it('should return locations', () => {
    httpClientSpy.get.and.returnValue(asyncData(expectedLocationsResponse));
    httpClient
      .getLocations()
      .subscribe(
        response =>
          expect(response).toEqual(
            expectedLocationsResponse,
            'expected locatons'
          ),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('should return buckets', () => {
    httpClientSpy.get.and.returnValue(asyncData(expectedLocationsResponse));
    httpClient
      .getBuckets()
      .subscribe(
        response =>
          expect(response).toEqual(
            expectedLocationsResponse,
            'expected buckets'
          ),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('should create new bucket', () => {
    httpClientSpy.post.and.returnValue(asyncData(expectedLocationsResponse));
    httpClient
      .createBucket('namee', 'locationn')
      .subscribe(
        response =>
          expect(response).toEqual(
            expectedLocationsResponse,
            'expected posted bucket'
          ),
        fail
      );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });
  it('should remove bucket', () => {
    httpClientSpy.delete.and.returnValue(asyncData(expectedLocationsResponse));
    httpClient
      .deleteBucket('id')
      .subscribe(
        response =>
          expect(response).toEqual(
            expectedLocationsResponse,
            'expected heroes'
          ),
        fail
      );
    expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
  });
  it('should return bucket called with id', () => {
    httpClientSpy.get.and.returnValue(asyncData(expectedLocationsResponse));
    httpClient
      .getBucketID('1337')
      .subscribe(
        response =>
          expect(response).toEqual(
            expectedLocationsResponse,
            'expected heroes'
          ),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('should return files', () => {
    httpClientSpy.get.and.returnValue(asyncData(expectedLocationsResponse));
    httpClient
      .getFiles('id')
      .subscribe(
        response =>
          expect(response).toEqual(
            expectedLocationsResponse,
            'expected heroes'
          ),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should remove file', () => {
    httpClientSpy.delete.and.returnValue(asyncData(expectedLocationsResponse));
    httpClient
      .deleteFile('bucketid', 'fileid')
      .subscribe(
        response =>
          expect(response).toEqual(
            expectedLocationsResponse,
            'expected heroes'
          ),
        fail
      );
    expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
  });
});

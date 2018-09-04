import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ThrowErrorService } from '../../+shared/-services/throw-error.service';
import { AuthService } from '../../+shared/-services/auth.service';
import { Locations } from '../-models/location.model';
import { Bucket, Buckets } from '../-models/bucket.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  rootUrl: string = 'https://challenge.3fs.si/storage';
  header = new HttpHeaders({
    Authorization: `Token ${this.authService.getToken()}`
  });

  constructor(
    private httpClient: HttpClient,
    private throwError: ThrowErrorService,
    private authService: AuthService
  ) {}

  getLocations(): Observable<Locations> {
    return this.httpClient.get<Locations>(`${this.rootUrl}/locations`, {
      headers: this.header
    });
  }

  getBuckets(): Observable<Buckets> {
    return this.httpClient.get<Buckets>(`${this.rootUrl}/buckets`, {
      headers: this.header
    });
  }

  createBucket(bucketName: string, bucketLocation: string) {
    this.header.append('Content-Type', 'application/json');

    let data = JSON.stringify({
      name: bucketName,
      location: bucketLocation
    });

    return this.httpClient.post(`${this.rootUrl}/buckets`, data, {
      headers: this.header
    });
  }

  deleteBucket(id) {
    return this.httpClient.delete(`${this.rootUrl}/buckets/${id}`, {
      headers: this.header
    });
  }

  getBucketID(id) {
    return this.httpClient.get(`${this.rootUrl}/buckets/${id}`, {
      headers: this.header
    });
  }

  getFiles(id) {
    return this.httpClient.get(`${this.rootUrl}/buckets/${id}/objects`, {
      headers: this.header
    });
  }

  uploadFile(id, file) {
    this.header.append('Accept', 'application/json');

    return this.httpClient.post(`${this.rootUrl}/buckets/${id}/objects`, file, {
      headers: this.header
    });
  }

  deleteFile(bucket, id) {
    return this.httpClient.delete(
      `${this.rootUrl}/buckets/${bucket}/objects/${id}`,
      {
        headers: this.header
      }
    );
  }

  handleError(error) {
    this.throwError.changeMessage(error.error.message);
  }
}
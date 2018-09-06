import {
  async,
  ComponentFixture,
  fakeAsync,
  inject,
  TestBed,
  tick
} from '@angular/core/testing';
import { BucketListComponent } from './bucket-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteConfirmComponent } from '../../+shared/-modals/delete-confirm/delete-confirm.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BytesPipe } from '../../+shared/-pipes/bytes.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Bucket } from '../-models/bucket.model';
import { NgForm } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

describe('BucketListComponent', () => {
  let component: BucketListComponent;
  let fixture: ComponentFixture<BucketListComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketListComponent, NgForm],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [SlimLoadingBarService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have values in list of buckets`, async(() => {
    const fixture = TestBed.createComponent(BucketListComponent);
    const comp = fixture.debugElement.componentInstance;
    let buckets = [];
    buckets.push({ name: 'test', location: 'testlocation' });
    comp.bucketListService.buckets = buckets;
    comp.bucketListService.buckets.length = buckets.length;
    fixture.detectChanges();
    comp.bucketListService.buckets.length = buckets.length;
    expect(comp.bucketListService.buckets).toEqual(buckets) &&
      expect(comp.bucketListService.buckets.length).toEqual(1);
  }));

  it(`call createBucket() function on click of the button`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'createBucket');
    element = fixture.debugElement.query(By.css('#createBucket')).nativeElement;
    element.click();
    expect(component.createBucket).toHaveBeenCalled();
    expect(element).toBeTruthy();
  }));

  it('show Form on click of the createBucket()', () => {
    component.createBucket();
    expect(component.createNewBucket).toBe(true);
  });
});

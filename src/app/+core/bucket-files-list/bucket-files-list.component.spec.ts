import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from '@angular/core/testing';
import { BucketFilesListComponent } from './bucket-files-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteConfirmComponent } from '../../+shared/-modals/delete-confirm/delete-confirm.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BytesPipe } from '../../+shared/-pipes/bytes.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

describe('BucketFilesListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BucketFilesListComponent,
        DeleteConfirmComponent,
        BytesPipe
      ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [
        { provide: MatDialog, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { myId: '123' } } }
        },
        SlimLoadingBarService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    let fixture = TestBed.createComponent(BucketFilesListComponent);
    let component = fixture.debugElement.componentInstance;
    fixture = TestBed.createComponent(BucketFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BucketFilesListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should get bucket id from url', () => {
    const fixture = TestBed.createComponent(BucketFilesListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.route.snapshot.params.myId).toBe('123');
  });

  it(`should have values in seleceted bucket changed`, async(() => {
    const fixture = TestBed.createComponent(BucketFilesListComponent);
    const component = fixture.debugElement.componentInstance;

    const bucket = {
      name: 'test1',
      last_modified: '11.11.1999',
      size: 1000
    };
    const bucket2 = {
      name: 'test12',
      last_modified: '12.12.1999',
      size: 1001
    };

    component.selectedBucket = bucket;
    fixture.detectChanges();
    component.selectedBucket = bucket2;
    expect(component.selectedBucket).toEqual(bucket2);
  }));

  let testobj = {
    name: '48683.jpg',
    size: 133769,
    last_modified: '2018-09-06T07:32:12.510738727Z'
  };

  it('select file on click of the file', () => {
    const fixture = TestBed.createComponent(BucketFilesListComponent);
    const component = fixture.debugElement.componentInstance;
    component.selectFile(testobj, 1);
    fixture.detectChanges();
    expect(component.file).toBe(testobj);
  });

  it(`should have objects in files list`, async(() => {
    const fixture = TestBed.createComponent(BucketFilesListComponent);
    const component = fixture.debugElement.componentInstance;
    let files = [];
    files.push({ name: 'test', last_modified: '16.04.1900', size: 9999 });
    component.bucketService.files = files;
    component.bucketService.files.length = files.length;
    fixture.detectChanges();
    component.bucketService.files.length = files.length;
    expect(component.bucketService.files).toEqual(files) &&
      expect(component.bucketService.files.length).toEqual(1);
  }));

  it(`should change object value on click`, async(() => {
    const fixture = TestBed.createComponent(BucketFilesListComponent);
    const component = fixture.debugElement.componentInstance;

    const bucket = {
      name: 'test1',
      last_modified: '11.11.1999',
      size: 1000
    };
    const bucket2 = {
      name: 'test12',
      last_modified: '12.12.1999',
      size: 1001
    };

    component.selectedBucket = bucket;
    fixture.detectChanges();
    component.selectedBucket = bucket2;
    expect(component.selectedBucket).toEqual(bucket2);
  }));
});

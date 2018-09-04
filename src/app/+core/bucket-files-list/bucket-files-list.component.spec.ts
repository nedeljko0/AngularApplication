import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketFilesListComponent } from './bucket-files-list.component';

describe('BucketFilesListComponent', () => {
  let component: BucketFilesListComponent;
  let fixture: ComponentFixture<BucketFilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketFilesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

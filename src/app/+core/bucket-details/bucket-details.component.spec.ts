import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
//import { BucketDetailsComponent } from './bucket-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BytesPipe } from '../../+shared/-pipes/bytes.pipe';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BucketFilesService } from '../-services/bucket-files.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BucketDetailsComponent } from './bucket-details.component';
import { ActivatedRoute } from '@angular/router';

describe('BucketDetailsComponent', () => {
  let component: BucketDetailsComponent;
  let fixture: ComponentFixture<BucketDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketDetailsComponent, BytesPipe],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        SlimLoadingBarService,
        BucketFilesService,
        { provide: MatDialog, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { myId: '123' } } }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tab should be active', () => {
    expect(fixture.debugElement.query(By.css('.active-tab'))).toBeTruthy();
  });

  it('should get bucket id from url', () => {
    expect(component.route.snapshot.params.myId).toBe('123');
  });
});

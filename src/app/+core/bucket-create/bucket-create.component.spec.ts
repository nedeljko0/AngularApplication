import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BucketCreateComponent } from './bucket-create.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BucketListService } from '../-services/bucket-list.service';
import { Location } from '../-models/location.model';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

describe('BucketCreateComponent', () => {
  let component: BucketCreateComponent;
  let fixture: ComponentFixture<BucketCreateComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketCreateComponent],
      providers: [BucketListService, SlimLoadingBarService],
      imports: [FormsModule, RouterTestingModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have set locations`, async(() => {
    const fixture = TestBed.createComponent(BucketCreateComponent);
    const comp = fixture.debugElement.componentInstance;
    const location: Location = new Location('1', 'Ptuj');
    let locations: Location[] = [];
    locations.push(location);
    comp.locations = locations;
    fixture.detectChanges();
    expect(comp.locations).toEqual(locations);
  }));
});

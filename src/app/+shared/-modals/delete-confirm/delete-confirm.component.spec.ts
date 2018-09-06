import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteConfirmComponent } from './delete-confirm.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';

@Component({
  template: ''
})
class NoopComponent {}

const TEST_DIRECTIVES = [DeleteConfirmComponent, NoopComponent];

@NgModule({
  imports: [MatDialogModule, NoopAnimationsModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [DeleteConfirmComponent]
})
class DialogTestModule {}

describe('DeleteConfirmComponent', () => {
  let component: DeleteConfirmComponent;
  let fixture: ComponentFixture<DeleteConfirmComponent>;
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let noop: ComponentFixture<NoopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [DialogTestModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
        {
          provide: OverlayContainer,
          useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }
        }
      ]
    }).compileComponents();

    dialog = TestBed.get(MatDialog);
    noop = TestBed.createComponent(NoopComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows information in error message', () => {
    const config = {
      data: {
        message: 'Delete this?'
      }
    };
    dialog.open(DeleteConfirmComponent, config);
    noop.detectChanges();
    const title = overlayContainerElement.querySelector('.warning');
    const button = overlayContainerElement.querySelector('#deleteButton');

    expect(title.textContent).toBe('Delete this?');
    expect(button.textContent).toBe('Delete');
  });
});

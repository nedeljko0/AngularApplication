import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { BucketCreateComponent } from './bucket-create/bucket-create.component';
import { BucketFilesListComponent } from './bucket-files-list/bucket-files-list.component';
import { BucketDetailsComponent } from './bucket-details/bucket-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { ClickOutsideModule } from 'ng-click-outside';
import { BytesPipe } from '../+shared/-pipes/bytes.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ClickOutsideModule
  ],
  declarations: [
    BucketListComponent,
    BucketCreateComponent,
    BucketFilesListComponent,
    BucketDetailsComponent,
    BytesPipe
  ],
  providers: [MatDialogModule, MatButtonModule, HttpClientModule]
})
export class CoreModule {}

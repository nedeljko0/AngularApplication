import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { BucketCreateComponent } from './bucket-create/bucket-create.component';
import { BucketFilesListComponent } from './bucket-files-list/bucket-files-list.component';
import { BucketDetailsComponent } from './bucket-details/bucket-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    BucketListComponent,
    BucketCreateComponent,
    BucketFilesListComponent,
    BucketDetailsComponent
  ],
  providers: []
})
export class CoreModule {}

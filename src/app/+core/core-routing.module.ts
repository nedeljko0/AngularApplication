import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { BucketFilesListComponent } from './bucket-files-list/bucket-files-list.component';
import { BucketDetailsComponent } from './bucket-details/bucket-details.component';

const routes: Routes = [
  { path: '', component: BucketListComponent },
  { path: 'home', component: BucketListComponent },
  { path: 'bucket-files-list/:id', component: BucketFilesListComponent },
  { path: 'bucket-details/:id', component: BucketDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

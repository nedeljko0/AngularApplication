import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BucketListComponent } from './bucket-list/bucket-list.component';

const routes: Routes = [
  { path: '', component: BucketListComponent },
  { path: 'home', component: BucketListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { BucketListComponent } from './bucket-list/bucket-list.component';
@NgModule({
  imports: [CoreRoutingModule],
  declarations: [BucketListComponent],
  providers: []
})
export class CoreModule {}

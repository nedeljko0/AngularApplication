import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './+app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: AppComponent,
    children: [{ path: '', loadChildren: './+core/core.module#CoreModule' }]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false && !environment.production
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

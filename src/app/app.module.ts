import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './+app/header/header.component';
import { PageNotFoundComponent } from './+app/page-not-found/page-not-found.component';
import { DeleteConfirmComponent } from './+shared/-modals/delete-confirm/delete-confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    DeleteConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [],
  entryComponents: [DeleteConfirmComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './+app/header/header.component';
import { PageNotFoundComponent } from './+app/page-not-found/page-not-found.component';
import { DeleteConfirmComponent } from './+shared/-modals/delete-confirm/delete-confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ClickOutsideModule } from 'ng-click-outside';
import { ErrorMessageComponent } from './+shared/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    DeleteConfirmComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ClickOutsideModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [],
  entryComponents: [DeleteConfirmComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

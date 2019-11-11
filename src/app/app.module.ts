import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedModule } from './modules/feed/feed.module';
import { FeedEntryModule } from './modules/feed-entry/feed-entry.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FeedModule,
    FeedEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

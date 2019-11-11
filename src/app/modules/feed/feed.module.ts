import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { FeedComponent } from './feed.component';


@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [FeedComponent]
})
export class FeedModule { }

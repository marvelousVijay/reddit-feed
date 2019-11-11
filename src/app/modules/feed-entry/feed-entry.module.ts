import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedEntryComponent } from './feed-entry.component';



@NgModule({
  declarations: [FeedEntryComponent],
  imports: [
    CommonModule
  ],
  exports: [FeedEntryComponent]
})
export class FeedEntryModule { }

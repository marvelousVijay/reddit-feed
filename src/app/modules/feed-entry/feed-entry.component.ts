import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed/feed.service';
import { IFeed } from 'src/app/services/feed-api.model';

@Component({
  selector: 'app-feed-entry',
  templateUrl: './feed-entry.component.html',
  styleUrls: ['./feed-entry.component.scss']
})
export class FeedEntryComponent implements OnInit {
  entry: IFeed;
  feedAuthorprefix: string;
  createdTime: string;
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.loadEntry();
  }

  loadEntry() {
    this.entry = this.feedService.selectedEntry;
    this.feedAuthorprefix = this.feedService.feedAuthorprefix;
    this.createdTime = this.feedService.timeDifference(this.entry.created);
  }

}

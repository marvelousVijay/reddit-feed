import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeedApiService } from 'src/app/services/feed-api.service';
import { IFeed } from 'src/app/services/feed-api.model';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;

  feedList: IFeed[] = [];
  feedSearchKey = 'stars';
  feedSearchUrl = `r/${this.feedSearchKey}`;
  feedAuthorprefix = this.feedService.feedAuthorprefix;
  entriesCount = '10';

  constructor(private feedService: FeedService, private feedApiService: FeedApiService) {
    this.feedApiService.getFeedList(this.feedSearchKey)
      .subscribe(feedList => {
        this.feedList = feedList;
        console.log('feedResults.... ', this.feedList);
      });

    this.feedApiService.getAllFeed('universe')
      .subscribe(feed => console.log('All feed: ', feed));
  }

  ngOnInit() {
  }

  getTimeDifference(createdTime: number): string {
    return this.feedService.timeDifference(createdTime);
  }

  onFeedItemClick(entry: IFeed) {
    this.feedService.loadFeedEntry(entry);
  }


  onEntriesCountChange(entryCount: string) {
    this.entriesCount = entryCount;
  }
}

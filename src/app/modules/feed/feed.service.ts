import { Injectable } from '@angular/core';
import { IFeed } from 'src/app/services/feed-api.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  selectedEntry: IFeed;
  feedAuthorprefix = `Posted by u/`;

  constructor(private router: Router) { }

  loadFeedEntry(entry: IFeed) {
    this.selectedEntry = entry;
    this.router.navigateByUrl('/entry');
  }

  timeDifference(createdTime: number) {
    const currentTime = Math.floor(Date.now() / 1000);
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = currentTime - createdTime;

    if (elapsed < msPerHour) {
         return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay ) {
         return Math.round(elapsed / msPerHour ) + ' hours ago';
    } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
        return Math.round(elapsed / msPerYear ) + ' years ago';
    }
  }
}

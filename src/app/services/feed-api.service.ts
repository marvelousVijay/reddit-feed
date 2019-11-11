import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IFeedObject, Feed, IFeed } from './feed-api.model';

@Injectable({
  providedIn: 'root'
})

export class FeedApiService {
  apiRoot = 'https://www.reddit.com/r';

  constructor(private http: HttpClient) { }

  getFeedList(feedTerm: string): Observable<IFeed[]> {
    const apiURL = `${this.apiRoot}/${feedTerm}.json`;
    return this.http.get<IFeedObject>(apiURL)
      .pipe(
        map(data =>
          Feed.parseFeedList(data.data.children)
        ), catchError( error => {
          return throwError( 'Feedresults not found!' );
        })
      );
  }

  getAllFeed(API_KEY: string) {
    return this.http.get(`https://www.reddit.com/r/${API_KEY}.json`);
  }
}

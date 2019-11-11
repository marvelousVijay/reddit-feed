export interface IFeed {
  thumbnail: string;
  created: number;
  num_comments: number;
  author: string;
  score: number;
  permalink: string;
  title: string;
  subreddit_name_prefixed: string;
}

export interface IFeedChildObject {
  data: IFeed;
  kind: string;
}

export interface IFeedObject {
  data: {
    children: IFeedChildObject[];
  };
}

export class Feed {
  thumbnail: string;
  created: number;
  numComments: number;
  author: string;
  score: number;
  permalink: string;
  title: string;
  subredditNamePrefixed: string;

  static fromJSONArray(data: IFeed[]): Feed[] {
    return data.map(obj => new Feed(obj));
  }

  static parseFeedList(data: IFeedChildObject[]): IFeed[] {
    const feedItem: IFeed[] = [];
    data.map(child => {
      feedItem.push({
        author: child.data.author,
        created: child.data.created,
        num_comments: child.data.num_comments,
        permalink: child.data.permalink,
        score: child.data.score,
        thumbnail: child.data.thumbnail,
        title: child.data.title,
        subreddit_name_prefixed: child.data.subreddit_name_prefixed
      });
    });
    return feedItem;
  }

  constructor(obj: IFeed) {
    this.author = obj.author;
    this.created = obj.created;
    this.numComments = obj.num_comments;
    this.permalink = obj.permalink;
    this.score = obj.score;
    this.thumbnail = obj.thumbnail;
    this.title = obj.title;
    this.subredditNamePrefixed = obj.subreddit_name_prefixed;
  }
}

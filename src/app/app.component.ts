import {Component, OnInit} from '@angular/core';
import {TweetService} from './services/tweet.service';
import {Tweet} from './models/tweet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TwitterCloneByRenato';
  tweets: Array<Tweet> | undefined;

  constructor(
    private tweetService: TweetService
  ) {
  }

  ngOnInit(): void {
    this.tweetService.getTweetList().subscribe(data => {
      this.tweets = data;
      data.forEach((tweet, index) => {
        console.log(`Tweet ${index}: ${tweet.id} + ${tweet.text}`);
      });
    });
  }

}


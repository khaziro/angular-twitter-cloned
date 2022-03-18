import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Tweet} from './models/tweet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TwitterCloneByRenato';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get<Array<Tweet>>('/assets/tweets.json').subscribe(data => {
      data.forEach((tweet, index) => {
        console.log(`Tweet ${index}: ${tweet.id} + ${tweet.text}`)
      })
    })
  }

}


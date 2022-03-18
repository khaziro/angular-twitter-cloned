import { Injectable } from '@angular/core';
import {Tweet} from '../models/tweet.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getTweetList(): Observable<Array<Tweet>> {
    return this.httpClient.get<Array<Tweet>>('/assets/tweets.json');
  }

}

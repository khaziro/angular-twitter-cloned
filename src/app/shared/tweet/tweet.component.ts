import {Component, Input, OnInit, Output} from '@angular/core';
import {Tweet} from "../../models/tweet.model";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() Tweet = ['']
}

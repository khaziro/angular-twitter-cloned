import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from "../../models/tweet.model";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {

  names = ["Renato", "Mircea"]

}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() tweetAuthor = 'Renato'
  @Output() newAuthor = new EventEmitter<string>();

  addNewAuthor(value: string){
    this.newAuthor.emit(value)
  }
}

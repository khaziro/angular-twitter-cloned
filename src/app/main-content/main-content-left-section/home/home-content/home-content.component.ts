import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  currentAuthor = 'Mircea'
  otherTweetAuthors = ['George', 'Grigore', 'Avram']

  addAuthor(newAuthor: string){
    this.otherTweetAuthors.push(newAuthor)
    this.clearAuthor()
  }

  clearAuthor(){
    let input = <HTMLInputElement>document.querySelector("#author-name")
    input.value=''
  }
  constructor() { }

  ngOnInit(): void {
  }

}

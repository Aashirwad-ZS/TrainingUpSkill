import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-content-container',
  templateUrl: './chapter-content-container.component.html',
  styleUrls: ['./chapter-content-container.component.sass'],
})
export class ChapterContentContainerComponent implements OnInit {
  close: boolean = false;
  chapterUrl: string = '';
  @Input() quizFlag: boolean = false;

  closeButton() {
    this.close = false;
  }

  openPopup(i: number) {
    // console.log(this.allChapters[i]);
    // this.allChapters[i].isVisited = true;
    this.chapterUrl = this.allChapters[i].resourceLink;

    this.close = true;
    // console.log(this.chapterUrl);
  }

  openInNewTab() {
    window.open(this.chapterUrl, '_blank');
  }

  @Input() allChapters: any = {};
  constructor() {}

  markBtn(i: number) {
    this.allChapters[i].isCompleted = !this.allChapters[i].isCompleted;
  }

  ngOnInit(): void {}
}

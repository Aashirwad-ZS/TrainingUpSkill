import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-content-container',
  templateUrl: './chapter-content-container.component.html',
  styleUrls: ['./chapter-content-container.component.sass'],
})
export class ChapterContentContainerComponent implements OnInit {
  close: boolean = false;

  closeButton() {
    this.close = false;
  }

  openPopup(i: number) {
    this.allChapters[i].isVisited = true;
    this.close = true;
  }

  iframeSrc = 'https://www.youtube.com/'; // Set your iframe source URL

  openInNewTab() {
    window.open(this.iframeSrc, '_blank');
  }

  @Input() allChapters: any = {};
  constructor() {}

  markBtn(i: number) {
    console.log('clicked');
    this.allChapters[i].isCompleted = !this.allChapters[i].isCompleted;
    console.log(i);
  }

  ngOnInit(): void {}
}

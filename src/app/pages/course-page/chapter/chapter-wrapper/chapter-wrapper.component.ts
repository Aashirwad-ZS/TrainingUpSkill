import { Component, Input, OnInit } from '@angular/core';
import { PathDataService } from '../../../../services/path-data.service';

@Component({
  selector: 'app-chapter-wrapper',
  templateUrl: './chapter-wrapper.component.html',
  styleUrls: ['./chapter-wrapper.component.sass'],
})
export class ChapterWrapperComponent implements OnInit {
  isClicked = true;

  @Input() courseTitles: any = {};
  @Input() index: number = 0;

  handleClick() {
    this.isClicked = !this.isClicked;
  }
  constructor() {
    console.log('courseTitles', this.courseTitles);
  }

  ngOnInit(): void {}
}

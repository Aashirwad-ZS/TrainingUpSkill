import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.sass'],
})
export class NoContentComponent implements OnInit {
  @Input() chapterFlag: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}

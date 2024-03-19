import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-course-card',
  templateUrl: './path-course-card.component.html',
  styleUrls: ['./path-course-card.component.sass'],
})
export class PathCourseCardComponent implements OnInit {
  @Input() courseData: any = {};
  constructor() {
    console.log(this.courseData);
  }

  ngOnInit(): void {}
}

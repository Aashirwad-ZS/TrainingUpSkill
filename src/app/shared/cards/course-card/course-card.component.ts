import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.sass'],
})
export class CourseCardComponent implements OnInit {
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;
  @Input() singleCourse: any = {};
  constructor() {}

  ngOnInit(): void {}
  isButtonRed: boolean = false;

  toggleColor() {
    this.isButtonRed = !this.isButtonRed;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-course-card-shimmer',
  templateUrl: './path-course-card-shimmer.component.html',
  styleUrls: ['./path-course-card-shimmer.component.sass']
})
export class PathCourseCardShimmerComponent implements OnInit {

@Input() shimmerCount: number = 4;
  constructor() { }

  ngOnInit(): void {
  }

}

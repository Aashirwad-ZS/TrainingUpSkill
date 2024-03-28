import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadNoOfEnrolledCourses } from 'src/app/state/action/course.actions';
import { loadNumberOfEnrolledPaths } from 'src/app/state/action/path.actions';
import {
  selectAllCourses,
  selectEnrolledCourses,
  selectNoOfEnrolledCourses,
} from 'src/app/state/selector/course.selector';
import { selectNoOfEnrolledPaths } from 'src/app/state/selector/path.selector';
import { enrolledCourses } from '../../../models/EnrolledCourses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.sass'],
})
export class DashboardHeaderComponent implements OnInit {
  userProfile: any;
  enrolledCourse: any;
  enrolledPathsNumber: number = 0;
  enrolledCoursesNumber: number = 0;
  noOfEnrolledCourses!: Observable<Number>;
  isResponsive: boolean = false;

  constructor(
    private store$: Store,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(loadNoOfEnrolledCourses());
    this.store$.select(selectNoOfEnrolledCourses).subscribe((data) => {
      this.enrolledCoursesNumber = data;
    });
    this.store$.dispatch(loadNumberOfEnrolledPaths());
    this.store$.select(selectNoOfEnrolledPaths).subscribe((data) => {
      this.enrolledPathsNumber = data;
    });

    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');

    this.store$.select(selectEnrolledCourses).subscribe((courses) => {
      if (courses.length > 0) {
        const randomIndex = Math.floor(Math.random() * courses.length);
        this.enrolledCourse = courses[randomIndex];
      }
    });
    this.onResize();
  }
  navigateToCourse() {
    this.router.navigate(['/course', this.enrolledCourse.courseId]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    // Check window width and set the variable accordingly
    this.isResponsive = window.innerWidth <= 768;
  }
}

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCourseAboutInfo } from 'src/app/state/action/course.actions';
import { selectCourseAboutInfo } from 'src/app/state/selector/course.selector';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-about-section',
  templateUrl: './course-about-section.component.html',
  styleUrls: ['./course-about-section.component.sass'],
})
export class CourseAboutSectionComponent implements OnInit {
  courseInfo: Course = {
    id: 0,
    name: '',
    courseName: '',
    imageUrl: '',
    isAccessible: false,
    description: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    createdAt: '',
    isFavourite: false,
    progress: 0,
    enrolledAt: '',
    completedAt: '',
    noOfChapters: 0,
    updatedAt: '',
    level: 0,
  };
  id: string = '';
  aboutArray: string[] = [];

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    // this.store.dispatch(loadCourseAboutInfo({ courseId: this.id }));
    this.store.select(selectCourseAboutInfo).subscribe((data) => {
      this.courseInfo = data;
      this.aboutArray = this.courseInfo.about.split('\n');
    });
  }
}

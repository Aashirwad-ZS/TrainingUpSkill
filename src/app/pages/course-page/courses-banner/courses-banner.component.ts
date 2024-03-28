import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCourseAboutInfo } from 'src/app/state/action/course.actions';
import { selectCourseAboutInfo } from 'src/app/state/selector/course.selector';
import { Course } from 'src/app/models/Course';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';

@Component({
  selector: 'app-courses-banner',
  templateUrl: './courses-banner.component.html',
  styleUrls: ['./courses-banner.component.sass'],
})
export class CoursesBannerComponent implements OnInit {
  id: string = '';
  @Input() isRed: boolean = true;

  CourseDetails: Course = {
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
  constructor(
    private store: Store,
    private router: ActivatedRoute,
    private misc: MiscellaneousService
  ) {
    this.id = router.snapshot.params['id'];
  }

  ngOnInit(): void {
    // this.store.dispatch(loadCourseAboutInfo({ courseId: this.id }));
    this.store.select(selectCourseAboutInfo).subscribe((courseData) => {
      this.CourseDetails = courseData;
    });
  }

  toggleColor() {
    this.isRed = !this.isRed;
    if (this.isRed) {
      this.misc.postFavourite(this.CourseDetails.id).subscribe((res: any) => {
        // this.showSuccess();
      });
    } else if (!this.isRed) {
      this.misc.deleteFavourite(this.CourseDetails.id).subscribe((res: any) => {
        // this.store.dispatch(loadFavoriteCourses());
        // this.showInfo();
      });
    }
  }
}

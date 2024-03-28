import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { Error } from 'src/app/models/Error';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import {
  loadChapterData,
  loadCourseAboutInfo,
  loadCourseRating,
} from 'src/app/state/action/course.actions';
import {
  selectChapterDataLoading,
  selectCourseAboutInfo,
  selectCourseAboutInfoError,
  selectCourseAboutInfoLoading,
} from 'src/app/state/selector/course.selector';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.sass'],
})
export class CoursePageComponent implements OnInit {
  id: string = '';
  loading: boolean = true;
  error: boolean = false;
  isAccessiblity: boolean = false;
  errors: Error = {
    code: 0,
    message: '',
  };
  isRed: boolean = true;
  courseAbout$!: Observable<boolean>;
  chapterData$!: Observable<boolean>;
  constructor(
    private router: ActivatedRoute,
    private store: Store,
    private mis: MiscellaneousService
  ) {
    this.id = router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourseAboutInfo({ courseId: this.id }));
    // this.store.dispatch(loadChapterData({ courseId: this.id }));
    this.courseAbout$ = this.store.select(selectCourseAboutInfoLoading);
    this.courseAbout$.subscribe((res) => {
      if (res == false) {
        this.store.select(selectCourseAboutInfo).subscribe((res) => {
          if (res) {
            this.isAccessiblity = res.isEnrolled || false;
            // console.log(this.isAccessiblity);
            this.isRed = res.isFavourite;
            if (this.isAccessiblity) {
              this.store.dispatch(loadChapterData({ courseId: this.id }));
              this.store.select(selectChapterDataLoading).subscribe((res) => {
                if (res == false) {
                  setTimeout(() => {
                    this.loading = res;
                  }, 500);
                } else {
                  this.loading = res;
                }
              });
            }
          }
        });

        setTimeout(() => {
          this.loading = res;
        }, 500);
      } else {
        this.loading = res;
      }
    });

    // this.mis.getRating(parseInt(this.id));
    this.store.dispatch(loadCourseRating({ id: this.id }));
    this.mis.getCourseReviews(parseInt(this.id));
    // console.log('id -> ' + this.id);

    // this.chapterData$ = this.store.select(selectChapterDataLoading);
    // combineLatest([this.courseAbout$, this.chapterData$]).subscribe(
    //   ([courseAbt, chapterData]) => {
    //     if (!courseAbt && !chapterData) {
    //       setTimeout(() => {
    //         this.loading = false;
    //       }, 500);
    //     } else {
    //       this.loading = true;
    //     }
    //   }
    // );
    this.store.select(selectCourseAboutInfoError).subscribe((res) => {
      if (res != null) {
        this.error = true;
        this.errors.message = res.message.split('`').slice(1);
        this.errors.code = res.message.split('`').slice(0, 1);
      }
    });
  }
}

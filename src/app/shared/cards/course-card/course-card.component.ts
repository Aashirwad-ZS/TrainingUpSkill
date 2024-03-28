import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Course } from 'src/app/models/Course';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { ThemeService } from 'src/app/services/theme.service';
import { loadFavoriteCourses } from 'src/app/state/action/course.actions';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.sass'],
  providers: [MessageService],
})
export class CourseCardComponent implements OnInit {
  currentId: number = 0;
  @Input() onGoingFlag: boolean = false;
  isDashBoard: boolean = false;
  RouterLinks = RouterLinks;
  isProfile: boolean = false;
  isDarkMode: boolean = false;
  @Input() isRed: boolean = true;
  @Input() singleCourse: Course = {
    id: 0,
    courseId: 0,
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
    private themeService: ThemeService,
    private misc: MiscellaneousService,
    private store: Store,
    private messageService: MessageService,
    private router: Router
  ) {
    this.themeService.isDarkMode().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnInit(): void {
    this.isProfile = this.router.url.includes('user') ? true : false;
    if (this.router.url == '/dashboard') {
      // console.log('dashboard');
      this.isDashBoard = true;
    }
  }

  toggleColor() {
    this.isRed = !this.isRed;
    this.currentId = this.singleCourse.courseId || this.singleCourse.id;
    if (this.isRed) {
      this.misc.postFavourite(this.currentId).subscribe((res: any) => {
        this.showSuccess();
      });
    } else if (!this.isRed) {
      this.misc.deleteFavourite(this.currentId).subscribe((res: any) => {
        this.store.dispatch(loadFavoriteCourses());

        this.showInfo();
      });
    }
  }

  showInfo() {
    this.messageService.add({
      severity: 'success',
      summary: 'Removed',
      detail: 'Removed from Favorites -> ' + this.currentId,
    });
  }
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Favorite Added -> ' + this.currentId,
    });
  }
}

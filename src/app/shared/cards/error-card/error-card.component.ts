import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Title } from 'src/app/constants/enums/title';
import { Error } from 'src/app/models/Error';
import {
  loadAllBatches,
  loadEnrolledBatches,
} from 'src/app/state/action/batch.actions';
import {
  loadAllCourses,
  loadEnrolledCourses,
} from 'src/app/state/action/course.actions';
import {
  loadAllPaths,
  loadEnrolledPaths,
  loadPathById,
} from 'src/app/state/action/path.actions';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.sass'],
  providers: [MessageService],
})
export class ErrorCardComponent implements OnInit {
  @Input() error: Error = {
    message: '',
    code: 0,
  };
  @Input() title: Title = Title.PATHS;
  constructor(
    private store: Store,
    private router: Router,
    private messageService: MessageService
  ) {
    // this.showInfo();
  }

  ngOnInit(): void {
    this.showInfo();
  }

  handleReload() {
    if (
      this.router.url === '/user' ||
      this.router.url.split('/')[2] === 'ongoing'
    ) {
      if (this.title === Title.COURSES) {
        this.store.dispatch(loadEnrolledCourses());
      }
      if (this.title === Title.PATHS) {
        this.store.dispatch(loadEnrolledPaths());
      }
      if (this.title === Title.BATCHES) {
        this.store.dispatch(loadEnrolledBatches());
      }
    } else if (this.router.url.split('/')[1] === 'batchpage') {
      window.location.reload();
    } else if (this.router.url.split('/')[1] === 'pathdashboard') {
      this.store.dispatch(loadPathById({ id: this.router.url.split('/')[2] }));
    } else if (this.router.url.split('/')[1] === 'course') {
      window.location.reload();
    } else {
      if (this.title === Title.PATHS) {
        this.store.dispatch(loadAllPaths());
      }
      if (this.title === Title.COURSES) {
        this.store.dispatch(loadAllCourses());
      }
      if (this.title === Title.BATCHES) {
        this.store.dispatch(loadAllBatches());
      }
    }
  }

  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Removed',
      detail: 'Removed from Favorites -> ',
    });
  }
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Favourite Added',
    });
  }
}

import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { loadEnrolledBatches } from 'src/app/state/action/batch.actions';
import { loadEnrolledCourses } from 'src/app/state/action/course.actions';
import { loadEnrolledPaths } from 'src/app/state/action/path.actions';
import { selectEnrolledBatches } from 'src/app/state/selector/batch.selector';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  heading: string = 'Profile';
  constructor(private store: Store, private mis: MiscellaneousService) {}

  ngOnInit(): void {
    localStorage.setItem('profile', 'true');
    this.store.dispatch(loadEnrolledCourses());
    this.store.dispatch(loadEnrolledBatches());
    this.store.dispatch(loadEnrolledPaths());
    // this.mis.getBatchesData();
  }
  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    localStorage.setItem('profile', 'false');
  }
  headingsTitle: string[] = ['batches', 'paths', 'courses'];
}

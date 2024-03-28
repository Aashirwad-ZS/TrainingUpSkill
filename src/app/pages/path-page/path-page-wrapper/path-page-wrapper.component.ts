import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { selectPathById } from 'src/app/state/selector/path.selector';
@Component({
  selector: 'app-path-page-wrapper',
  templateUrl: './path-page-wrapper.component.html',
  styleUrls: ['./path-page-wrapper.component.sass'],
})
export class PathPageWrapperComponent implements OnInit {
  id: string = '';
  courseData: any = {};
  constructor(private store: Store,private mis:MiscellaneousService) {
    this.store.select(selectPathById).subscribe((path) => {
      this.courseData = path.courses;
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPathById } from 'src/app/state/selector/path.selector';
import { PathData } from 'src/app/models/Path';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';

@Component({
  selector: 'app-path-info',
  templateUrl: './path-info.component.html',
  styleUrls: ['./path-info.component.sass'],
})
export class PathInfoComponent implements OnInit {
  id: string = '';
  pathData: PathData = {
    id: 0,
    name: '',
    imageUrl: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    updatedAt: '',
    noOfCourses: 0,
    isEnrolled: false,
    isCompleted: false,
    createdAt: '',
    courses: [],
  };
  about: string[] = [];
  constructor(private store: Store,private mis:MiscellaneousService) {
  }

  ngOnInit(): void {

    this.store.select(selectPathById).subscribe((path) => {
      this.pathData = path;
      this.about = this.pathData.about.split('/n');
    });
  }
}

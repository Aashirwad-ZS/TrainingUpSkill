import { ActivatedRoute } from '@angular/router';
import { PathDataService } from '../../../services/path-data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-path-page-wrapper',
  templateUrl: './path-page-wrapper.component.html',
  styleUrls: ['./path-page-wrapper.component.sass'],
})
export class PathPageWrapperComponent implements OnInit {
  id: string = '';
  Course: any = {};
  courseData: any[] = [];
  constructor(
    private pathDataService: PathDataService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.params['id'];
    this.Course = this.pathDataService
      .getPathData(this.id)
      .subscribe((data) => {
        this.Course = data.valueOf();
        this.courseData = this.Course.data.courses;
        console.log(this.courseData);
      });
  }

  ngOnInit(): void {}
}

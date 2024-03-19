import { CourseDataService } from './../../services/course-data.service';
import { BatchDataService } from 'src/app/services/batch-data.service';
import { Component, OnInit } from '@angular/core';
import { PathDataService } from 'src/app/services/path-data.service';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass'],
})
export class DashboardPageComponent implements OnInit {
  constructor(
    private pathDataService: PathDataService,
    private batchDataService: BatchDataService,
    private courseDataService: CourseDataService
  ) {}
  loading: boolean = true;
  headingsTitle: string[] = ['batches', 'paths', 'courses'];

  ngOnInit(): void {
    combineLatest([
      this.pathDataService.allPathsData$,
      this.batchDataService.allBatches$,
      this.courseDataService.allCourses$,
    ]).subscribe(([ pathsdata , batch, course]) => {
      if (typeof pathsdata === 'object' && Object.keys(pathsdata).length > 0 &&
      typeof batch === 'object' && Object.keys(batch).length > 0 &&
      typeof course === 'object' && Object.keys(course).length > 0) {
        // Handle the combined results here
        this.loading = false;
      }
    });
    this.pathDataService.getPaths();
    this.batchDataService.getBatchesDetails();
    this.courseDataService.getCoursesData();
  }
}

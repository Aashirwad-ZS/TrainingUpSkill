import { LoadingCardComponent } from './../../cards/loading-card/loading-card.component';
import { BatchDataService } from './../../../services/batch-data.service';
import { CourseDataService } from './../../../services/course-data.service';
import { ActivatedRoute } from '@angular/router';
import { PathDataService } from './../../../services/path-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-all-section-container',
  templateUrl: './all-section-container.component.html',
  styleUrls: ['./all-section-container.component.sass'],
})
export class AllSectionContainerComponent implements OnInit {
  prefix: string = '';
  heading: string = '';
  allPathsData: any[] = [];
  allCoursesData: any[] = [];
  allBatchesData: any[] = [];
  onGoingPathsData: any[] = [];
  onGoingCoursesData: any[] = [];
  loading: boolean = true;
  constructor(
    private pathDataService: PathDataService,
    private activatedRoute: ActivatedRoute,
    private courseDataService: CourseDataService,
    private batchDataService: BatchDataService,
    private router: Router
  ) {
    this.pathDataService.getEnrolledPaths().subscribe((data: any) => {
      this.onGoingPathsData = data.data.enrolledPaths;
    });
    this.courseDataService.getEnrolledCourses().subscribe((data: any) => {
      this.onGoingCoursesData = data.data.enrolledCourses;
    });
  }
  getAllPaths() {
    combineLatest([this.pathDataService.allPathsData$]).subscribe(
      ([pathsdata]) => {
        if (
          typeof pathsdata === 'object' &&
          Object.keys(pathsdata).length > 0
        ) {
          this.loading = false;
          this.allPathsData = pathsdata.data;
        }
      }
    );
    this.pathDataService.getPaths();
  }
  getAllCourses() {
    this.courseDataService.getCoursesData();
    combineLatest([this.courseDataService.allCourses$]).subscribe(
      ([courseData]) => {
        if (
          typeof courseData === 'object' &&
          Object.keys(courseData).length > 0
        ) {
          this.loading = false;
          this.allCoursesData = courseData.data;
          console.log(this.allCoursesData);
        }
      }
    );
  }
  getAllBatches() {
    this.batchDataService.getBatchesDetails();
    combineLatest([this.batchDataService.allBatches$]).subscribe(
      ([batchData]) => {
        if (
          typeof batchData === 'object' &&
          Object.keys(batchData).length > 0
        ) {
          this.loading = false;
          this.allBatchesData = batchData.data;
          console.log(this.allBatchesData);
        }
      }
    );
  }
  ngOnInit(): void {
    this.activatedRoute.url.subscribe((urlSegments) => {
      console.log(urlSegments);
      if (urlSegments.length >= 1) {
        this.heading = urlSegments[0].path;
      }
      if (urlSegments.length >= 2) {
        this.prefix = urlSegments[1].path;
        if (this.prefix == 'ongoing') {
          this.prefix = 'my';
        }
      }
    });
  }
}

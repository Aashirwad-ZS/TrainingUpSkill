import { ActivatedRoute } from '@angular/router';
import { CourseDataService } from '../../../services/course-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-banner',
  templateUrl: './courses-banner.component.html',
  styleUrls: ['./courses-banner.component.sass'],
})
export class CoursesBannerComponent implements OnInit {
  id: string = '';

  CourseDetails: any = {};
  constructor(
    private courseDataService: CourseDataService,
    private router: ActivatedRoute
  ) {
    this.id = router.snapshot.params['id'];
    this.courseDataService.getCourseAboutInfo(this.id).subscribe((data) => {
      this.CourseDetails = data.valueOf();
      this.CourseDetails = this.CourseDetails.data;
      console.log(this.CourseDetails);
    });
  }

  ngOnInit(): void {}
  isButtonRed: boolean = false;

  toggleColor() {
    this.isButtonRed = !this.isButtonRed;
  }
}

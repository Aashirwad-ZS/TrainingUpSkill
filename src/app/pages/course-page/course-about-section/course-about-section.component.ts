import { ActivatedRoute } from '@angular/router';
import { CourseDataService } from '../../../services/course-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-about-section',
  templateUrl: './course-about-section.component.html',
  styleUrls: ['./course-about-section.component.sass'],
})
export class CourseAboutSectionComponent implements OnInit {
  id: string = '';
  aboutObject: any = {};
  about: String = '';
  aboutArray: string[] = [];

  constructor(
    private courseDataService: CourseDataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.courseDataService.getCourseAboutInfo(this.id).subscribe((data) => {
      this.aboutObject = data.valueOf();
      this.about = this.aboutObject.data.about;
      this.aboutArray = this.about.split('\n');
      console.log(typeof this.about);
      // console.log(this.about);
    });

    console.log(this.aboutArray);
  }

  ngOnInit(): void {}
}

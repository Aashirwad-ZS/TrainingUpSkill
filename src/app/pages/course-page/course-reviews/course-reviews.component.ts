import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-reviews',
  templateUrl: './course-reviews.component.html',
  styleUrls: ['./course-reviews.component.sass'],
})
export class CourseReviewsComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      'star',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '/assets/review-star.svg',
      ),
    );
  }

  ngOnInit(): void {}
}

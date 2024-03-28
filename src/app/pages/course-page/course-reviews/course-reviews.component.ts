import { Ratings } from './../../../models/Ratings';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Review } from 'src/app/models/Reviews';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { loadCourseRating } from 'src/app/state/action/course.actions';
import { selectRatings } from 'src/app/state/selector/course.selector';

@Component({
  selector: 'app-course-reviews',
  templateUrl: './course-reviews.component.html',
  styleUrls: ['./course-reviews.component.sass'],
})
export class CourseReviewsComponent implements OnInit {
  @Input() id: string = '';
  ratingClicked: number = 0;
  isReviewOn: boolean = false;
  isMyReviewOn: boolean = true;
  isAllReviewOn: boolean = true;
  isReviewCommentOn: boolean = false;
  rating: Ratings = {
    averageRating: 0,
    rating: {
      fiveStars: 0,
      fourStars: 0,
      threeStars: 0,
      twoStars: 0,
      oneStars: 0,
    },
  };
  courseReview: Review[] = [];
  ratingPercentage: number[] = [];
  avgRatingArray: boolean[] = [];

  totalRating: number = 0;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private misc: MiscellaneousService,
    private router: ActivatedRoute,
    private store: Store
  ) {
    this.id = this.router.snapshot.params['id'];
    // this.misc.getRating(this.id).subscribe((rating) => {
    //   this.rating = rating.data;
    //   console.log('Rating -> ' + this.rating);
    // });

    //this.createAvgRatingArray();

    this.matIconRegistry.addSvgIcon(
      'star',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/star.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'review-star',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '/assets/review-star.svg'
      )
    );
  }

  handleReviewStarClick(rating: number) {
    this.ratingClicked = rating;
  }

  handleReviewButton() {
    this.isReviewOn = true;
    this.isAllReviewOn = false;
  }

  handleCancelReviewButton() {
    this.isReviewOn = false;
    this.isAllReviewOn = true;
  }
  handleReviewCommentButton() {
    this.isReviewOn = false;
    this.isMyReviewOn = false;
    this.isReviewCommentOn = !this.isReviewCommentOn;
  }
  handleMyReviewButton() {
    this.isMyReviewOn = true;
    this.isReviewCommentOn = false;
  }

  updateRating(rating: Ratings) {
    console.log('rating', rating);

    this.totalRating = Object.values(this.rating.rating).reduce(
      (a, b) => a + b,
      0
    );
    console.log('Total Rating -> ' + this.totalRating);
    this.totalRating = this.totalRating == 0 ? 1 : this.totalRating;
    const updatedRating = { ...this.rating.rating };

    updatedRating.fiveStars =
      (rating.rating.fiveStars / this.totalRating) * 100;

    updatedRating.fourStars =
      (rating.rating.fourStars / this.totalRating) * 100;
    updatedRating.threeStars =
      (rating.rating.threeStars / this.totalRating) * 100;
    updatedRating.twoStars = (rating.rating.twoStars / this.totalRating) * 100;
    updatedRating.oneStars = (rating.rating.oneStars / this.totalRating) * 100;

    this.ratingPercentage[0] = Math.floor(updatedRating.fiveStars);
    this.ratingPercentage[1] = Math.floor(updatedRating.fourStars);
    this.ratingPercentage[2] = Math.floor(updatedRating.threeStars);
    this.ratingPercentage[3] = Math.floor(updatedRating.twoStars);
    this.ratingPercentage[4] = Math.floor(updatedRating.oneStars);
    console.log(this.ratingPercentage);
  }
  createAvgRatingArray() {
    for (let i = 0; i < Math.floor(this.rating.averageRating); i++) {
      this.avgRatingArray.push(true);
    }
    if (this.rating.averageRating % 1 != 0) {
      this.avgRatingArray.push(false);
    }
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log('Rating Total -> ' + this.totalRating);

    this.store.select(selectRatings).subscribe((res) => {
      if (res.averageRating != 0) this.rating = res;
      console.log(this.rating.rating.fiveStars);
    });

    this.updateRating(this.rating);
    this.createAvgRatingArray();
    this.misc.courseReviews$.subscribe((res) => {
      console.log(res);
      this.courseReview = res;
    });
  }
}

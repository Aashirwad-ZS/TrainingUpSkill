import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesBannerComponent } from './courses-banner/courses-banner.component';
import { CourseAboutSectionComponent } from './course-about-section/course-about-section.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapterWrapperComponent } from './chapter/chapter-wrapper/chapter-wrapper.component';
import { ChapterContentContainerComponent } from './chapter/chapter-wrapper/chapter-content-container/chapter-content-container.component';
import { CoursePageComponent } from './course-page.component';
import { CourseReviewsComponent } from './course-reviews/course-reviews.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { CoursePageRoutingModule } from './course-page-routing.module';
import { ShimmerModule } from 'src/app/shimmer/shimmer.module';
import { ErrorPageModule } from 'src/app/error-page/error-page.module';

@NgModule({
  declarations: [
    CoursesBannerComponent,
    CourseAboutSectionComponent,
    ChapterComponent,
    ChapterWrapperComponent,
    ChapterContentContainerComponent,
    CoursePageComponent,
    CourseReviewsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    CardsModule,
    CoursePageRoutingModule,
    ShimmerModule,
    ErrorPageModule,
  ],
})
export class CoursePageModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundModule } from './error-page/page-not-found/page-not-found.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ZopsmartApiInterceptorService } from './services/zopsmart-api-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './state/effects/course.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BatchEffects } from './state/effects/batch.effects';
import {
  batchDetailsReducer,
  batchReducer,
  enrolledBatchesReducer,
  pathDataReducer,
  studentReducer,
  trainerReducer,
} from './state/reducer/batch.reducer';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PathEffects } from './state/effects/path.effects';
import {
  NoOfenrolledPathsReducer,
  PathByIdReducer,
  enrolledPathsReducer,
  pathReducer,
} from './state/reducer/path.reducer';
import { RouterModule } from '@angular/router';
import {
  allCoursesReducer,
  chapterDataReducer,
  courseAboutInfoReducer,
  courseRatingReducer,
  enrolledCoursesReducer,
  favoriteCoursesReducer,
  noOfEnrolledCoursesReducer,
} from './state/reducer/course.reducer';


@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({ 
      allCourses: allCoursesReducer,
      enrolledCourses: enrolledCoursesReducer,
      courseAboutInfo: courseAboutInfoReducer,
      chapterData: chapterDataReducer,
      noOfEnrolledCourses: noOfEnrolledCoursesReducer,
      favoriteCourses: favoriteCoursesReducer,
      batch: batchReducer,
      allPaths: pathReducer,
      pathById: PathByIdReducer,
      enrolledPaths: enrolledPathsReducer,
      student: studentReducer,
      trainer: trainerReducer,
      batchDetails: batchDetailsReducer,
      batchPathData: pathDataReducer,
      enrolledBatches: enrolledBatchesReducer,
      numberOfEnrolledPaths: NoOfenrolledPathsReducer,
      courseRating: courseRatingReducer,
    }),
    EffectsModule.forRoot([CourseEffects, BatchEffects, PathEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    RouterModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ZopsmartApiInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutModule } from './layout/layout.module';
import { CardsModule } from './shared/cards/cards.module';
import { ProfilePageModule } from './pages/profile-page/profile-page.module';
import { DashboardPageModule } from './pages/dashboard-page/dashboard-page.module';
import { CoursePageModule } from './pages/course-page/course-page.module';
import { PathPageModule } from './pages/path-page/path-page.module';
import { BatchPageModule } from './pages/batch-page/batch-page.module';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ZopsmartApiInterceptorService } from './services/zopsmart-api-interceptor.service';
@NgModule({
  declarations: [AppComponent, LoginComponent],

  imports: [
    BrowserModule,
    LayoutModule,
    CardsModule,
    ProfilePageModule,
    DashboardPageModule,
    CoursePageModule,
    PathPageModule,
    BatchPageModule,
    FormsModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    PageNotFoundModule,
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

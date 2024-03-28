import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShimmerComponent } from './shimmer.component';
import { ShimmerLoadingComponent } from './card-shimmer/shimmer-loading/shimmer-loading.component';
import { CardsModule } from '../shared/cards/cards.module';
import { CardShimmerComponent } from './card-shimmer/card-shimmer.component';
import { DashboardShimmerComponent } from './dashboard-shimmer/dashboard-shimmer.component';
import { PageShimmerComponent } from './page-shimmer/page-shimmer.component';
import { PathCourseCardShimmerComponent } from './path-course-card-shimmer/path-course-card-shimmer.component';
import { PathInfoShimmerComponent } from './path-info-shimmer/path-info-shimmer.component';

@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [
    ShimmerComponent,
    CardShimmerComponent,
    DashboardShimmerComponent,
    PageShimmerComponent,
    PathCourseCardShimmerComponent,
    PathInfoShimmerComponent,
  ],
  exports: [ShimmerComponent, CardShimmerComponent, DashboardShimmerComponent,PageShimmerComponent],
})
export class ShimmerModule {}

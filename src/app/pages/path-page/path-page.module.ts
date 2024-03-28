import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { PathCourseCardComponent } from '../../shared/cards/path-course-card/path-course-card.component';
import { PathInfoComponent } from './path-info/path-info.component';
import { PathPageWrapperComponent } from './path-page-wrapper/path-page-wrapper.component';
import { PathPageComponent } from './path-page.component';
import { PathPageRoutingModule } from './path-page-routing.module';
import { ShimmerModule } from 'src/app/shimmer/shimmer.module';

@NgModule({
  declarations: [
    PathInfoComponent,
    PathPageComponent,
    PathPageWrapperComponent,
  ],
  imports: [CommonModule, CardsModule,PathPageRoutingModule,ShimmerModule],
  exports: [PathCourseCardComponent],
})
export class PathPageModule {}

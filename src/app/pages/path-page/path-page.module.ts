import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { PathCourseCardComponent } from '../../shared/cards/path-course-card/path-course-card.component';
import { PathInfoComponent } from './path-info/path-info.component';
import { PathPageWrapperComponent } from './path-page-wrapper/path-page-wrapper.component';
import { PathPageComponent } from './path-page.component';

@NgModule({
  declarations: [
    PathInfoComponent,
    PathPageComponent,
    PathPageWrapperComponent,
  ],
  imports: [CommonModule, CardsModule],
  exports: [PathCourseCardComponent],
})
export class PathPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardsModule } from '../cards/cards.module';
import { AllSectionContainerComponent } from './all-section-container/all-section-container.component';
import { BatchInfoCardContainerComponent } from './batch-info-card-container/batch-info-card-container.component';
import { RouterModule } from '@angular/router';
import { ShimmerModule } from 'src/app/shimmer/shimmer.module';
import { ToastModule } from 'primeng/toast';
import { ErrorPageModule } from 'src/app/error-page/error-page.module';

@NgModule({
  declarations: [
    CardContainerComponent,
    AllSectionContainerComponent,
    BatchInfoCardContainerComponent,
  ],
  imports: [
    CommonModule,
    CardsModule,
    RouterModule,
    ShimmerModule,
    ToastModule,
    ErrorPageModule
  ],
  exports: [CardContainerComponent, BatchInfoCardContainerComponent],
})
export class ContainersModule {}

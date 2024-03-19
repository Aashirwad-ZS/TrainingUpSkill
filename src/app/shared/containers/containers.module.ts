import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardsModule } from '../cards/cards.module';
import { AllSectionContainerComponent } from './all-section-container/all-section-container.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BatchInfoCardContainerComponent } from './batch-info-card-container/batch-info-card-container.component';

@NgModule({
  declarations: [
    CardContainerComponent,
    AllSectionContainerComponent,
    BatchInfoCardContainerComponent,
  ],
  imports: [CommonModule, CardsModule, RouterModule, AppRoutingModule],
  exports: [CardContainerComponent, BatchInfoCardContainerComponent],
})
export class ContainersModule {}

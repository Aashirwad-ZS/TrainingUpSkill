import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { ContainersModule } from 'src/app/shared/containers/containers.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { ShimmerModule } from 'src/app/shimmer/shimmer.module';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [DashboardHeaderComponent, DashboardPageComponent],
  imports: [
    CommonModule,
    ContainersModule,
    DashboardPageRoutingModule,
    CardsModule,
    ShimmerModule,
    RippleModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class DashboardPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersModule } from 'src/app/shared/containers/containers.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { CardsModule } from 'src/app/shared/cards/cards.module';

@NgModule({
  declarations: [DashboardPageComponent, DashboardHeaderComponent],
  imports: [
    CommonModule,
    ContainersModule,
    AppRoutingModule,
    RouterModule,
    CardsModule,
  ],
})
export class DashboardPageModule {}

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SearchPageComponent } from './search-page.component';
import { ShimmerModule } from 'src/app/shimmer/shimmer.module';
import { CommonModule } from '@angular/common';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { ErrorPageModule } from 'src/app/error-page/error-page.module';
import { SearchPageRoutingModule } from './search-page-routing.module';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
  },
];

@NgModule({
  declarations: [SearchPageComponent],
  imports: [CommonModule, ShimmerModule, CardsModule, ErrorPageModule,
    SearchPageRoutingModule],
  exports: [SearchPageComponent],
})
export class SearchPageModule {}

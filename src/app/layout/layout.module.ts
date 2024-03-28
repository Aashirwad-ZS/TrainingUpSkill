import { HeaderFooterModule } from './../common/header-footer/header-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { UserComponent } from './user/user.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ErrorPageModule } from '../error-page/error-page.module';
@NgModule({
  declarations: [LayoutComponent, UserComponent],
  imports: [CommonModule, LayoutRoutingModule, HeaderFooterModule,ErrorPageModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoContentComponent } from './no-content/no-content.component';



@NgModule({
  declarations: [PageNotFoundComponent, NoContentComponent],
  imports: [
    CommonModule
  ],
  exports: [PageNotFoundComponent, NoContentComponent]
})
export class ErrorPageModule { }

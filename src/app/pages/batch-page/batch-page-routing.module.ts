import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchPageComponent } from './batch-page.component';

const routes: Routes = [
  {
    path: '',
    component: BatchPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatchPageRoutingModule { }

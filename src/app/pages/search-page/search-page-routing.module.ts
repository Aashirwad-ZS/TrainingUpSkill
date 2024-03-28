import { NgModule } from '@angular/core';
import { SearchPageComponent } from './search-page.component'; 
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class SearchPageRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathPageComponent } from './path-page.component';

const routes: Routes = [
  {
    path: "",
    component: PathPageComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathPageRoutingModule { }

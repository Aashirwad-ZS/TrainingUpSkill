import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AllSectionContainerComponent } from '../shared/containers/all-section-container/all-section-container.component';
import { PageNotFoundComponent } from '../error-page/page-not-found/page-not-found.component';
import { SearchPageComponent } from '../pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../pages/dashboard-page/dashboard-page.module').then(
            (e) => e.DashboardPageModule
          ),
      },
      {
        path: 'pathdashboard/:id',
        loadChildren: () =>
          import('../pages/path-page/path-page.module').then(
            (e) => e.PathPageModule
          ),
      },
      {
        path: 'batchpage/:id',
        loadChildren: () =>
          import('../pages/batch-page/batch-page.module').then(
            (m) => m.BatchPageModule
          ),
      },
      {
        path: 'course/:id',
        loadChildren: () =>
          import('../pages/course-page/course-page.module').then(
            (m) => m.CoursePageModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../pages/profile-page/profile-page.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'paths/all',
        component: AllSectionContainerComponent,
      },
      {
        path: 'courses/all',
        component: AllSectionContainerComponent,
      },
      {
        path: 'batches/all',
        component: AllSectionContainerComponent,
      },
      {
        path: 'paths/ongoing',
        component: AllSectionContainerComponent,
      },
      {
        path: 'courses/ongoing',
        component: AllSectionContainerComponent,
      },
      {
        path: 'courses/favourites',
        component: AllSectionContainerComponent,
      },
      {
        path: 'courses/favourites',
        component: AllSectionContainerComponent,
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../pages/search-page/search-page.module').then(
            (m) => m.SearchPageModule
          ),
      },
      { path: '**', component: PageNotFoundComponent },
      
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

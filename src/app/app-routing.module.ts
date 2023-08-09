import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/dashboard-layout/dashboard-layout.module').then(m => m.DashboardLayoutModule)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, 
  // { path: '**', redirectTo: 'dashboard' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

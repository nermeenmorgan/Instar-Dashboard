import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardLayoutRoutes } from './dashboard-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRoutes),
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
    declarations: [
    DashboardComponent,
  ]
})

export class DashboardLayoutModule {}

import { WelcomeComponent } from './../pages/dashboard/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TotalIncomeComponent } from '../pages/dashboard/total-income/total-income.component';
import { OrderStatusComponent } from '../pages/dashboard/order-status/order-status.component';
import { ProductInStockComponent } from '../pages/dashboard/product-in-stock/product-in-stock.component';
import { TasksCalendarComponent } from '../pages/dashboard/tasks-calendar/tasks-calendar.component';
import { CustomerReviewsComponent } from '../pages/dashboard/customer-reviews/customer-reviews.component';
import { AuthIllustrationComponent } from './auth-illustration/auth-illustration.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    TasksCalendarComponent,
    ProductInStockComponent,


  ],
  declarations: [
    AuthIllustrationComponent,
    WelcomeComponent,
    TotalIncomeComponent,
    OrderStatusComponent,
    CustomerReviewsComponent,
    TopbarComponent,
    SidebarComponent,
    AuthIllustrationComponent
  ],
  exports: [
    AuthIllustrationComponent,
    WelcomeComponent,
    TotalIncomeComponent,
    TasksCalendarComponent,
    ProductInStockComponent,
    OrderStatusComponent,
    CustomerReviewsComponent,
    TopbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }

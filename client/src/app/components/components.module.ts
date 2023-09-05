import { WelcomeComponent } from './../pages/dashboard/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent as AdminSidebarComponent } from './admin/sidebar/sidebar.component';
import { SidebarComponent as ProviderSidebarComponent } from './provider/sidebar/sidebar.component';

import { RouterModule } from '@angular/router';
import { TopbarComponent as AdminTopbarComponent } from './admin/topbar/topbar.component';
import { TopbarComponent as ProviderTopbarComponent} from './provider/topbar/topbar.component';
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

    AdminTopbarComponent,
    AdminSidebarComponent,

    ProviderTopbarComponent,
    ProviderSidebarComponent,

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

    AdminTopbarComponent,
    AdminSidebarComponent,

    ProviderTopbarComponent,
    ProviderSidebarComponent,
  ]
})
export class ComponentsModule { }

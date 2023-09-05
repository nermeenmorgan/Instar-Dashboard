import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProviderLayoutComponent } from './layouts/provider-layout/provider-layout.component';
import { ComponentsModule } from "./components/components.module";


import { UsersListComponent } from './dashboard/admin-dashboard/users-list/users-list.component';
import { ProductsListComponent } from './dashboard/admin-dashboard/products-list/products-list.component';
import { StatsComponent } from './dashboard/admin-dashboard/stats/stats.component';
import { RequestsComponent } from './dashboard/admin-dashboard/requests/requests.component';
import { SalesComponent } from './dashboard/admin-dashboard/sales/sales.component';

import { UserProfileComponent } from './dashboard/admin-dashboard/user-profile/user-profile.component';
import { ProviderProfileComponent } from './dashboard/provider-dashboard/profile/provider-profile.component';
import { ProviderProductsComponent } from './dashboard/provider-dashboard/products/provider-products.component';
import { ProviderRequestsComponent } from './dashboard/provider-dashboard/requests/provider-requests.component';
import { ProviderDashboardComponent } from './dashboard/provider-dashboard/dashboard/provider-dashboard.component';
import { DashboardComponent } from './dashboard/admin-dashboard/dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,        
        AdminLayoutComponent,
        ProviderLayoutComponent,
        AuthLayoutComponent,

        // admin pages

        UsersListComponent,
        ProductsListComponent,
        StatsComponent,
        RequestsComponent,
        SalesComponent,
        UserProfileComponent,

        // provider pages

        ProviderProfileComponent,
        ProviderProductsComponent,
        ProviderRequestsComponent,
        ProviderDashboardComponent,
        DashboardComponent
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ComponentsModule,
        BrowserModule,
        NgChartsModule
    ]
})
export class AppModule { }

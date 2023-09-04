import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardLayoutComponent } from './layouts/admin-layout/dashboard-layout.component';
import { ComponentsModule } from "./components/components.module";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { StatsComponent } from './pages/stats/stats.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NgChartsModule } from 'ng2-charts';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProviderLayoutComponent } from './layouts/provider-layout/provider-layout.component';
import { ProviderProfileComponent } from './dashboard/provider-dashboard/provider-profile/provider-profile.component';
import { ProviderProductsComponent } from './dashboard/provider-dashboard/provider-products/provider-products.component';
import { ProviderRequestComponent } from './dashboard/provider-dashboard/provider-request/provider-request.component';
import { ProviderDashboardComponent } from './dashboard/provider-dashboard/provider-dashboard/provider-dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardLayoutComponent,
        AuthLayoutComponent,
        UsersListComponent,
        ProductsListComponent,
        StatsComponent,
        RequestsComponent,
        SalesComponent,
        UserProfileComponent,
        ProviderLayoutComponent,
        ProviderProfileComponent,
        ProviderProductsComponent,
        ProviderRequestComponent,
        ProviderDashboardComponent
        
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

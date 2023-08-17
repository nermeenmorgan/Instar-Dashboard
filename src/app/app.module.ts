import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ComponentsModule } from "./components/components.module";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardLayoutComponent,
        AuthLayoutComponent,
        UsersListComponent,
        ProductsListComponent,
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
        MatIconModule,
        ComponentsModule,
        BrowserModule,
    ]
})
export class AppModule { }

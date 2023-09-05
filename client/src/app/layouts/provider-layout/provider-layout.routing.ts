import { Routes } from '@angular/router';

import { ProviderProfileComponent } from 'src/app/dashboard/provider-dashboard/profile/provider-profile.component';
import { ProviderProductsComponent } from 'src/app/dashboard/provider-dashboard/products/provider-products.component';
import { ProviderRequestsComponent } from 'src/app/dashboard/provider-dashboard/requests/provider-requests.component';
import { ProviderDashboardComponent } from 'src/app/dashboard/provider-dashboard/dashboard/provider-dashboard.component';

export const ProviderLayoutRoutes: Routes = [
    { path: 'dashboard', component: ProviderDashboardComponent, data: { pageTitle: 'Dashboard' } },
    { path: 'products', component: ProviderProductsComponent, data: { pageTitle: 'Products List' }},
    { path: 'requests', component: ProviderRequestsComponent, data: { pageTitle: 'Requests' }},
    { path: 'profile/:id', component: ProviderProfileComponent, data: { pageTitle: 'User Profile' }}  
];
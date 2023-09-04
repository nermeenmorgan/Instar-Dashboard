import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UsersListComponent } from 'src/app/pages/users-list/users-list.component';
import { ProductsListComponent } from 'src/app/pages/products-list/products-list.component';
import { SalesComponent } from 'src/app/pages/sales/sales.component';
import { RequestsComponent } from 'src/app/pages/requests/requests.component';
import { StatsComponent } from 'src/app/pages/stats/stats.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';

export const DashboardLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, data: { pageTitle: 'Dashboard' } },
    { path: 'users-list', component: UsersListComponent, data: { pageTitle: 'Users List' }},
    { path: 'products-list', component: ProductsListComponent, data: { pageTitle: 'Products List' }},
    { path: 'sales', component: SalesComponent, data: { pageTitle: 'Sales' }},
    { path: 'requests', component: RequestsComponent, data: { pageTitle: 'Requests' }},
    { path: 'stats', component: StatsComponent, data: { pageTitle: 'Stats' }},
    { path: 'user-profile/:id', component: UserProfileComponent, data: { pageTitle: 'User Profile' }}  
];
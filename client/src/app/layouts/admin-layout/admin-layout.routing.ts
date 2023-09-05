import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UsersListComponent } from 'src/app/dashboard/admin-dashboard/users-list/users-list.component';
import { ProductsListComponent } from 'src/app/dashboard/admin-dashboard/products-list/products-list.component';
import { SalesComponent } from 'src/app/dashboard/admin-dashboard/sales/sales.component';
import { RequestsComponent } from 'src/app/dashboard/admin-dashboard/requests/requests.component';
import { StatsComponent } from 'src/app/dashboard/admin-dashboard/stats/stats.component';
import { UserProfileComponent } from 'src/app/dashboard/admin-dashboard/user-profile/user-profile.component';


//add roles guard
// import { AuthGuard } from '../../guards/auth.guard';
// import { RoleGuard } from '../../guards/role.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, data: { pageTitle: 'Dashboard' } },
    { path: 'users-list', component: UsersListComponent, data: { pageTitle: 'Users List' }},
    { path: 'products-list', component: ProductsListComponent, data: { pageTitle: 'Products List' }},
    { path: 'sales', component: SalesComponent, data: { pageTitle: 'Sales' }},
    { path: 'requests', component: RequestsComponent, data: { pageTitle: 'Requests' }},
    { path: 'stats', component: StatsComponent, data: { pageTitle: 'Stats' }},
    { path: 'user-profile/:id', component: UserProfileComponent, data: { pageTitle: 'User Profile' }}  
];

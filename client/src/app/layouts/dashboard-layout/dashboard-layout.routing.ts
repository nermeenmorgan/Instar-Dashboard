import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UsersListComponent } from 'src/app/pages/users-list/users-list.component';
import { ProductsListComponent } from 'src/app/pages/products-list/products-list.component';
import { SalesComponent } from 'src/app/pages/sales/sales.component';
import { RequestsComponent } from 'src/app/pages/requests/requests.component';
import { StatsComponent } from 'src/app/pages/stats/stats.component';

export const DashboardLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users-list', component: UsersListComponent},
    { path: 'products-list', component: ProductsListComponent},
    { path: 'sales', component: SalesComponent},
    { path: 'requests', component: RequestsComponent},
    { path: 'stats', component: StatsComponent},
    
];
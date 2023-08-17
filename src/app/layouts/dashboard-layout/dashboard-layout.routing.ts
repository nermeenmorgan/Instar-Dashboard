import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UsersListComponent } from 'src/app/pages/users-list/users-list.component';
import { ProductsListComponent } from 'src/app/pages/products-list/products-list.component';

export const DashboardLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users-list', component: UsersListComponent},
    { path: 'products-list', component: ProductsListComponent}
    
];
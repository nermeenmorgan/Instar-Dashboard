import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
  declarations: [
    TopbarComponent,
    SidebarComponent
  ],
  exports: [
    TopbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }

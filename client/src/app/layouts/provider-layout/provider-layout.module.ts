import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProviderLayoutRoutes } from './provider-layout.routing';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProviderLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
    declarations: [
  ]
})

export class ProviderLayoutModule {}

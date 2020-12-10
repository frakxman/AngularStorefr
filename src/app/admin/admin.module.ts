import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './components/products/products.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

import { AdminRoutingModule } from './admin-routing.module';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NavComponent,
    ProductFormComponent,
    ProductsComponent,
    DashboardComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }

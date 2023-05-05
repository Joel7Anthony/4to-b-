import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    PagesComponent,
    CategoryComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PagesComponent,
    CategoryComponent,
    DashboardComponent,
    ProductsComponent
  ]
})
export class PagesModule { }

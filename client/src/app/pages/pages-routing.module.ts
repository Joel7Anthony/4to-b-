import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundPagesComponent  } from '../not-found-pages/not-found-pages.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {path: '', component:PagesComponent,
  children:[//rutas protegidas
  {path:'category', component:CategoryComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'dashboard', component:DashboardComponent},
  ]},

  {path: '**', component:NotFoundPagesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModuleModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundPagesComponent } from './not-found-pages/not-found-pages.component';

const routes: Routes = [//rutas principales o raices
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:"dashboard", component:DashboardComponent},
  {path:"**", component:NotFoundPagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

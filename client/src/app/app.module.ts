import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPagesComponent } from './not-found-pages/not-found-pages.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductsComponent } from './pages/products/products.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { WebModule } from './web/web.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPagesComponent,
    /*PagesComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AuthModule,
    //PagesModule,
    SharedModule,
    //WebModule
  ],
  exports:[
    BrowserModule,
    AppRoutingModule,
    //AuthModule,
    //PagesModule,
    SharedModule,
   // WebModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    WebComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WebComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent
  ]
})
export class WebModule { }

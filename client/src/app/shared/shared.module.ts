import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SharedComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ]
})
export class SharedModule { }

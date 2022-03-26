import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from '../components/components.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    NotFoundComponent,
    MainAdminComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SwiperModule,
    RouterModule,
    NgxTypedJsModule
  ],
  exports: [
    HomeComponent,
    AdminComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }

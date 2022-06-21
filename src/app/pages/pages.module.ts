import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from '../components/components.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminTestimoniosComponent } from './admin/main-admin/admin-testimonios/admin-testimonios.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    NotFoundComponent,
    MainAdminComponent,
    LoginComponent,
    AdminTestimoniosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SwiperModule,
    RouterModule,
    NgxTypedJsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ImageCropperModule
  ],
  exports: [
    HomeComponent,
    AdminComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }

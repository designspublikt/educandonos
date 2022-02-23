import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from '../components/components.module';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SwiperModule,
    NgxTypedJsModule
  ],
  exports: [
    HomeComponent,
    AdminComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }

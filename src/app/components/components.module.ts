import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SwiperModule } from 'swiper/angular';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { AdminTopBarComponent } from './admin-top-bar/admin-top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AdminTopBarComponent,
    AdminSideBarComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,
    NgxTypedJsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ImageCropperModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AdminTopBarComponent,
    AdminSideBarComponent
  ]
})
export class ComponentsModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,
    NgxTypedJsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }

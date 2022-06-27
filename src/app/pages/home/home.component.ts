import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  safeUrl: SafeResourceUrl = '';
  testimonios: any[] = [];

  constructor(  private _Sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.testimonios.length = 5;
    this.safeUrl = this._Sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/rL0hIFWL1Qg?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0');
    const swiper = new Swiper('.swiper');
  }

}

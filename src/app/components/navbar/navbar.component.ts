import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  scrolled: boolean = false;
  
  @HostListener('window:scroll',['$event']) windowScroll(event: Event) {
    let top = window.scrollY;

      if(top > 0) {
        this.scrolled = true;
      }else {
        this.scrolled = false;
      }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

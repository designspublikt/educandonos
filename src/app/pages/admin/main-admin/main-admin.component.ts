import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {

  sidebar: boolean = false;

  constructor(  private _Router: Router) {
    this._Router.events.subscribe((event:any) => {
      this.sidebar = false;
    });
  }

  ngOnInit(): void {
  }

  showSideBar() {
    this.sidebar = !this.sidebar;
  }

}

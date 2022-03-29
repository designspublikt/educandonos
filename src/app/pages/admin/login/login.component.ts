import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(  private _http: HttpClient,
                private _FormBuilder: FormBuilder) {

                  this.loginForm = this._FormBuilder.group({
                    username: ['', Validators.required],
                    password: ['', Validators.required]
                  });
                }

  ngOnInit(): void {
  }

  login() {
    
  }

}

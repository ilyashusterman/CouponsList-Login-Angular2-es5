
import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import {Directive, OnDestroy} from '@angular/core';
import {AdminGuard} from './admin.guard';
import {ROUTER_DIRECTIVES} from  '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
// import {Location} from '@angular/';

import { provideRouter, RouterConfig } from '@angular/router';
import { Router, CanActivate } from '@angular/router';
import { Injectable }          from '@angular/core';

@Component({
  selector: 'admin',
  directives: [ CORE_DIRECTIVES ],
  templateUrl: 'app/admin/admin.component.html',
//   styleUrls: ['app/admin.component.css']
})


// @CanActivate(() => isLoggedin('ADMIN'))

export class AdminComponent{
  jwt: string;
  response: string;
  api: string;
  errorMessage: string;


  constructor(public router: Router, public http: Http) {
    this.jwt = localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // callAnonymousApi() {
  //   this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
  // }

  // callSecuredApi() {
  //   this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  // }

  // _callApi(type, url) {
  //   this.response = null;
  //   if (type === 'Anonymous') {
  //     // For non-protected routes, just use Http
  //     this.http.get(url)
  //       .subscribe(
  //         response => this.response = response.text(),
  //         error => this.response = error.text()
  //       );
  //   }
  // }
}

import { Component } from '@angular/core';
import {User} from './User';
import { NgForm }    from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers, Response } from '@angular/http';
import { contentHeaders } from '../common/headers';
import {Token} from './token';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
    directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ],
    styleUrls:['app/login/login.component.css','app/login/loading.component.css','app/login/field.component.css'],
    templateUrl: 'app/login/login.component.html'
    
})


export class LoginComponent{
 pageTitle: string ='Welcome to Coupon Managment System';
 errorMessage:string ='Login Failed ';
 loading: boolean = false;
 debugWindow: boolean = false;
 isLoggedIn:boolean = true;
 errorFlag: boolean = false;
 user = new User();
 clientTypes = ['ADMIN', 'COMPANY',
            'CUSTOMER'];
token: Token;
SERVER_URL: string ='http://localhost:8080/CouponWebAppPhase2/rest/login/';

 constructor(public router: Router, public http: Http) {
     this.token = localStorage.getItem('token');
  }


  login(event: any,user: User) {
    this.loading=true;
    event.preventDefault();
    let body = JSON.stringify(user);
    this.http.post('http://localhost:8080/CouponWebAppPhase2/rest/login', body, { headers: contentHeaders })
      .subscribe(
        response => {
            let data=<Token>response.json();
           console.log(JSON.stringify(data))// this to lines of code
           // console.log(user)//just for checking in console for debug 
          localStorage.setItem('token',  JSON.stringify(data));
        //   this.router.navigate(['/home']);
        switch (user.clientType) {
            case 'ADMIN':
                this.router.navigate(['/admin']);
                break;
            case 'COMPANY':
                this.router.navigate(['/company']);
                break;
            case 'CUSTOMER':
                this.router.navigate(['/customer']);
                break;
            default:
                break;
        }
        this.loading=false;
        },
        error => {
          alert(error.text());
          console.log(error.text());
           this.loading=false;
           this.setErrorMessage('Login failed '+error.text())
           this.errorFlag=true;
        }
      );
  }

  logout() {
    return this.http.get(this.SERVER_URL + '/logout', {
      headers: new Headers({
    //    'token': this.token
    'Content-Type': 'application/json'
      })
    })
    .map((res : any) => {
      this.token = undefined;
      localStorage.removeItem('token');
      Observable.of(true);
      this.router.navigate(['/login']);
    });
    
    //   this.token = undefined;
    // localStorage.removeItem('token');
    // return Observable.of(true);
  }


   toggleDebugWindow(): void {
        this.debugWindow = !this.debugWindow;
    }
      get diagnostic() { return JSON.stringify(this.user); }

   setLogin(){
       this.isLoggedIn = false;
   }
   setErrorMessage(message :string){
       this.errorMessage=message;
   }

  private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        this.setErrorMessage('Authentucation error '+error.statusText)
        return Observable.throw(error.json().error || 'Server error');
    }


   
 
}

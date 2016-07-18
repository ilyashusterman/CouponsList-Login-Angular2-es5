import {isLoggedin,getTokenFromBrowser}  from '../login/isLoggedIn.service';
import { Injectable }          from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Token} from'../login/token';

@Injectable()
export class AdminGuard implements CanActivate {
 token :Token;
 errorMessage :string='';
 loginCheck: string ='http://localhost:8080/CouponWebAppPhase2/rest/login/checkToken/';
 constructor( private router: Router,private http :Http) {

 }
 private getTokenFromServer (tokenid:string): Observable<Token> {
    return this.http.get(this.loginCheck+tokenid)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
   getToken(id:string) {
    this.getTokenFromServer(id)
                     .subscribe(
                       token => this.token = token,
                       error =>  this.errorMessage = <any>error);
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
   canActivate() {
    if (isLoggedin("ADMIN")) {
  //  let BWtoken  =getTokenFromBrowser();
  //  console.log('the login check = '+this.loginCheck+BWtoken.id)
  //  this.getToken(BWtoken.id);
  //  console.log('the token is'+this.token.id)
         return true; }
     this.router.navigate(['/login']);
    return false;
  }


}

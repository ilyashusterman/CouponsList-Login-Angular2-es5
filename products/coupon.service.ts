import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Company } from './company';
import { Coupon } from './coupon';


@Injectable()
export class CouponService {
    private _couponUrl  = 'api/products/coupons.json';
    private _companyUrl = 'api/products/companies.json';

    constructor(private _http: Http) { }

    getCoupons(): Observable<Coupon[]> {
        return this._http.get(this._couponUrl)
            .map((response: Response) => <Coupon[]> response.json().coupon)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
        getCompanies(): Observable<Company[]> {
        return this._http.get(this._companyUrl)
            .map((response: Response) => <Company[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
          getCompaniesAll(): Observable<Company[]> {
        return this._http.get(this._companyUrl)
            .map((response: Response) => <Company[]> response.json().company)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
                  
    }
private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
}
    getCoupon(id: number): Observable<Coupon> {
        return this.getCoupons()
            .map((coupons: Coupon[]) => coupons.find(p => p.id === id));
    }
        getCompany(id: number): Observable<Company> {
        return this.getCompanies()
            .map((companies: Company[]) => companies.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

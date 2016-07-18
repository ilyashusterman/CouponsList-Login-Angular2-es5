import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Coupon } from './coupon';
import { Company } from './company';
import { CouponFilterPipe } from './coupon-filter.pipe';
import { CompanyFilterPipe } from './company-filter.pipe';
import { CouponService } from './coupon.service';
import { NgForm }    from '@angular/common';


@Component({
    templateUrl: 'app/products/coupon-list.component.html',
    styleUrls: ['app/products/coupon-list.component.css','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'],
    pipes: [CouponFilterPipe,CompanyFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})

export class CouponListComponent implements OnInit {
    pageTitle: string = 'List of ';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    Addlisting: boolean = false;
    errorMessage: string;
    coupons: Coupon[];
    companies: Company[];
 CouponTypes = ['Electricity', 'Food',
            'Health', 'Beauty'];
  newCoupon = new Coupon();
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.newCoupon); }

    constructor(private _couponService: CouponService) {

    }
    timeToDate(nanos: number){
        var time = new Date(0).getTime();
        var date = new Date(time);
        return new Date((nanos*10000)-time);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
     toggleCouponListing(): void {
        this.Addlisting = !this.Addlisting;
    }

    ngOnInit(): void {
           this._couponService.getCoupons()
                     .subscribe(
                       coupons => this.coupons = coupons,
                       error =>  this.errorMessage = <any>error);

                       this._couponService.getCompaniesAll()
                     .subscribe(
                       companies => this.companies = companies,
                       error =>  this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'List: ' + message;
    }
}

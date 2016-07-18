import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { Coupon } from './coupon';
import { CouponService } from './coupon.service';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl: 'app/products/coupon-detail.component.html'
})
export class CouponDetailComponent implements OnActivate {
    pageTitle: string = 'Coupon Detail';
    coupon: Coupon;
    errorMessage: string;

    constructor(private _couponService: CouponService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.getCoupon(id);
    }

    getCoupon(id: number) {
        this._couponService.getCoupon(id)
            .subscribe(
            coupon => this.coupon = coupon,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/coupons']);
    }

}

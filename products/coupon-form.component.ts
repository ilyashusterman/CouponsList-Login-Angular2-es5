import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Coupon }    from './Coupon';
@Component({
  selector: 'coupon-form',
  templateUrl: 'app/coupon-list.component.html'
})
export class CouponFormComponent {
  CouponType = ['Electricity', 'Food',
            'Health', 'Beauty'];
  newCoupon = new Coupon();
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.newCoupon); }
}
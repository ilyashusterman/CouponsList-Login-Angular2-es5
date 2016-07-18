import {  PipeTransform, Pipe } from '@angular/core';
import { Coupon } from './coupon';

@Pipe({
    name: 'couponFilter'
})
export class CouponFilterPipe implements PipeTransform {

    transform(value: Coupon[], filter: string): Coupon[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((coupon: Coupon) =>
            coupon.title.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }

}

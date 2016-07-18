import {  PipeTransform, Pipe } from '@angular/core';
import { Company } from './company';


@Pipe({
    name: 'companyFilter'
})
export class CompanyFilterPipe implements PipeTransform {

        transform(value: Company[], filter: string): Company[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((company: Company) =>
            company.compName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}

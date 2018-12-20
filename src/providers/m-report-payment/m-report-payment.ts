import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

/*
  Generated class for the MReportPaymentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MReportPaymentProvider {
  

  constructor(public http: Http) {
    console.log('Hello MReportPaymentProvider Provider');
  }

  get_by_pay_date() {
    return this.http.post('http://10.80.6.160:1068/get_by_pay_date',{date: new Date('2018-12-16')}).pipe(map((res)=>res.json()));
  }
  
  get_by_pay_bac_id_and_date(date_start,date_end,bac_id) {
    return this.http.post('http://10.80.6.160:1068/get_by_pay_bac_id_and_date',{date_start: date_start,date_end: date_end,bac_id: bac_id}).pipe(map((res)=>res.json()));
  }

  delete_payment(pay_id) {
    return this.http.put('http://10.80.6.160:1068/delete_payment',{pay_id: pay_id}).pipe(map((res)=>res.json()));
  }

}

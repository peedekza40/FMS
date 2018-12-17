import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MReportPaymentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MReportPaymentProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MReportPaymentProvider Provider');
  }

  get_by_pay_date() {
    return this.http.post('http://10.80.6.160:1068/get_by_pay_date',{date: new Date('2018-12-16')}).pipe(map((res)=>res.json()));
  }

}

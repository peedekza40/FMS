import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import * as moment from 'moment';

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

  
  get_by_pay_bac_id(){
    var data = {
                  bac_id: 99
                };
    return this.http.post('http://10.80.6.160:1068/get_by_pay_bac_id',data).pipe(map((res)=>res.json()));
  }
  get_by_pay_date() {
    let date = moment().format('YYYY-MM-DD');
    let date = '2018-09-14';
    console.log(date);
    return this.http.post('http://10.80.6.160:1068/get_by_pay_date',{date}).pipe(map((res)=>res.json()));
  }


  

}

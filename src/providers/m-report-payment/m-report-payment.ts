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
  get_by_pay_date(){
    return this.http.post('http://10.80.6.160:1068/get_by_pay_date',{date: new Date('2018-11-14')}).pipe(map((res)=>res.json()));
  }

  get_by_pay_id(pay_id) {
    return this.http.post('http://10.80.6.160:1068/get_by_pay_id',{pay_id:pay_id}).pipe(map((res)=>res.json()));
  }

  update_payment(pay_id, pay_date, pay_receipt, pay_receipt_code, pay_receipt_date, pay_amount, pay_detail, pay_desc_id, pay_bac_id, pay_status, pay_editor){
    return this.http.put('http://10.80.6.160:1068/update_payment',{pay_id:pay_id, pay_date:pay_date, pay_receipt:pay_receipt, pay_receipt_code:pay_receipt_code,
     pay_receipt_date:pay_receipt_date, pay_amount:pay_amount, pay_detail:pay_detail, pay_desc_id:pay_desc_id, pay_bac_id:pay_bac_id, pay_status:pay_status, 
     pay_editor:pay_editor}).pipe(map((res)=>res.json()));
  }

}

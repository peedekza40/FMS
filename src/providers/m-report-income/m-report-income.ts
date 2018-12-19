import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
//import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

/*
  Generated class for the MReportIncomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MReportIncomeProvider {

  constructor(public http: Http) {
  }

  get_by_inc_date() {
    return this.http.post('http://10.80.6.160:1068/get_by_inc_date',{date: new Date('2018-12-16')}).pipe(map((res)=>res.json()));
  }

  get_by_inc_id(inc_id) {
    return this.http.post('http://10.80.6.160:1068/get_by_inc_id',{inc_id:inc_id}).pipe(map((res)=>res.json()));
  }

  update_income(inc_id, inc_date, inc_receipt, inc_receipt_code, inc_receipt_date, inc_amount, inc_detail, inc_desc_id, inc_bac_id, inc_status, inc_editor){
    return this.http.put('http://10.80.6.160:1068/update_income',{inc_id:inc_id, inc_date:inc_date, inc_receipt:inc_receipt, inc_receipt_code:inc_receipt_code,
     inc_receipt_date:inc_receipt_date, inc_amount:inc_amount, inc_detail:inc_detail, inc_desc_id:inc_desc_id, inc_bac_id:inc_bac_id, inc_status:inc_status, 
     inc_editor:inc_editor}).pipe(map((res)=>res.json()));
  }
}

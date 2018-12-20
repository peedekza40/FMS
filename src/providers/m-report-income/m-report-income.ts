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
  date: string;
  constructor(public http: Http) {
    this.date = new Date().toISOString();
  }

  // get_by_inc_date() {
  //   return this.http.post('http://10.80.6.160:1068/get_by_inc_date',{date: new Date('2018-12-16')}).pipe(map((res)=>res.json()));
  // }
  get_by_inc_date(date) {
    return this.http.post('http://10.80.6.160:1068/get_by_inc_date',{date:date}).pipe(map((res)=>res.json()));
  }

  get_by_inc_id(inc_id) {
    return this.http.post('http://10.80.6.160:1068/get_by_inc_id',{inc_id:inc_id}).pipe(map((res)=>res.json()));
  }

  update_income(inc_id, inc_date, inc_receipt, inc_receipt_code, inc_receipt_date, inc_amount, inc_detail, inc_desc_id, inc_bac_id, inc_status, inc_editor){
    return this.http.put('http://10.80.6.160:1068/update_income',{inc_id:inc_id, inc_date:inc_date, inc_receipt:inc_receipt, inc_receipt_code:inc_receipt_code,
     inc_receipt_date:inc_receipt_date, inc_amount:inc_amount, inc_detail:inc_detail, inc_desc_id:inc_desc_id, inc_bac_id:inc_bac_id, inc_status:inc_status, 
     inc_editor:inc_editor}).pipe(map((res)=>res.json()));
  }
  
  get_income_by_rangedate_and_bac(bac_id,startDate,endDate) {
    return this.http.post('http://10.80.6.160:1068/get_income_by_rangedate_and_bac',{bac_id: bac_id,startDate: startDate,endDate: endDate}).pipe(map((res)=>res.json()));
  }

  delete_income(inc_id) {
    return this.http.put('http://10.80.6.160:1068/delete_income',{inc_id: inc_id}).pipe(map((res)=>res.json()));
  }
  insert_income(data){
    return this.http.post('http://10.80.6.160:1068/insert_income',{
        inc_code: data.inc_code, 
        inc_date: data.inc_date, 
        inc_receipt: data.inc_receipt, 
        inc_receipt_code: data.inc_receipt_code,
        inc_receipt_date: data.inc_receipt_date, 
        inc_amount: data.inc_amount, 
        inc_detail: data.inc_detail, 
        inc_desc_id: data.inc_desc_id, 
        inc_bac_id: data.inc_bac_id, 
        inc_status: data.inc_status, 
        inc_editor: data.inc_editor
    }).pipe(map((res)=>res.json()));
  }

  get_last_inc_code(){
    return this.http.get('http://10.80.6.160:1068/get_last_inc_code').pipe(map((res)=>res.json()));
  }
}

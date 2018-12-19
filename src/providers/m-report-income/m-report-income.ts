import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
// import { ReportDataTranferProvider } from '../report-data-tranfer/report-data-tranfer';

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

  get_income_by_rangedate_and_bac(){
    let b_id:number = 99;
    return this.http.post('http://10.80.6.160:1068/get_income_by_rangedate_and_bac',{b_id,s_date: new Date('2018-12-01'),e_date: new Date('2018-12-31')}).pipe(map((res)=>res.json()));
  }

}

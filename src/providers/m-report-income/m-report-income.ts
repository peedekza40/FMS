import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import * as moment from 'moment';

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
    let date = moment().format('YYYY-MM-DD');
    //let date = '2018-12-16';
    console.log(date);
    return this.http.post('http://10.80.6.160:1068/get_by_inc_date',{date}).pipe(map((res)=>res.json()));
  }

}

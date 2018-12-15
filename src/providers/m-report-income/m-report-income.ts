import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

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
    return this.http.post('http://10.80.6.160:1068/get_by_inc_date',{date: new Date()}).pipe(map((res)=>res.json()));
  }

}

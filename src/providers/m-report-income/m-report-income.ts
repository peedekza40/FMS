import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

/*
  Generated class for the MReportIncomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MReportIncomeProvider {

  constructor(public http: HttpClient) {
  }

  get_by_inc_date() {
    return this.http.post('http://10.80.6.160:1068/get_by_inc_date',{date:2018-12-16}).pipe(map((res)=>res.json()));
  }

}

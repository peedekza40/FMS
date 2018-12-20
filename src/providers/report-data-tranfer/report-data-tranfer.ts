import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class ReportDataTranferProvider {
  public bac_id:number = null;
  public start_date:string = moment().format('YYYY-MM-DD').toString() ;
  public end_date:string = moment().format('YYYY-MM-DD').toString();
  constructor(public http: Http) { 
  }

}

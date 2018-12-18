import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class ReportDataTranferProvider {
  public bac_id:number;
  public start_date:string = moment().format('DD-MM-YYYY').toString() ;
  public end_date:string = moment().format('DD-MM-YYYY').toString();
  constructor() {
  }

}

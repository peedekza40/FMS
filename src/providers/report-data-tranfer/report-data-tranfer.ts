import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ReportDataTranferProvider {
  public bac_id:number;
  public start_date:string;
  public end_date:string;
  constructor() {
  }

}

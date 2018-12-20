import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
/*
  Generated class for the RetrieveDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RetrieveDataProvider {
  date: any;
  index: Number;

  constructor(public http: Http) {
    this.date = new Date().toISOString();
    //console.log('Hello RetrieveDataProvider Provider');
  }

  RetrieveData(data){
    this.date = data;
  }
  
  getData(){
    return this.date;
  }

  set_tabIndex(index){
    this.index = index;
  }

}

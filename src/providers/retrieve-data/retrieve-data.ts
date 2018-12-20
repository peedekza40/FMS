import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

/*
  Generated class for the RetrieveDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RetrieveDataProvider {
  data: any;

  constructor(public http: Http) {
    //console.log('Hello RetrieveDataProvider Provider');
  }

  RetrieveData(data){
    this.data = data;
  }
  
  getData(){
    return this.data;
  }

}

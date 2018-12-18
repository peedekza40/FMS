import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


/*
  Generated class for the MDescriptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MDescriptionProvider {

  constructor(public http: Http) {
  }

  get_enable() {
    return this.http.get('http://10.80.6.160:1068/get_enable',{}).pipe(map((res)=>res.json()));
  }

}

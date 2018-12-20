import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
/*
  Generated class for the MBankaccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MBankaccountProvider {

  constructor(public http: Http) {
    console.log('Hello MBankaccountProvider Provider');
  }

  get_all(){
    return this.http.get('http://10.80.6.160:1068/get_bankAccount_by_bacActive').pipe(map((res)=>res.json()));
  }

  get_bankAccount_by_bacActive() {
    return this.http.get('http://10.80.6.160:1068/get_bankAccount_by_bacActive',{}).pipe(map((res)=>res.json()));
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MReportIncomeProvider} from '../../../../providers/m-report-income/m-report-income'
import * as moment from 'moment';
/**
 * Generated class for the AddIncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-income',
  templateUrl: 'add-income.html',
})
export class AddIncomePage{
  data : data_income;
  inc_code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public MReportIncomeProvider: MReportIncomeProvider) {
  }


  ionViewDidLoad() {
    this.MReportIncomeProvider.get_last_inc_code().subscribe((response) => {
      this.inc_code = JSON.stringify(response[0].inc_code);
      console.log(this.inc_code);
    });
    console.log("1");
    let last_code: string;
    console.log("2");
    let month_code: string = last_code.substring(4, 6);
    let year_code: string = last_code.substring(2, 4);
    let sub_code: string = last_code.substring(6, last_code.length);

    let cur_year: string  = moment(new Date()).format('Y');
    let cur_month: string  = moment(new Date()).format('M');

    if(last_code == '' || (last_code == null) || (cur_month != month_code) || ((parseInt(cur_year)+543).toString().substring(2,4) != year_code)){
      //this.data.inc_code = "RE" + (parseInt(cur_year)+543).toString().substring(2,4) + cur_month + this.leftPad('1', 4, "0");
    }else{
      //this.data.inc_code = "RE" + (parseInt(cur_year)+543).toString().substring(2,4) + cur_month + this.leftPad((parseInt(sub_code)+1).toString(), 4, "0");
    }
    //this.data.inc_code = "5555555555555";
    //console.log(this.data.inc_code);
    //console.log("RE" + (parseInt(cur_year)+543).toString().substring(2,4) + cur_month + this.leftPad('1', 4, "0"));
  }

  leftPad(str: string, len: number, ch='.'): string {
    len = len - str.length + 1;
    return len > 0 ? new Array(len).join(ch) + str : str;
  }
}

interface data_income{
  inc_code: string;
  inc_date: string;
  inc_receipt: string;
  inc_receipt_code: string;
  inc_receipt_date: string;
  inc_amount: number;
  inc_detail: string;
  inc_desc_id: number;
  inc_bac_id: number;
  inc_status: string;
  inc_editor: number;
}

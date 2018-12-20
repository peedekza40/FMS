import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {MReportIncomeProvider} from '../../../../providers/m-report-income/m-report-income'
import { MDescriptionProvider } from '../../../../providers/m-description/m-description';
import { MBankaccountProvider } from '../../../../providers/m-bankaccount/m-bankaccount';
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
  data : Data_income;
  desc_obj: desc [];
  bankacc_obj: bankacc [];

  inc_code : string;
  inc_date: string = moment(new Date()).format('YYYY-MM-DD').toString();
  inc_receipt: string;
  inc_receipt_code: string;
  inc_receipt_date: string = moment(new Date()).format('YYYY-MM-DD').toString();;
  inc_amount: number;
  inc_detail: string;
  inc_desc_id: number;
  inc_bac_id: number;
  inc_status: string;
  inc_editor: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController,
    public MReportIncomeProvider: MReportIncomeProvider,
    public MDescriptionProvider: MDescriptionProvider,  
    public MBankaccountProvider:MBankaccountProvider) {
  }


  ionViewDidLoad() {
    this.MReportIncomeProvider.get_last_inc_code().subscribe((response) => {
      this.inc_code = response[0].inc_code;
      let month_code: string = this.inc_code.substring(4, 6);
      let year_code: string = this.inc_code.substring(2, 4);
      let sub_code: string = this.inc_code.substring(6, this.inc_code.length);

      let cur_year: string  = moment(new Date()).format('Y');
      let cur_month: string  = moment(new Date()).format('M');

      if(this.inc_code == '' || (this.inc_code == null) || (cur_month != month_code) || ((parseInt(cur_year)+543).toString().substring(2,4) != year_code)){
        this.inc_code = "RE" + (parseInt(cur_year)+543).toString().substring(2,4) + cur_month + this.leftPad('1', 4, "0");
      }else{
        this.inc_code = "RE" + (parseInt(cur_year)+543).toString().substring(2,4) + cur_month + this.leftPad((parseInt(sub_code)+1).toString(), 4, "0");
      }
    });

    this.MDescriptionProvider.get_enable().subscribe((response) => {
      this.desc_obj = response;
    });

    this.MBankaccountProvider.get_bankAccount_by_bacActive().subscribe((response) => {
      this.bankacc_obj = response;
    });
    console.log(this.inc_date);
  }
  formSubmit(){
    this.data = {
      inc_code: this.inc_code,
      inc_date: this.inc_date,
      inc_receipt: (this.inc_receipt == null)? "":this.inc_receipt,
      inc_receipt_code: (this.inc_receipt_code == null)? "":this.inc_receipt_code,
      inc_receipt_date: this.inc_receipt_date,
      inc_amount: this.inc_amount,
      inc_detail: "",
      inc_desc_id: this.inc_desc_id,
      inc_bac_id: this.inc_bac_id,
      inc_status: "Y",
      inc_editor: 2,
    }
    this.MReportIncomeProvider.insert_income(this.data).subscribe((response) => {
    });
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      title: 'บันทึกรายการสำเร็จ',
      message: 'validate is coming....',
      buttons: ['ตกลง']
    });

    await alert.present();
  }
  
  leftPad(str: string, len: number, ch='.'): string {
    len = len - str.length + 1;
    return len > 0 ? new Array(len).join(ch) + str : str;
  }
}

interface Data_income{
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

interface desc{
  desc_id: number;
  desc_description: string;
}

interface bankacc{
  bacId: number;
  bacNo: string;
  bacName: string;
}

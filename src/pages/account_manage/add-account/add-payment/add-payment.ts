import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {MReportPaymentProvider} from '../../../../providers/m-report-payment/m-report-payment'
import { MDescriptionProvider } from '../../../../providers/m-description/m-description';
import { MBankaccountProvider } from '../../../../providers/m-bankaccount/m-bankaccount';
import * as moment from 'moment';

/**
 * Generated class for the AddPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-payment',
  templateUrl: 'add-payment.html',
})
export class AddPaymentPage {
  data : Data_payment;
  desc_obj: desc [];
  bankacc_obj: bankacc [];

  pay_code : string;
  pay_date: string = moment(new Date()).format('YYYY-MM-DD').toString();
  pay_receipt: string;
  pay_receipt_code: string;
  pay_receipt_date: string = moment(new Date()).format('YYYY-MM-DD').toString();;
  pay_amount: number;
  pay_detail: string;
  pay_desc_id: number;
  pay_bac_id: number;
  pay_status: string;
  pay_editor: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController,
    public MReportPaymentProvider: MReportPaymentProvider,
    public MDescriptionProvider: MDescriptionProvider,  
    public MBankaccountProvider:MBankaccountProvider) {
  }

  ionViewDidLoad() {
    this.MReportPaymentProvider.get_last_pay_code().subscribe((response) => {
      this.pay_code = response[0].pay_code;
      let month_code: string = this.pay_code.substring(4, 6);
      let year_code: string = this.pay_code.substring(2, 4);
      let sub_code: string = this.pay_code.substring(6, this.pay_code.length);

      let cur_year: string  = moment(new Date()).format('Y');
      let cur_month: string  = moment(new Date()).format('M');

      if(this.pay_code == '' || (this.pay_code == null) || (cur_month != month_code) || ((parseInt(cur_year)+543).toString().substring(2,4) != year_code)){
        this.pay_code = "PA" + (parseInt(cur_year)+543).toString().substring(2,4) + cur_month + this.leftPad('1', 4, "0");
      }else{
        this.pay_code = "PA" + (parseInt(cur_year)+543).toString().substring(2,4) + cur_month + this.leftPad((parseInt(sub_code)+1).toString(), 4, "0");
      }
    });

    this.MDescriptionProvider.get_enable().subscribe((response) => {
      this.desc_obj = response;
    });

    this.MBankaccountProvider.get_bankAccount_by_bacActive().subscribe((response) => {
      this.bankacc_obj = response;
    });
    console.log(this.pay_date);
  }

  formSubmit(){
    this.data = {
      pay_code: this.pay_code,
      pay_date: this.pay_date,
      pay_receipt: (this.pay_receipt == null)? "":this.pay_receipt,
      pay_receipt_code: (this.pay_receipt_code == null)? "":this.pay_receipt_code,
      pay_receipt_date: this.pay_receipt_date,
      pay_amount: this.pay_amount,
      pay_detail: "",
      pay_desc_id: this.pay_desc_id,
      pay_bac_id: this.pay_bac_id,
      pay_status: "Y",
      pay_editor: 2,
    }
    this.MReportPaymentProvider.insert_payment(this.data).subscribe((response) => {
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

interface Data_payment{
  pay_code: string;
  pay_date: string;
  pay_receipt: string;
  pay_receipt_code: string;
  pay_receipt_date: string;
  pay_amount: number;
  pay_detail: string;
  pay_desc_id: number;
  pay_bac_id: number;
  pay_status: string;
  pay_editor: number;
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

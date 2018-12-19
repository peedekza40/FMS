import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForOf } from '@angular/common';
import { defaultIterableDiffers } from '@angular/core/src/change_detection/change_detection';
import { AlertController } from 'ionic-angular';
import { MReportIncomeProvider } from '../../providers/m-report-income/m-report-income';
import { MReportPaymentProvider } from '../../providers/m-report-payment/m-report-payment';
import * as moment from 'moment';

/**
 * Generated class for the SummarizeReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summarize-report',
  templateUrl: 'summarize-report.html', 
})
export class SummarizeReportPage implements OnInit{
  income_report: Report_inc[]; 
  payment_report: Report_pay[]; 
  sum_inc : number = 0;
  sum_pay : number = 0;
  result : number = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public MReportIncomeProvider: MReportIncomeProvider , public MReportPaymentProvider: MReportPaymentProvider) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SummarizeReportPage');
  }
  
  ngOnInit(){
    this.MReportIncomeProvider.get_by_inc_date().subscribe((response) => {
      this.income_report = response;
      console.log(response);
      var inc_length = this.income_report.length;
      for(let i=0;i<inc_length;i++){
        this.sum_inc += + (this.income_report[i].inc_amount);
      }
      this.result = this.sum_inc - this.sum_pay;
      console.log(this.sum_inc);
    });
    this.MReportPaymentProvider.get_by_pay_date().subscribe((response) => {
      this.payment_report = response;
      console.log(response);
      var pay_length = this.payment_report.length;
      for(let i=0;i<pay_length;i++){
        this.sum_pay += + (this.payment_report[i].pay_amount);
      }
      this.result = this.sum_inc - this.sum_pay;
      console.log(this.sum_pay);
    });
  }
  convert_date(date:string){
    return moment(date).format('DD/MM/YYYY');
  }//convert_date

  show_alert_del(obj){
    const confirm = this.alertCtrl.create({
      title: 'ลบรายการบัญชี',
      message: 'ต้องการลบรายการบัญชี?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.income_report.forEach((element, index) => {
              if (element == obj) {
                this.income_report.splice(index,1);
              }
            });
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
    interface Report_inc{
      inc_code: string;
      desc_description: string;
      inc_amount: number;
      inc_date: string;
    }
    interface Report_pay{
      pay_code: string;
      desc_description: string;
      pay_amount: number;
      pay_date: string;
    }



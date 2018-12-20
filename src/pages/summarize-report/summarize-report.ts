import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForOf } from '@angular/common';
import { defaultIterableDiffers } from '@angular/core/src/change_detection/change_detection';
import { AlertController } from 'ionic-angular';
import { MReportIncomeProvider } from '../../providers/m-report-income/m-report-income';
import { MReportPaymentProvider } from '../../providers/m-report-payment/m-report-payment';
import * as moment from 'moment';
import { ReportDataTranferProvider } from '../../providers/report-data-tranfer/report-data-tranfer';

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
  bac_id : number ;
  start_date : string;
  end_date : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public MReportIncomeProvider: MReportIncomeProvider , public MReportPaymentProvider: MReportPaymentProvider ,  private reportdatatranfer: ReportDataTranferProvider) {
  }

  ionViewDidLeave(){
    // this.bac_id = this.reportdatatranfer.bac_id;
    // this.start_date = this.reportdatatranfer.start_date;
    // this.end_date = this.reportdatatranfer.end_date;
    // this.MReportIncomeProvider.get_income_by_rangedate_and_bac(this.bac_id,this.start_date,this.end_date);
    // this.MReportPaymentProvider.get_by_pay_bac_id_and_date(this.start_date,this.end_date,this.bac_id);
  }
  
  ionViewDidEnter(){
    // this.bac_id = this.reportdatatranfer.bac_id;
    // this.start_date = this.reportdatatranfer.start_date;
    // this.end_date = this.reportdatatranfer.end_date;
    // this.MReportIncomeProvider.get_income_by_rangedate_and_bac(this.bac_id,this.start_date,this.end_date);
    // this.MReportPaymentProvider.get_by_pay_bac_id_and_date(this.start_date,this.end_date,this.bac_id);
  }

  ionViewWillEnter(){
    // console.log('summerize loaded');
    // this.bac_id = this.reportdatatranfer.bac_id;
    // this.start_date = this.reportdatatranfer.start_date;
    // this.end_date = this.reportdatatranfer.end_date;
    // console.log(this.bac_id);
    // console.log(this.start_date);
    // console.log(this.end_date);
  }
  
  ionViewDidLoad() { 
    // this.bac_id = this.reportdatatranfer.bac_id;
    // this.start_date = this.reportdatatranfer.start_date;
    // this.end_date = this.reportdatatranfer.end_date;
    // this.MReportIncomeProvider.get_income_by_rangedate_and_bac(this.bac_id,this.start_date,this.end_date);
    // this.MReportPaymentProvider.get_by_pay_bac_id_and_date(this.start_date,this.end_date,this.bac_id);
    console.log('ionViewDidLoad SummarizeReportPage');
  }
  
  ngOnInit(){
    this.bac_id = this.reportdatatranfer.bac_id;
    this.start_date = this.reportdatatranfer.start_date;
    this.end_date = this.reportdatatranfer.end_date;
    let b_id;
    if(this.bac_id == null){
      b_id = "";
    }else{
      b_id = String(this.bac_id);
    }
    this.MReportIncomeProvider.get_income_by_rangedate_and_bac(b_id,this.start_date,this.end_date).subscribe((response) => {
      this.income_report = response;
      console.log(response);
      var inc_length = this.income_report.length;
      for(let i=0;i<inc_length;i++){
        this.sum_inc += + (this.income_report[i].inc_amount);
      }
      console.log(this.sum_inc);
      this.result = this.sum_inc - this.sum_pay;
    });
    this.MReportPaymentProvider.get_by_pay_bac_id_and_date(this.start_date,this.end_date,b_id).subscribe((response) => {
      this.payment_report = response;
      console.log(response);
      var pay_length = this.payment_report.length;
      for(let i=0;i<pay_length;i++){
        this.sum_pay += + (this.payment_report[i].pay_amount);
      }
      console.log(this.sum_pay);
      this.result = this.sum_inc - this.sum_pay;
    });
  }
  
  convert_date(date:string){
    return moment(date).format('DD/MM/YYYY');
  }//convert_date

  show_alert_del_inc(obj,id){
    const confirm = this.alertCtrl.create({
      title: 'ลบรายการบัญชี',
      message: 'ต้องการลบรายการบัญชี?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }//handler
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.income_report.forEach((element, index) => {
              if (element == obj) {
                this.income_report.splice(index,1);
              }//if
            });
            console.log(id);
            console.log('Agree clicked');
          }//handler
        }
      ]
    });
    confirm.present();
  }//show_alert_del

  show_alert_del_pay(obj,id){
    const confirm = this.alertCtrl.create({
      title: 'ลบรายการบัญชี',
      message: 'ต้องการลบรายการบัญชี?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }//handler
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.payment_report.forEach((element, index) => {
              if (element == obj) {
                this.payment_report.splice(index,1);
              }//if
            });
            console.log(id);
            console.log('Agree clicked');
          }//handler
        }
      ]
    });
    confirm.present();
  }//show_alert_del

}
    interface Report_inc{
      inc_id: number;
      inc_code: string;
      desc_description: string;
      inc_amount: number;
      inc_date: string;
    }
    interface Report_pay{
      pay_id: number
      pay_code: string;
      desc_description: string;
      pay_amount: number;
      pay_date: string;

    }

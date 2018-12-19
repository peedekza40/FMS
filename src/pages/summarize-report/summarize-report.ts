import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportDataTranferProvider } from '../../providers/report-data-tranfer/report-data-tranfer';
import { NgForOf } from '@angular/common';
import { defaultIterableDiffers } from '@angular/core/src/change_detection/change_detection';
import { AlertController } from 'ionic-angular';
import { MReportIncomeProvider } from '../../providers/m-report-income/m-report-income';
import { MReportPaymentProvider } from '../../providers/m-report-payment/m-report-payment';

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
  // private bac_id:number;
  // private start_date:string;
  // private end_date:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public MReportIncomeProvider: MReportIncomeProvider , public MReportPaymentProvider: MReportPaymentProvider, private reportdatatranfer: ReportDataTranferProvider) {
    // this.bac_id = this.reportdatatranfer.bac_id;
    // this.start_date = this.reportdatatranfer.start_date;
    // this.end_date = this.reportdatatranfer.end_date;
  }
  
  // ionViewDidLeave(){
  //   this.ngOnInit();
  // }

  // ionViewDidEnter(){
  //   this.ngOnInit();
  // }

  // ionViewDidLoad() {
  //   this.ngOnInit();
  // }
  
  ngOnInit(){
    // let b_id = this.bac_id;
    // let s_date = this.start_date;
    // let e_date = this.end_date;
    // console.log(s_date);
    // console.log(e_date);
    // this.MReportIncomeProvider.get_by_inc_date().subscribe((response) => {
    //   this.income_report = response;
    //   console.log(response);
    // });
    // this.MReportPaymentProvider.get_by_pay_date().subscribe((response) => {
    //   this.payment_report = response;
    //   console.log(response);
    // });

    this.MReportIncomeProvider.get_income_by_rangedate_and_bac().subscribe((response) => {
      this.income_report = response;
      console.log(response);
    });
    this.MReportPaymentProvider.get_by_pay_bac_id_and_date().subscribe((response) => {
      this.payment_report = response;
      console.log(response);
    });
  }

  get_sum_income(){
    var sum_total = 0;
    var y =0;
    for (let i=0; i<this.income_report.length; i++) {
        y = +(this.income_report[i].inc_amount);
        sum_total += y;
    }
      return sum_total.toFixed(2);
  }

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



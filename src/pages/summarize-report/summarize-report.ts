import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForOf } from '@angular/common';
import { defaultIterableDiffers } from '@angular/core/src/change_detection/change_detection';
import { AlertController } from 'ionic-angular';
import { MReportIncomeProvider } from '../../providers/m-report-income/m-report-income';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public MReportIncomeProvider: MReportIncomeProvider) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SummarizeReportPage');
  }
  
  ngOnInit(){
    this.MReportIncomeProvider.get_by_inc_date().subscribe((response) => {
      this.income_report = response;
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



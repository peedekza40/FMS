import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MReportIncomeProvider } from '../../../providers/m-report-income/m-report-income';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the IncomeManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income-manage',
  templateUrl: 'income-manage.html',
})
export class IncomeManagePage implements OnInit {
  income_report: Report_inc[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController , public MReportIncomeProvider: MReportIncomeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeManagePage');
  }
  ngOnInit() {
    this.MReportIncomeProvider.get_by_inc_date().subscribe((response) => {
      this.income_report = response;
      console.log(response);
    });
  } 
  // removeObjs_income(objs_i) {
  //   this.income_report.forEach((element, index) => {
  //     if (element == objs_i) {
  //       this.income_report.splice(index, 1);
  //     }
  //   });
  // }

  // Edit show_alert_del
  show_alert_del(objs_i){
    const confirm = this.alertCtrl.create({
      title: 'ลบรายการบัญชี',
      message: 'ต้องการลบรายการบัญชีหรือไม่',
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
                   if (element == objs_i) {
                     this.income_report.splice(index, 1);
                  }
            });
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  // Edit show_alert_edit
  show_alert_edit(objs_i){
    const confirm = this.alertCtrl.create({
      title: 'แก้ไขรายการบัญชี',
      message: 'ต้องการแก้ไขบัญชีหรือไม่',
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
                   if (element == objs_i) {
                     this.income_report.splice(index, 1);
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
}

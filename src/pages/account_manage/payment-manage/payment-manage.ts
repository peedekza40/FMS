import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MReportPaymentProvider } from '../../../providers/m-report-payment/m-report-payment';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PaymentManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-manage',
  templateUrl: 'payment-manage.html',
})
export class PaymentManagePage implements OnInit{
  report:Report_pay[]

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController , public MReportPaymentProvider:MReportPaymentProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentManagePage');
  }

  ngOnInit() {
    this.MReportPaymentProvider.get_by_pay_date().subscribe((response) => {
      this.report = response;
      console.log(response);
    });
  }
  // removeObjs_payment(pay_code) {
  //   this.report.forEach((element, index) => {
  //     if (element == pay_code) {
  //       this.report.splice(index, 1);
  //     }
  //   });
  // }//end PaymentManagePage

  //show_alert_del
  show_alert_del(objs_p){
    const confirm = this.alertCtrl.create({
      title: 'ลบรายการบัญชี',
      message: 'ยืนยันการลบบัญชีหรือไม่',
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
            this.report.forEach((element, index) => {
                   if (element == objs_p) {
                     this.report.splice(index, 1);
                  }
            });
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  //show_alert_edit
  show_alert_edit(objs_p){
    const confirm = this.alertCtrl.create({
      title: 'แก้ไขรายการบัญชี',
      message: 'ยืนยันการแก้ไขบัญชีหรือไม่',
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
            this.report.forEach((element, index) => {
                   if (element == objs_p) {
                     this.report.splice(index, 1);
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

interface Report_pay{
  pay_code : string;
  desc_description: string;
  pay_amount: number;
}


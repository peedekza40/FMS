import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MReportPaymentProvider } from '../../providers/m-report-payment/m-report-payment';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the PaymentReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-report',
  templateUrl: 'payment-report.html',
})
export class PaymentReportPage {
  public report_payment:Report_payment[];
  sum:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public MReportPaymentProvider: MReportPaymentProvider,public  alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentReportPage');
  }
  ngOnInit() {
    this.MReportPaymentProvider.get_by_pay_date().subscribe((response) => {
      this.report_payment = response;
      let i:number = 0;
      let y = this.report_payment.length;  //can't use .length in for loop
      for(let i = 0;i<y;i++){
        this.sum += +(this.report_payment[i]['pay_amount']);
      }//for
    });
  }//ngOnInit

  convert_date(date:string){
    return moment(date).format('DD/MM/YYYY');
  }//convert_date

  get_sum(){
    // var sum_total = 0;
    // this.report_payment.forEach( (element)=> {
    //   sum_total += element.pay_amount;
    // });
    //   console.log(sum_total);
    //   return sum_total;
  }//get_sum

  show_alert_del(obj){
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
            this.report_payment.forEach((element, index) => {
              if (element == obj) {
                this.report_payment.splice(index,1);
              }//if
            });
            console.log('Agree clicked');
          }//handler
        }
      ]
    });
    confirm.present();
  }//show_alert_del
}//export class
interface Report_payment{
  bacName: string;
  pay_date: Date;
  pay_code : string;
  desc_description: string;
  pay_amount: number;
}//interface

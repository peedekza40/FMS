import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportDataTranferProvider } from '../../providers/report-data-tranfer/report-data-tranfer';

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

  private bac_id:number;
  private start_date:string;
  private end_date:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private reportdatatranfer: ReportDataTranferProvider) {
  }

  ionViewDidLeave(){
    this.bac_id = this.reportdatatranfer.bac_id;
    this.start_date = this.reportdatatranfer.start_date;
    this.end_date = this.reportdatatranfer.end_date;
  }

  ionViewDidEnter(){
    this.bac_id = this.reportdatatranfer.bac_id;
    this.start_date = this.reportdatatranfer.start_date;
    this.end_date = this.reportdatatranfer.end_date;
  }

  ionViewDidLoad() {
    this.bac_id = this.reportdatatranfer.bac_id;
    this.start_date = this.reportdatatranfer.start_date;
    this.end_date = this.reportdatatranfer.end_date;

    console.log('ionViewDidLoad PaymentReportPage');
    console.log(this.bac_id);
    console.log(this.start_date);
    console.log(this.end_date);
  }

}

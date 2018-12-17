import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MReportPaymentProvider } from '../../../providers/m-report-payment/m-report-payment';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public MReportPaymentProvider:MReportPaymentProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentManagePage');
  }

  ngOnInit() {
    this.MReportPaymentProvider.get_by_pay_bac_id().subscribe((response) => {
      this.report = response;
      console.log(this.report[1].pay_date);
    });
  }

}

interface Report_pay{
  bacName: string;
  pay_date: Date;
  pay_code : string;
  desc_description: string;
  pay_amount: number;
}


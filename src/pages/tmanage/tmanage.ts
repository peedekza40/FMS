import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IncomeReportPage } from '../income-report/income-report';
import { PaymentReportPage } from '../payment-report/payment-report';
/**
 * Generated class for the TmanagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tmanage',
  templateUrl: 'tmanage.html',
})
export class TmanagePage {
  tab2Root = IncomeReportPage;
  tab3Root = PaymentReportPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmanagePage');
  }

}

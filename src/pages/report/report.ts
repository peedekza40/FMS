import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SummarizeReportPage } from '../summarize-report/summarize-report';
import { IncomeReportPage } from '../income-report/income-report';
import { PaymentReportPage } from '../payment-report/payment-report';


/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
 
  tab1Root = SummarizeReportPage;
  tab2Root = IncomeReportPage;
  tab3Root = PaymentReportPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

}

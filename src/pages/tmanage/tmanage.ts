import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IncomeManagePage } from '../income-manage/income-manage';
import { PaymentReportPage } from '../payment-report/payment-report';
import { MReportIncomeProvider } from '../../providers/m-report-income/m-report-income';
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
export class TmanagePage implements OnInit {
  income_report: Report_inc[];

  tab2Root = IncomeManagePage;
  tab3Root = PaymentReportPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public MReportIncomeProvider: MReportIncomeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmanagePage');
  }
  ngOnInit() {
    // this.MReportIncomeProvider.get_by_inc_date().subscribe((response) => {
    //   console.log(response);
    //   this.income_report = response;
    // });
  } 

  // removeObjs(objs) {
  //   objs.forEach((element, index) => {
  //     if (element == objs) {
  //       objs.splice(index, 1);
  //     }
  //   });
  // }
}
interface Report_inc{
  inc_code: string;
  desc_description: string;
  inc_amount: number;
}
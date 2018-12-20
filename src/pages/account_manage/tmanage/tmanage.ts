import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IncomeManagePage } from '../income-manage/income-manage';
import { MReportIncomeProvider } from '../../../providers/m-report-income/m-report-income';
import { PaymentManagePage } from '../payment-manage/payment-manage';
import { RetrieveDataProvider } from '../../../providers/retrieve-data/retrieve-data';
import * as moment from 'moment';
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
  myDate : string;
  tab2Root = IncomeManagePage;
  tab3Root = PaymentManagePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public MReportIncomeProvider: MReportIncomeProvider,
    public RetrieveDataProvider: RetrieveDataProvider) {
    this.myDate = moment(new Date()).format('MMM Do YY');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TmanagePage');
  }
  ngOnInit() {
  } 

  testdate(){
    this.RetrieveDataProvider.RetrieveData(this.myDate);
    this.navCtrl.push(TmanagePage,{},{animate:false});
  }

}
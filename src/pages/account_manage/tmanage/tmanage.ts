import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IncomeManagePage } from '../income-manage/income-manage';
<<<<<<< HEAD
=======
import { MReportIncomeProvider } from '../../../providers/m-report-income/m-report-income';
>>>>>>> origin/shit
import { PaymentManagePage } from '../payment-manage/payment-manage';
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
<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myDate = moment(new Date()).format();
=======
  constructor(public navCtrl: NavController, public navParams: NavParams, public MReportIncomeProvider: MReportIncomeProvider) {
    this.myDate = moment(new Date()).format('MMM Do YY');
>>>>>>> origin/shit
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TmanagePage');
  }
  ngOnInit() {
  } 
  testdate(){
    console.log(this.myDate);
  }
<<<<<<< HEAD

=======
>>>>>>> origin/shit

}
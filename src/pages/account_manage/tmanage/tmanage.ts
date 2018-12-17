import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IncomeManagePage } from '../income-manage/income-manage';
import { MReportIncomeProvider } from '../../../providers/m-report-income/m-report-income';
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

  tab2Root = IncomeManagePage;
  tab3Root = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public MReportIncomeProvider: MReportIncomeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmanagePage');
  }
  ngOnInit() {
  } 

}
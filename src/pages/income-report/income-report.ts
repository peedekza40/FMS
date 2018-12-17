import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportDataTranferProvider } from '../../providers/report-data-tranfer/report-data-tranfer';

/**
 * Generated class for the IncomeReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income-report',
  templateUrl: 'income-report.html',
})
export class IncomeReportPage {

  private bac_id:number;
  private start_date:string;
  private end_date:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private reportDataSearch:ReportDataTranferProvider) {
    
  }

  ionViewDidLoad() {
    this.reportDataSearch.bac_id = this.bac_id;
    this.reportDataSearch.start_date = this.start_date;
    this.reportDataSearch.end_date = this.end_date;
    console.log(this.bac_id);
    console.log(this.start_date);
    console.log(this.end_date);
    console.log('ionViewDidLoad IncomeReportPage');
  }

}

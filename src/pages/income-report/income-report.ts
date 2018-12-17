import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MReportIncomeProvider } from '../../providers/m-report-income/m-report-income';

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
export class IncomeReportPage implements OnInit{
  report_income:Report_income[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public MReportIncomeProvider: MReportIncomeProvider) {
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeReportPage');
  }

  ngOnInit() {
    this.MReportIncomeProvider.get_by_inc_date().subscribe((response) => {
      this.report_income = response;
      console.log(this.report_income[1].inc_amount);
    });
  }


  /*get_sum(){
    var sum_total = 0;
    var y =0;
    for (let i=0; i<this.report_income.length; i++) {
      y = +(this.report_income[i].inc_amount);
      sum_total += y;
    }
      console.log(this.report_income[0].inc_amount);
      return sum_total;
      
  }*/
  

}
interface Report_income{
  bacName: string;
  inc_date: Date;
  inc_code : string;
  desc_description: string;
  inc_amount: number;
}

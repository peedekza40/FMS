import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MReportIncomeProvider } from '../../providers/m-report-income/m-report-income';
import * as moment from 'moment';

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
      let i:number = 0;
      this.report_income.forEach((element) => {
        console.log(element.inc_amount);
        i += element.inc_amount;
      });
      console.log('Sum total : '+i);
      //console.log(this.report_income.keys(response).length); 
    });
  }

  convert_date(date:string){
    return moment(date).format('DD/MM/YYYY');
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
  /*get_sum(){
    var sum_total = 0;
    var y =0;
    for (let i=0; i<this.report_income.length; i++) {
        y = +(this.report_income[i].inc_amount);
        sum_total += y;
    }
    return sum_total.toFixed(2);  
  }*/

}
interface Report_income{
  bacName: string;
  inc_date: Date;
  inc_code : string;
  desc_description: string;
  inc_amount: number;
}

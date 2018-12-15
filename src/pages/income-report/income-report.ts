import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  details : Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.details = [
                    {
                      "code" : "RE61100021",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "250"
                    },
                    {
                      "code" : "RE61100022",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "120"
                    },
                    {
                      "code" : "RE61100023",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "400"
                    },
                    {
                      "code" : "RE61100024",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "190"
                    },
                    {
                      "code" : "RE61100025",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "30"
                    },
                    {
                      "code" : "RE61100026",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "200"
                    }
                  ]

                } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeReportPage');
  }

  get_sum(){
    var sum_total = 0;
    var y =0;
    for (let i=0; i<this.details.length; i++) {
      y = +(this.details[i].amount);
      sum_total += y;
    }
      console.log(this.details[0].amount);
      return sum_total;
      
  }
  

}

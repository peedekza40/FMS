import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForOf } from '@angular/common';
import { defaultIterableDiffers } from '@angular/core/src/change_detection/change_detection';

/**
 * Generated class for the SummarizeReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summarize-report',
  templateUrl: 'summarize-report.html', 
})
export class SummarizeReportPage {

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
                      "code" : "PA61100022",
                      "date" : "01-10-2561",
                      "type" : "payment",
                      "amount" : "500"
                    },
                    {
                      "code" : "RE61100023",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "400"
                    },
                    {
                      "code" : "PA61100020",
                      "date" : "01-10-2561",
                      "type" : "payment",
                      "amount" : "140"
                    },
                    {
                      "code" : "RE61100024",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "190"
                    },
                    {
                      "code" : "PA61100021",
                      "date" : "01-10-2561",
                      "type" : "payment",
                      "amount" : "210"
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
    console.log('ionViewDidLoad SummarizeReportPage');
  }

  get_sum(){
    var sum_total = 0;
    
      return sum_total;
      
  }

}

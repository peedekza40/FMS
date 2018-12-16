import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForOf } from '@angular/common';
import { defaultIterableDiffers } from '@angular/core/src/change_detection/change_detection';
import { AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.details = [
                    {
                      "code" : "RE61100021",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "250.00"
                    },
                    {
                      "code" : "RE61100022",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "120.00"
                    },
                    {
                      "code" : "PA61100022",
                      "date" : "01-10-2561",
                      "type" : "payment",
                      "amount" : "500.00"
                    },
                    {
                      "code" : "RE61100023",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "400.00"
                    },
                    {
                      "code" : "PA61100020",
                      "date" : "01-10-2561",
                      "type" : "payment",
                      "amount" : "140.00"
                    },
                    {
                      "code" : "RE61100024",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "190.00"
                    },
                    {
                      "code" : "PA61100021",
                      "date" : "01-10-2561",
                      "type" : "payment",
                      "amount" : "210.00"
                    },
                    {
                      "code" : "RE61100025",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "30.00"
                    },
                    {
                      "code" : "RE61100026",
                      "date" : "01-10-2561",
                      "type" : "income",
                      "amount" : "200.00"
                    }
                  ]

                } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummarizeReportPage');
  }

  get_sum(){
    var sum_total = 0;
    var y =0;
    for (let i=0; i<this.details.length; i++) {
      if(this.details[i].type == 'income'){
        y = +(this.details[i].amount);
        sum_total += y;
      }else if(this.details[i].type == 'payment'){
        y = +(this.details[i].amount);
        sum_total -= y;
      }
    }
      return sum_total.toFixed(2);
  }

  show_alert_del(detail){
    const confirm = this.alertCtrl.create({
      title: 'ลบรายการบัญชี',
      message: 'ต้องการลบรายการบัญชี?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.details.forEach((element, index) => {
              if (element == detail) {
              this.details.splice(index,1);
              }
            });
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  show_info(){

  }
}

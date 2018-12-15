import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IncomeReportPage } from '../income-report/income-report';
import { PaymentReportPage } from '../payment-report/payment-report';
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
export class TmanagePage {
  tab2Root = IncomeReportPage;
  tab3Root = PaymentReportPage;

  obj: Array<Object>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmanagePage');
  }
  ngOnInit() {
    this.obj = [{codes:"RE1234",type:"ค่าน้ำ",total:123},{codes:"RE1235",type:"ค่าไฟ",total:123}];
  }
  removeObjs(objs) {
    this.obj.forEach((element, index) => {
      if (element == objs) {
        this.obj.splice(index, 1);
      }
    });
  }
}

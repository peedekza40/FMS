import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddIncomePage } from '../../../pages/account_manage/add-account/add-income/add-income';
import { AddPaymentPage } from '../../../pages/account_manage/add-account/add-payment/add-payment';

/**
 * Generated class for the AddAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-account',
  templateUrl: 'add-account.html',
})
export class AddAccountPage {
  
  tab_income = AddIncomePage;
  tab_payment = AddPaymentPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  logForm() {
  }
}

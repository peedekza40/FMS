import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReportPage } from '../report/report';

/**
 * Generated class for the ModalssearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalssearch',
  templateUrl: 'modalssearch.html',
})
export class ModalssearchPage {
  private bac_id:number;
  private start_date:string;
  private end_date:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalssearchPage');
  }

  inputPost(b_id,s_d,e_d){
    this.bac_id = b_id;
    this.start_date = s_d;
    this.end_date = e_d;

    // console.log('BankAccount : ' + this.bac_id);
    // console.log('Start_date : ' + this.start_date);
    // console.log('End_date : ' + this.end_date);

    this.navCtrl.push(ReportPage, {
      sd_bac_id: this.bac_id,
      sd_s_date: this.start_date,
      sd_e_date: this.end_date
    });
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

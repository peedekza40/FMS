import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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
  private start_date:string ;
  private end_date:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalssearchPage');
  }

  inputPost(b_id,s_d,e_d){
    if(b_id != null){
      this.bac_id = 0;
    }else{
      this.bac_id = b_id;
    }

    if(s_d != null){
      this.start_date = '';
    }else{
      this.start_date = s_d;
    }

    if(e_d != null){
      this.end_date = '';
    }else{
      this.end_date = e_d;
    }
   

    // console.log('BankAccount : ' + this.bac_id);
    // console.log('Start_date : ' + this.start_date);
    // console.log('End_date : ' + this.end_date);

    // this.navCtrl.push(ReportPage, {
    //   sd_bac_id: this.bac_id,
    //   sd_s_date: this.start_date,
    //   sd_e_date: this.end_date
    // });
    let search_data = {
      sd_bac_id: this.bac_id,
      sd_s_date: this.start_date,
      sd_e_date: this.end_date
    };
    this.viewCtrl.dismiss(search_data);
  }

  modaldismiss() {
    this.viewCtrl.dismiss();
  }

}

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { MBankaccountProvider } from '../../providers/m-bankaccount/m-bankaccount';

@IonicPage()
@Component({
  selector: 'page-modalssearch',
  templateUrl: 'modalssearch.html',
})
export class ModalssearchPage implements OnInit {
  private bac_id:number;
  private start_date:string ;
  private end_date:string;
  private Bank_acc_data:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private BacData: MBankaccountProvider) {
  }

  ngOnInit() {
    // this.BacData.get_all().subscribe((response) => {
    //   this.Bank_acc_data = response;
    // });
  }

  ionViewDidLoad() {
    this.BacData.get_all().subscribe((response) => {
      this.Bank_acc_data = response;
      console.log(this.Bank_acc_data);
    });
    console.log('ionViewDidLoad ModalssearchPage');
    
  }

  /* post function */
  inputPost(b_id,s_d,e_d){

    /* post value Null check */
    if(b_id == ''){
      this.bac_id = 99;
    }else{
      this.bac_id = b_id;
    }

    if(s_d == ''){
      this.start_date = 'today';
    }else{
      this.start_date = s_d;
    }

    if(e_d == ''){
      this.end_date = 'today';
    }else{
      this.end_date = e_d;
    }

    /* push data to report page */
    this.navCtrl.push(ReportPage, {
      sd_bac_id: this.bac_id,
      sd_s_date: this.start_date,
      sd_e_date: this.end_date
    });

    /* close modal */
    this.viewCtrl.dismiss();
  }

  /* close modal */
  modaldismiss() {
    this.viewCtrl.dismiss();
  }

}

interface Bac_data{
  bacId:number;
  bacName:string;
}
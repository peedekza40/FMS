import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { MBankaccountProvider } from '../../providers/m-bankaccount/m-bankaccount';
import { ReportDataTranferProvider } from '../../providers/report-data-tranfer/report-data-tranfer';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-modalssearch',
  templateUrl: 'modalssearch.html',
})
export class ModalssearchPage implements OnInit {
  private bac_id:number;
  private start_date:string;
  private end_date:string;
  private Bank_acc_data:Bac_data[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private BacData: MBankaccountProvider, private reportDataSearch: ReportDataTranferProvider) {
  }

  ngOnInit() {
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
    if(b_id != ''){
      this.bac_id = b_id;
    }

    if(s_d == ''){
      this.start_date = moment().format('YYYY-MM-DD').toString();
    }else{
      this.start_date = moment(s_d).format('YYYY-MM-DD').toString();
    }

    if(e_d == ''){
      this.end_date = moment().format('YYYY-MM-DD').toString();
    }else{
      this.end_date = moment(e_d).format('YYYY-MM-DD').toString();
    }

    /* push data to report page */
    this.reportDataSearch.bac_id = this.bac_id;
    this.reportDataSearch.start_date = this.start_date;
    this.reportDataSearch.end_date = this.end_date;

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
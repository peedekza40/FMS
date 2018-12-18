import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { MBankaccountProvider } from '../../providers/m-bankaccount/m-bankaccount';
import { ReportDataTranferProvider } from '../../providers/report-data-tranfer/report-data-tranfer';

@IonicPage()
@Component({
  selector: 'page-modalssearch',
  templateUrl: 'modalssearch.html',
})
export class ModalssearchPage implements OnInit {
  private bac_id:number;
  private start_date:string ;
  private end_date:string;
  private Bank_acc_data:Bac_data[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private BacData: MBankaccountProvider, private reportDataSearch: ReportDataTranferProvider) {
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
      this.bac_id = 0;
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
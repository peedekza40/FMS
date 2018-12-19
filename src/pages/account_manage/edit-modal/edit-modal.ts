import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MDescriptionProvider } from '../../../providers/m-description/m-description';
import { MBankaccountProvider } from '../../../providers/m-bankaccount/m-bankaccount';
import { MReportIncomeProvider } from '../../../providers/m-report-income/m-report-income';

/**
 * Generated class for the EditModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-modal',
  templateUrl: 'edit-modal.html',
})
export class EditModalPage {
  desc_obj:desc [];
  inc_obj:report_inc;
  bankacc_obj:bankacc [];
  inc_id = 0;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public view: ViewController, 
    public MDescriptionProvider: MDescriptionProvider, 
    public MReportIncomeProvider:MReportIncomeProvider, 
    public MBankaccountProvider:MBankaccountProvider) {
  }

  ionViewDidLoad() {
    // var inc_id = this.inc_id = this.navParams.get('inc_id');
    // console.log(inc_id);
    //this.inc_amount_val = this.navParams.get('obj.inc_amount');
  }

  ngOnInit() {
    var inc_id = this.inc_id = this.navParams.get('inc_id');

    this.MDescriptionProvider.get_enable().subscribe((response) => {
      this.desc_obj = response;
      //console.log(response);
    });

    this.MBankaccountProvider.get_bankAccount_by_bacActive().subscribe((response) => {
      this.bankacc_obj = response;
      //console.log(this.bankacc_obj);
    });
    
    this.MReportIncomeProvider.get_by_inc_id(inc_id).subscribe((response) => {
      this.inc_obj = response;
      console.log(response);
    });
  
  }

  btnSubmit(){
    //var amount_val = this.inc_obj[0].inc_amount;
    var para_obj = this.inc_obj;
    this.view.dismiss(para_obj);
    //console.log(para_obj);
  }

}

interface desc{
  desc_id: number;
  desc_description: string;
}

interface bankacc{
  bacId: number;
  bacNo: string;
  bacName: string;
}

interface report_inc{
  inc_id:number;
  inc_date:Date;
  inc_code: string;
  inc_receipt: string;
  inc_receipt_code: string;
  inc_receipt_date: Date;
  inc_desc_id: number;
  inc_bac_id: number;
  inc_amount: number;
  inc_detail: string;
  inc_status: string;
  inc_editor: number;
}
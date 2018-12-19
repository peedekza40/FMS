import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MDescriptionProvider } from '../../../providers/m-description/m-description';
import { MBankaccountProvider } from '../../../providers/m-bankaccount/m-bankaccount';
import { MReportPaymentProvider } from '../../../providers/m-report-payment/m-report-payment';

/**
 * Generated class for the EditPaymentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-payment-modal',
  templateUrl: 'edit-payment-modal.html',
})
export class EditPaymentModalPage {
  desc_obj:desc [];
  pay_obj:report_pay;
  bankacc_obj:bankacc [];
  pay_id = 0;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public view: ViewController, 
    public MDescriptionProvider: MDescriptionProvider, 
    public MReportPaymentProvider:MReportPaymentProvider, 
    public MBankaccountProvider:MBankaccountProvider) {
  }

  ionViewDidLoad() {
    // var inc_id = this.inc_id = this.navParams.get('inc_id');
    // console.log(inc_id);
    //this.inc_amount_val = this.navParams.get('obj.inc_amount');
  }

  ngOnInit() {
    var pay_id = this.pay_id = this.navParams.get('pay_id');

    this.MDescriptionProvider.get_enable().subscribe((response) => {
      this.desc_obj = response;
      //console.log(response);
    });

    this.MBankaccountProvider.get_bankAccount_by_bacActive().subscribe((response) => {
      this.bankacc_obj = response;
      //console.log(this.bankacc_obj);
    });
    
    this.MReportPaymentProvider.get_by_pay_id(pay_id).subscribe((response) => {
      this.pay_obj = response;
      console.log(this.pay_obj);
    });
  
  }

  btnSubmit(){
    //var amount_val = this.inc_obj[0].inc_amount;
    var para_obj = this.pay_obj;
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

interface report_pay{
  pay_id:number;
  pay_date:Date;
  pay_code: string;
  pay_receipt: string;
  pay_receipt_code: string;
  pay_receipt_date: Date;
  pay_desc_id: number;
  pay_bac_id: number;
  pay_amount: number;
  pay_detail: string;
  pay_status: string;
  pay_editor: number;
}
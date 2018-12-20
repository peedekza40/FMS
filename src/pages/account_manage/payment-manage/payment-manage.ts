import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MReportPaymentProvider } from '../../../providers/m-report-payment/m-report-payment';
import { RetrieveDataProvider } from '../../../providers/retrieve-data/retrieve-data';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the PaymentManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-manage',
  templateUrl: 'payment-manage.html',
})
export class PaymentManagePage implements OnInit{
  report:Report_pay[]
  date: any;
  //date_para: Date;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController , 
    public MReportPaymentProvider:MReportPaymentProvider,
    public RetrieveDataProvider: RetrieveDataProvider,
    public editPaymentModal: ModalController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PaymentManagePage');
  }
  
  ngOnInit() {
    this.date = this.RetrieveDataProvider.date;
    console.log(this.date);
    this.MReportPaymentProvider.get_by_pay_date(this.date).subscribe((response) => {
      this.report = response;
      //console.log(response);
    });
  }

  openPayEditModal(id){
    console.log(id);
    const myPayEditModal = this.editPaymentModal.create('EditPaymentModalPage', {pay_id:id});
    myPayEditModal.present();

    myPayEditModal.onWillDismiss((data) => {
      //console.log(data);
      if(data){
        var pay_id = data[0].pay_id;
        var pay_date = moment(data[0].pay_date).format("YYYY-MM-DD");
        var pay_receipt = data[0].pay_receipt;
        var pay_receipt_code = data[0].pay_receipt_code;
        var pay_receipt_date = moment(data[0].pay_receipt_date).format("YYYY-MM-DD");
        var pay_amount = data[0].pay_amount;
        var pay_detail = data[0].pay_detail;
        var pay_desc_id = data[0].pay_desc_id;
        var pay_bac_id = data[0].pay_bac_id; 
        var pay_status = data[0].pay_status;
        var pay_editor = data[0].pay_editor;

        this.MReportPaymentProvider.update_payment(pay_id, pay_date, pay_receipt, pay_receipt_code, pay_receipt_date, 
          pay_amount, pay_detail, pay_desc_id, pay_bac_id, pay_status, pay_editor).subscribe((response) => {
          //console.log(response);
        });
      }
    });

    myPayEditModal.onDidDismiss(() => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });
  }

  show_alert_del_pay(obj,id){
    const confirm = this.alertCtrl.create({
      title: 'ลบรายการบัญชี',
      message: 'ต้องการลบรายการบัญชี?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }//handler
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.report.forEach((element, index) => {
              if (element == obj) {
                this.report.splice(index,1);
              }//if
            });
            this.MReportPaymentProvider.delete_payment(id).subscribe((response) => {
              console.log(response);
            })
            console.log(id);
            console.log('Agree clicked');
            this.navCtrl.push(PaymentManagePage),{},{animate:false};
          }//handler
        }
      ]
    });
    confirm.present();
  }//show_alert_del


}

interface Report_pay{
  pay_code : string;
  desc_description: string;
  pay_amount: number;
}


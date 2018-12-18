import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MReportIncomeProvider } from '../../../providers/m-report-income/m-report-income';
import { AlertController } from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams, ModalController, ViewController, Refresher  } from 'ionic-angular';
import { MReportIncomeProvider } from '../../../providers/m-report-income/m-report-income';
import * as moment from 'moment';
>>>>>>> origin/Boom

/**
 * Generated class for the IncomeManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income-manage',
  templateUrl: 'income-manage.html',
})
export class IncomeManagePage implements OnInit {
  income_report: Report_inc[];

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,  public MReportIncomeProvider: MReportIncomeProvider, public editModal:ModalController) {
=======
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,  
    public MReportIncomeProvider: MReportIncomeProvider, 
    public editModal:ModalController, 
    public view:ViewController) {
>>>>>>> origin/Boom
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeManagePage');
  }
  ngOnInit() {
    this.MReportIncomeProvider.get_by_inc_date().subscribe((response) => {
      this.income_report = response;
      //console.log(response);
    });
  } 
  // removeObjs_income(objs_i) {
  //   this.income_report.forEach((element, index) => {
  //     if (element == objs_i) {
  //       this.income_report.splice(index, 1);
  //     }
  //   });
  // }

  // Edit show_alert_del
  show_alert_del(objs_i){
    const confirm = this.alertCtrl.create({
      title: 'ลบรายการบัญชี',
      message: 'ยืนยันการลบบัญชีหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.income_report.forEach((element, index) => {
                   if (element == objs_i) {
                     this.income_report.splice(index, 1);
                  }
            });
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  openEditModal(id){
    // let para_data = {
    //   inc_id:id
    // };
    const myModal = this.editModal.create('EditModalPage', {inc_id:id});
    myModal.present();

    myModal.onWillDismiss((data) => {
      //console.log(data);
      
      var inc_id = data[0].inc_id;
      var inc_date = moment(data[0].inc_date).format("YYYY-MM-DD");
      var inc_receipt = data[0].inc_receipt;
      var inc_receipt_code = data[0].inc_receipt_code;
      var inc_receipt_date = moment(data[0].inc_receipt_date).format("YYYY-MM-DD");
      var inc_amount = data[0].inc_amount;
      var inc_detail = data[0].inc_detail;
      var inc_desc_id = data[0].inc_desc_id;
      var inc_bac_id = data[0].inc_bac_id; 
      var inc_status = data[0].inc_status;
      var inc_editor = data[0].inc_editor;

      this.MReportIncomeProvider.update_income(inc_id, inc_date, inc_receipt, inc_receipt_code, inc_receipt_date, 
        inc_amount, inc_detail, inc_desc_id, inc_bac_id, inc_status, inc_editor).subscribe((response) => {
        console.log(response);
      });
    });

    myModal.onDidDismiss(() => {
      location.reload();
    });
  }
}


interface Report_inc{
  inc_code: string;
  desc_description: string;
  inc_amount: number;
}

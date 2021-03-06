import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, AlertController} from 'ionic-angular';
import { MReportIncomeProvider } from '../../../providers/m-report-income/m-report-income';
import { RetrieveDataProvider } from '../../../providers/retrieve-data/retrieve-data';
import * as moment from 'moment';

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
  inc_id = 0;
  inc_obj:report_inc;
  myDate : string;
  date: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,  
    public MReportIncomeProvider: MReportIncomeProvider,
    public RetrieveDataProvider: RetrieveDataProvider,
    public editIncomeModal:ModalController,
    public alertCtrl: AlertController,
    public view:ViewController) {
      
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad IncomeManagePage');
    //console.log(this.RetrieveDataProvider.getData());
    
  }
  ngOnInit() {
    // var date = this.date_para = this.navParams.get('date');
    // console.log(date);
    this.date = this.RetrieveDataProvider.date;
    console.log(this.date);
    this.MReportIncomeProvider.get_by_inc_date(this.date).subscribe((response) => {
      this.income_report = response;
     console.log(response);
    });
    
  } 
  removeObjs(objs) {
    objs.forEach((element, index) => {
      if (element == objs) {
        objs.splice(index, 1);
      }
    });
  }

  // Edit show_alert_del
  // testdate(){
  //  //this.date=this.myDate;
  // // console.log(this.date);
  //   this.MReportIncomeProvider.get_by_inc_date(this.temp).subscribe((response) => {
  //    this.inc_obj = response;
  //    console.log(response);
  //  });
 
  //  }

  openEditModal(id){
    const myModal = this.editIncomeModal.create('EditModalPage', {inc_id:id});
    myModal.present();
  

    myModal.onWillDismiss((data) => {
      //console.log(data);
      if(data){
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
          //console.log(response);
        });
      }
    });

    myModal.onDidDismiss(() => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });
  }

  show_alert_del_inc(obj,id){
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
            this.income_report.forEach((element, index) => {
              if (element == obj) {
                this.income_report.splice(index,1);
              }//if
            });
            this.MReportIncomeProvider.delete_income(id).subscribe((response) => {
              console.log(response);
            })
            console.log(id);
            console.log('Agree clicked');
            this.navCtrl.push(IncomeManagePage),{},{animate:false};
          }//handler
        }
      ]
    });
    confirm.present();
  }//show_alert_del
}


interface Report_inc{
  inc_code: string;
  desc_description: string;
  inc_amount: number;
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

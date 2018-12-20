import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MReportIncomeProvider } from '../../providers/m-report-income/m-report-income';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { ReportDataTranferProvider } from '../../providers/report-data-tranfer/report-data-tranfer';

/**
 * Generated class for the IncomeReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income-report',
  templateUrl: 'income-report.html',
})
export class IncomeReportPage implements OnInit{
  public report_income:Report_income[];
  sum:number = 0;
  bac_id : number ;
  start_date : string;
  end_date : string;
  last_code : string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public MReportIncomeProvider: MReportIncomeProvider,
    public  alertCtrl: AlertController,
    private reportdatatranfer: ReportDataTranferProvider) {
  } //constructor

  ionViewDidLeave(){
    // this.bac_id = this.reportdatatranfer.bac_id;
    // this.start_date = this.reportdatatranfer.start_date;
    // this.end_date = this.reportdatatranfer.end_date;
    // this.MReportIncomeProvider.get_income_by_rangedate_and_bac(this.bac_id,this.start_date,this.end_date);
    // this.MReportPaymentProvider.get_by_pay_bac_id_and_date(this.start_date,this.end_date,this.bac_id);
  }
  
  ionViewDidEnter(){
    // this.bac_id = this.reportdatatranfer.bac_id;
    // this.start_date = this.reportdatatranfer.start_date;
    // this.end_date = this.reportdatatranfer.end_date;
    // this.MReportIncomeProvider.get_income_by_rangedate_and_bac(this.bac_id,this.start_date,this.end_date);
    // this.MReportPaymentProvider.get_by_pay_bac_id_and_date(this.start_date,this.end_date,this.bac_id);
  }

  ionViewWillEnter(){
    // console.log('summerize loaded');
    // this.bac_id = this.reportdatatranfer.bac_id;
    // this.start_date = this.reportdatatranfer.start_date;
    // this.end_date = this.reportdatatranfer.end_date;
    // console.log(this.bac_id);
    // console.log(this.start_date);
    // console.log(this.end_date);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeReportPage');
  }//ionViewDidLoad

  ngOnInit() {
    this.bac_id = this.reportdatatranfer.bac_id;
    this.start_date = this.reportdatatranfer.start_date;
    this.end_date = this.reportdatatranfer.end_date;
    let b_id;
    if(this.bac_id == null){
      b_id = "";
    }else{
      b_id = String(this.bac_id);
    }
    this.MReportIncomeProvider.get_income_by_rangedate_and_bac(b_id,this.start_date,this.end_date).subscribe((response) => {
      this.report_income = response;
      let i:number = 0;
      let y = this.report_income.length;  //can't use .length in for loop
      for(let i = 0;i<y;i++){
        this.sum += +(this.report_income[i]['inc_amount']);
      }//for
    });
  }//ngOnInit 

  convert_date(date:string){
    return moment(date).format('DD/MM/YYYY');
  }//convert_date

  get_sum(){
    // var sum_total = 0;
    // this.report_income.forEach( (element)=> {
    //   sum_total += element.inc_amount;
    // });
    //   console.log(sum_total);
    //   return sum_total;
  }//get_sum

  show_alert_del(obj,id){
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
            this.report_income.forEach((element, index) => {
              if (element == obj) {
                this.report_income.splice(index,1);
              }//if
            });
            console.log(id);
            console.log('Agree clicked');
          }//handler
        }
      ]
    });
    confirm.present();
  }//show_alert_del
}//export class

interface Report_income{
  inc_id : number;
  bacName: string;
  inc_date: Date;
  inc_code : string;
  desc_description: string;
  inc_amount: number;
}//interface
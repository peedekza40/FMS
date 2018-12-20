import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { SummarizeReportPage } from '../summarize-report/summarize-report';
import { IncomeReportPage } from '../income-report/income-report';
import { PaymentReportPage } from '../payment-report/payment-report';
import { ModalssearchPage } from '../modalssearch/modalssearch';
import { ReportDataTranferProvider } from '../../providers/report-data-tranfer/report-data-tranfer';
import * as moment from 'moment';


/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage implements OnInit{
 
  tab1Root = SummarizeReportPage;
  tab2Root = IncomeReportPage;
  tab3Root = PaymentReportPage;

  private bac_id:number;
  private start_date:string;
  private end_date:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController, private reportDataSearch: ReportDataTranferProvider) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.bac_id = this.reportDataSearch.bac_id;
    this.start_date = this.reportDataSearch.start_date;
    this.end_date = this.reportDataSearch.end_date;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
    
  }

  async presentModal() {
    let modal = this.modalCtrl.create(ModalssearchPage);
    modal.onDidDismiss(()=>{
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });
    modal.present();
  }
 
}


import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { SummarizeReportPage } from '../summarize-report/summarize-report';
import { IncomeReportPage } from '../income-report/income-report';
import { PaymentReportPage } from '../payment-report/payment-report';
import { ModalssearchPage } from '../modalssearch/modalssearch';


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


  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  async presentModal() {
    const modal = await this.modalCtrl.create(ModalssearchPage
    );
    return await modal.present();
  }
 
}


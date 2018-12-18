import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController  } from 'ionic-angular';
import { MReportIncomeProvider } from '../../../providers/m-report-income/m-report-income';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,  public MReportIncomeProvider: MReportIncomeProvider, public editModal:ModalController, public view:ViewController) {
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
  removeObjs(objs) {
    objs.forEach((element, index) => {
      if (element == objs) {
        objs.splice(index, 1);
      }
    });
  }

  openEditModal(id){
    // let para_data = {
    //   inc_id:id
    // };
    
    const myModal = this.editModal.create('EditModalPage', {inc_id:id});
    myModal.present();
  }
  

}

interface Report_inc{
  inc_code: string;
  desc_description: string;
  inc_amount: number;
}

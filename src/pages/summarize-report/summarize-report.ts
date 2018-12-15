import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SummarizeReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summarize-report',
  templateUrl: 'summarize-report.html', 
})
export class SummarizeReportPage {

  heroes : Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.heroes = [
                    {
                      "name" : "SuperMan",
                      "company" : "DC"
                    },
                    {
                      "name" : "IronMan",
                      "company" : "Marvel"
                    },
                    {
                      "name" : "CaptainAmerica",
                      "company" : "Marvel"
                    },
                    {
                      "name" : "HULK",
                      "company" : "Marvel"
                    },
                    {
                      "name" : "BatMan",
                      "company" : "DC"
                    },
                    {
                      "name" : "HawkEye",
                      "company" : "Marvel"
                    },
                    {
                      "name" : "WonderWomen",
                      "company" : "DC"
                    },
                    {
                      "name" : "AquaMan",
                      "company" : "DC"
                    },
                    {
                      "name" : "TheFlash",
                      "company" : "DC"
                    },
                    {
                      "name" : "Thor",
                      "company" : "Marvel"
                    },
                    {
                      "name" : "StarLord",
                      "company" : "Marvel"
                    },
                    {
                      "name" : "ScarletWitch",
                      "company" : "Marvel"
                    },
                  ]
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummarizeReportPage');
  }


}

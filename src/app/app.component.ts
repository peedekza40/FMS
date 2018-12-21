import { Component, ViewChild } from '@angular/core';
import { Nav, Platform , ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ReportPage } from '../pages/report/report';
import { TmanagePage } from '../pages/account_manage/tmanage/tmanage'; 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public addModal:ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าหลัก',icon:'home', component: HomePage },
      { title: 'รายงานรายการบัญชี',icon:'desktop', component: ReportPage  },
      { title: 'ตารางลงรายการบัญชี',icon:'paper', component: TmanagePage  }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.show();
      this.statusBar.show();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openAddModal(){
    const addModal = this.addModal.create('AddAccountPage');
    addModal.present();
  }
}

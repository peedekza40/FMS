import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
<<<<<<< HEAD
import { ReportPage } from '../pages/report/report';
import { TmanagePage } from '../pages/tmanage/tmanage';
=======
import { ReportPage } from '../pages/report/report'; 
>>>>>>> 0986bf227a29b34767982837370287cb5a462503
=======
import { ReportPage } from '../pages/report/report';  
>>>>>>> 24b66611efb45d94a7ef1ae787f217a3e47add63

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
<<<<<<< HEAD
      { title: 'Report', component: ReportPage  },
      { title: 'TmanagePage', component: TmanagePage  }
=======
      { title: 'Report', component: ReportPage },
>>>>>>> 0986bf227a29b34767982837370287cb5a462503
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

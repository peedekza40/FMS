import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
import { TmanagePage } from '../pages/tmanage/tmanage';
=======
import { ReportPage } from '../pages/report/report';
>>>>>>> 0986bf227a29b34767982837370287cb5a462503

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
import { SummarizeReportPage } from '../pages/summarize-report/summarize-report';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ReportPage,
<<<<<<< HEAD
    TmanagePage
=======
    SummarizeReportPage,
>>>>>>> 0986bf227a29b34767982837370287cb5a462503
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ReportPage,
<<<<<<< HEAD
    TmanagePage
=======
    SummarizeReportPage,
>>>>>>> 0986bf227a29b34767982837370287cb5a462503
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

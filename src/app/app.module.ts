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
import { IncomeReportPage } from '../pages/income-report/income-report';
import { PaymentReportPage } from '../pages/payment-report/payment-report';

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
<<<<<<< HEAD
>>>>>>> 0986bf227a29b34767982837370287cb5a462503
=======
    IncomeReportPage,
    PaymentReportPage,
>>>>>>> 24b66611efb45d94a7ef1ae787f217a3e47add63
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
<<<<<<< HEAD
>>>>>>> 0986bf227a29b34767982837370287cb5a462503
=======
    IncomeReportPage,
    PaymentReportPage,
>>>>>>> 24b66611efb45d94a7ef1ae787f217a3e47add63
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

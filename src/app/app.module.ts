import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TmanagePage } from '../pages/tmanage/tmanage'; 
import { ReportPage } from '../pages/report/report';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
import { SummarizeReportPage } from '../pages/summarize-report/summarize-report';
import { IncomeReportPage } from '../pages/income-report/income-report';
import { PaymentReportPage } from '../pages/payment-report/payment-report';
import { ModalssearchPage } from '../pages/modalssearch/modalssearch';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ReportPage,
    TmanagePage,
    SummarizeReportPage,
    IncomeReportPage,
    PaymentReportPage,
    ModalssearchPage
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
    TmanagePage,
    SummarizeReportPage,
    IncomeReportPage,
    PaymentReportPage,
    ModalssearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

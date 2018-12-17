import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

/*------------------------------pages------------------------------*/
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TmanagePage } from '../pages/account_manage/tmanage/tmanage'; 
import { ReportPage } from '../pages/report/report';
import { SummarizeReportPage } from '../pages/summarize-report/summarize-report';
import { IncomeReportPage } from '../pages/income-report/income-report';
import { PaymentReportPage } from '../pages/payment-report/payment-report';
import { IncomeManagePage } from '../pages/account_manage/income-manage/income-manage';
/*------------------------------providers------------------------------*/
import { MReportIncomeProvider } from '../providers/m-report-income/m-report-income';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReportPage,
    TmanagePage,
    SummarizeReportPage,
    IncomeReportPage,
    PaymentReportPage,
    IncomeManagePage
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
    ReportPage,
    TmanagePage,
    SummarizeReportPage,
    IncomeReportPage,
    PaymentReportPage,
    IncomeManagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MReportIncomeProvider
  ]
})
export class AppModule {}

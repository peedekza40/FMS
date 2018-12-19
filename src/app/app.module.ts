import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/*------------------------------pages------------------------------*/
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TmanagePage } from '../pages/account_manage/tmanage/tmanage'; 
import { AddAccountPage } from '../pages/account_manage/add-account/add-account'; 
import { ReportPage } from '../pages/report/report';
import { SummarizeReportPage } from '../pages/summarize-report/summarize-report';
import { IncomeReportPage } from '../pages/income-report/income-report';
import { PaymentReportPage } from '../pages/payment-report/payment-report';
import { IncomeManagePage } from '../pages/account_manage/income-manage/income-manage';
import { PaymentManagePage } from '../pages/account_manage/payment-manage/payment-manage';
/*------------------------------providers------------------------------*/
import { MReportIncomeProvider } from '../providers/m-report-income/m-report-income';
import { MReportPaymentProvider } from '../providers/m-report-payment/m-report-payment'; 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MDescriptionProvider } from '../providers/m-description/m-description';
import { MBankaccountProvider } from '../providers/m-bankaccount/m-bankaccount';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReportPage,
    TmanagePage,
    SummarizeReportPage,
    IncomeReportPage,
    PaymentReportPage,
    IncomeManagePage,
    PaymentManagePage,
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
    IncomeManagePage,
    PaymentManagePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MReportIncomeProvider,
    MDescriptionProvider,
    MBankaccountProvider,
    MReportPaymentProvider
  ]
})
export class AppModule {}

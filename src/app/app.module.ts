import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/*------------------------------pages------------------------------*/
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TmanagePage } from '../pages/account_manage/tmanage/tmanage'; 
import { ReportPage } from '../pages/report/report';
import { SummarizeReportPage } from '../pages/summarize-report/summarize-report';
import { IncomeReportPage } from '../pages/income-report/income-report';
import { PaymentReportPage } from '../pages/payment-report/payment-report';
import { IncomeManagePage } from '../pages/account_manage/income-manage/income-manage';
import { PaymentManagePage } from '../pages/account_manage/payment-manage/payment-manage';
import { AddIncomePage } from '../pages/account_manage/add-account/add-income/add-income';
import { AddPaymentPage } from '../pages/account_manage/add-account/add-payment/add-payment';
/*------------------------------providers------------------------------*/
import { MReportIncomeProvider } from '../providers/m-report-income/m-report-income';
import { StatusBar } from '@ionic-native/status-bar';
import { MReportPaymentProvider } from '../providers/m-report-payment/m-report-payment';
import { ModalssearchPage } from '../pages/modalssearch/modalssearch';
import { ReportDataTranferProvider } from '../providers/report-data-tranfer/report-data-tranfer';
import { MBankaccountProvider } from '../providers/m-bankaccount/m-bankaccount';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MDescriptionProvider } from '../providers/m-description/m-description';
import { RetrieveDataProvider } from '../providers/retrieve-data/retrieve-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReportPage,
    TmanagePage,
    SummarizeReportPage,
    IncomeReportPage,
    PaymentReportPage,
    ModalssearchPage,
    IncomeManagePage,
    PaymentManagePage,
    AddIncomePage,
    AddPaymentPage
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
    ModalssearchPage,
    IncomeManagePage,
    PaymentManagePage,
    AddIncomePage,
    AddPaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MReportIncomeProvider,
    ReportDataTranferProvider,
    MBankaccountProvider,
    MDescriptionProvider,
    MReportPaymentProvider,
    RetrieveDataProvider
  ]
})
export class AppModule {}

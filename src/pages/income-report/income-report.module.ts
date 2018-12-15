import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomeReportPage } from './income-report';

@NgModule({
  declarations: [
    IncomeReportPage,
  ],
  imports: [
    IonicPageModule.forChild(IncomeReportPage),
  ],
})
export class IncomeReportPageModule {}

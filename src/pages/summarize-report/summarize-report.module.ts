import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SummarizeReportPage } from './summarize-report';

@NgModule({
  declarations: [
    SummarizeReportPage, 
  ],
  imports: [
    IonicPageModule.forChild(SummarizeReportPage),
  ],
})
export class SummarizeReportPageModule {}
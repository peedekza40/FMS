import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomeManagePage } from './income-manage';

@NgModule({
  declarations: [
    IncomeManagePage,
  ],
  imports: [
    IonicPageModule.forChild(IncomeManagePage),
  ],
})
export class IncomeManagePageModule {}

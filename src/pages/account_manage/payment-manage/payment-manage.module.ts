import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentManagePage } from './payment-manage';

@NgModule({
  declarations: [
    PaymentManagePage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentManagePage),
  ],
})
export class PaymentManagePageModule {}

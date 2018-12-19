import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPaymentModalPage } from './edit-payment-modal';

@NgModule({
  declarations: [
    EditPaymentModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPaymentModalPage),
  ],
})
export class EditPaymentModalPageModule {}

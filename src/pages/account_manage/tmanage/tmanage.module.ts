import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TmanagePage } from './tmanage';

@NgModule({
  declarations: [
    TmanagePage,
  ],
  imports: [
    IonicPageModule.forChild(TmanagePage),
  ],
})
export class TmanagePageModule {}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteNewPage } from './cliente-new';

@NgModule({
  declarations: [
    ClienteNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteNewPage),
  ],
})
export class ClienteNewPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoSavePage } from './produto-save';

@NgModule({
  declarations: [
    ProdutoSavePage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoSavePage),
  ],
})
export class ProdutoSavePageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VendaProvider } from '../../../providers/venda/venda';

/**
 * Generated class for the VendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venda',
  templateUrl: 'venda.html',
})
export class VendaPage {

  public vendas = [];

  constructor(public vendaProvider: VendaProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.vendaListAll();
  }

  ionViewDidLoad() {
    
  }

  public vendaListAll(){
    return this.vendaProvider.listAll().subscribe(response => this.vendas = response);
  }

}

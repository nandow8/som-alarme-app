import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrcamentoProvider } from '../../../providers/orcamento/orcamento';

/**
 * Generated class for the OrcamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orcamento',
  templateUrl: 'orcamento.html',
})
export class OrcamentoPage {

  public orcamentos = [];

  constructor(public orcamentoProvider: OrcamentoProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.orcamentoListAll();
  }

  ionViewDidLoad() {
    
  }

  public orcamentoListAll(){
    return this.orcamentoProvider.listAll().subscribe(response => this.orcamentos = response);
  }

}

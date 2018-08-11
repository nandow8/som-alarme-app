import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../../providers/produto/produto';

/**
 * Generated class for the ProdutoDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-details',
  templateUrl: 'produto-details.html',
})
export class ProdutoDetailsPage {

  produto_id = "";
  produtoDetail = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtoProvider: ProdutoProvider) {
    this.produto_id = this.navParams.get("id"); 
    var id = this.produto_id;
    this.listDetail(id);
  }

  ionViewDidLoad() {
    
  }

  public listDetail(id){
    return this.produtoProvider.listDetails(id).subscribe(response => this.produtoDetail = response);

  }

}
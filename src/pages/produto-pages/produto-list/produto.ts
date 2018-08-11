import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../../providers/produto/produto';


@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
  providers: [ProdutoProvider]
})
export class ProdutoPage {

  public produtos = [];

  constructor(public produtoProvider: ProdutoProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.produtosListAll();
  }

  ionViewDidLoad() {
    console.log(this.produtoProvider.url);
  }

  public produtosListAll(){
    return this.produtoProvider.listAll().subscribe(response => this.produtos = response);
  }

  toProdutoDetails(produto_id){
    console.log(produto_id);
    return this.navCtrl.push('ProdutoDetailsPage', {id: produto_id});
  }

}

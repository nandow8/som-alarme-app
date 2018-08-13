import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';

/**
 * Generated class for the ProdutoSavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-save',
  templateUrl: 'produto-save.html',
})
export class ProdutoSavePage {

  produto = {
    id: "",
    nome: "",
    preco: "",
    marca: "",
    quantidade: ""
  }

  constructor(public navParams: NavParams, private view: ViewController, public produtoProvider: ProdutoProvider) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    
    this.produto = data; 
    console.log(this.produto)
 
  }

  saveOrUpdateForm(){
    if(this.produto.id == ""){
      this.produtoProvider.salvar(this.produto).subscribe(response => this.closeModal());
    }else{
      this.produtoProvider.editar(this.produto).subscribe(response => this.closeModal());
    }
  }
 



  closeModal(){
    
    this.view.dismiss();
  }

}

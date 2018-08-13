import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProdutoProvider } from '../../../providers/produto/produto';


@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
  providers: [ProdutoProvider]
})
export class ProdutoPage {

  public produtos = [];

  constructor(public produtoProvider: ProdutoProvider,public navCtrl: NavController, public navParams: NavParams,
  public modal: ModalController) {
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
 

    openModalSaveorEdit(id, nome, marca, preco, quantidade){
      const myData = {
        id: id,
        nome: nome,
        preco: preco,
        marca: marca,
        quantidade: quantidade
      }
      const myModal = this.modal.create('ProdutoSavePage', {data: myData});

      myModal.onDidDismiss(() => {
        this.produtosListAll();
      });

      myModal.present();
    }

}

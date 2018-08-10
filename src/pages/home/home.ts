import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('myButton', {read: ElementRef}) myButton;

  constructor(public navCtrl: NavController, public renderer: Renderer) {

  }

  toLoginPage(){
    this.navCtrl.push('LoginPage');
  }

  toVendasPage(){
    this.navCtrl.push('VendaPage');
  }
  toProdutosPage(){
    this.navCtrl.push('ProdutoPage');
  }
  toOrcamentosPage(){
    this.navCtrl.push('OrcamentoPage');
  }
  toClientesPage(){
    this.navCtrl.push('ClientePage');
  }
 

}

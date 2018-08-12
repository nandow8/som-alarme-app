import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteProvider } from '../../../providers/cliente/cliente';


@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
  providers: [ClienteProvider]
})
export class ClientePage {

  public clientes = [];

  constructor(private clienteProvider: ClienteProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.clientesListAll();
    
  }

  ionViewDidLoad() {
    
  }

  public clientesListAll(){
    this.clienteProvider.listAll().subscribe(response => this.clientes = response);
  }

  toClienteDetails(clienteid){
    return this.navCtrl.push('ClienteDetailsPage', {id: clienteid});
  }
 
  toClienteNew(){
    return this.navCtrl.push('ClienteNewPage');
  }
  
}

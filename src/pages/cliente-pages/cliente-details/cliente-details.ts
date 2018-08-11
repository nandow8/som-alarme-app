import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteProvider } from '../../../providers/cliente/cliente';

/**
 * Generated class for the ClienteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-details',
  templateUrl: 'cliente-details.html',
  providers: [ClienteProvider]
})
export class ClienteDetailsPage {

  clientid = "";
  clienteDetail = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteProvider: ClienteProvider) {
    this.clientid = this.navParams.get("id"); 
    var id = this.clientid;
    this.listDetail(id);
  }

  ionViewDidLoad() {
    
  }

  public listDetail(id){
    return this.clienteProvider.listDetails(id).subscribe(response => this.clienteDetail = response);

  }

}

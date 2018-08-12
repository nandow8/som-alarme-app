import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteProvider } from '../../../providers/cliente/cliente';
import { MessagesProvider } from '../../../providers/messages/messages';

/**
 * Generated class for the ClienteNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-new',
  templateUrl: 'cliente-new.html',
  providers: [ClienteProvider, MessagesProvider]
})
export class ClienteNewPage {

  
  public cliente = {"nome": "", "telefone": ""};

  constructor(
    private messageProvider: MessagesProvider, private clienteProvider: ClienteProvider, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteNewPage');
  }

  public clientesSave(){
    this.clienteProvider.save(this.cliente).subscribe(response => "save");
    this.messageProvider.presentToast('Cliente cadastrado no sistema com sucesso!', 'toastSuccess');
    return this.navCtrl.push('ClientePage');
  }

   

}

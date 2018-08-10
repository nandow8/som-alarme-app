import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  backgrounds = [
    'assets/imgs/bomber.jpg',
    'assets/imgs/intro.jpg',
    'assets/imgs/intro2.jpg',
    'assets/imgs/intro3.jpg',
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert() {
    const prompt = this.alertCtrl.create({
      title: 'Bem vindo.',
      message: "Digite o usuário e senha para logar",
      cssClass: 'alertCustomCss',
      inputs: [
        {
          name: 'Usuário',
          placeholder: 'Usuário'
        },
        {
          name: 'Senha',
          placeholder: 'Senha',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Logar',
          handler: data => {
            this.navCtrl.push('HomePage');
          }
        }
      ]
    });
    prompt.present();
  }

}

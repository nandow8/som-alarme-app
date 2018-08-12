import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class MessagesProvider {

  constructor(public http: HttpClient, private toastCtrl: ToastController) {
  }

  presentToast(showMessage, toastDangerOrSuccess) {
    let toast = this.toastCtrl.create({
      message: showMessage,
      duration: 2000,
      position: 'middle',
      cssClass: toastDangerOrSuccess
    });
  
    toast.present();
  }

}

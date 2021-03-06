import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClienteProvider } from '../providers/cliente/cliente';
import { ProdutoProvider } from '../providers/produto/produto';
import { OrcamentoProvider } from '../providers/orcamento/orcamento';
import { VendaProvider } from '../providers/venda/venda';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { MessagesProvider } from '../providers/messages/messages';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    ClienteProvider,
    ProdutoProvider,
    OrcamentoProvider,
    VendaProvider,
    MessagesProvider
  ]
})
export class AppModule {}

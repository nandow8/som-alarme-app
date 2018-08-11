import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_BASE } from '../../app/url_base';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the VendaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VendaProvider {

  public url = URL_BASE + "/vendas";

  constructor(public http: HttpClient) {
    
  }

  public listAll():Observable<any>{
    return this.http.get(this.url);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_BASE } from '../../app/url_base';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteProvider {

  public url = URL_BASE + "/clientes";

  constructor(public http: HttpClient) {
    
  }

  public listAll():Observable<any>{
    return this.http.get(this.url);
  }

  public listDetails(clientId):Observable<any>{
    return this.http.get(this.url + "/" + clientId)
  }

}

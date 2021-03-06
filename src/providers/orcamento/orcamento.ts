import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_BASE } from '../../app/url_base';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the OrcamentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrcamentoProvider {

  public url = URL_BASE + "/orcamentos";

  constructor(public http: HttpClient) {
     
  }

  public listAll():Observable<any>{
    return this.http.get(this.url);
  }

}

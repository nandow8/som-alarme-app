import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_BASE } from '../../app/url_base';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoProvider {

  public url = URL_BASE + "/produtos";

  constructor(public http: HttpClient) {}

  public listAll():Observable<any>{
    return this.http.get(this.url);
  }

  public listDetails(produto_id):Observable<any>{
    return this.http.get(this.url + "/" + produto_id)
  }

  public editar(usuario):Observable<any>{
      return this.http.put(this.url + "/" + usuario.id, usuario);
     }

     public salvar(usuario):Observable<any>{
       return this.http.post(this.url, usuario);
     }
     

}

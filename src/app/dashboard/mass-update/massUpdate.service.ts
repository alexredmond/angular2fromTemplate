import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { MassUpdateReportSearchRequest } from './report-search/massUpdateReportSearchRequest';

@Injectable()
export class MassUpdateService {
  private _serverUrl = 'http://pccwd-987f302:9080/MerchantServices/rest/massUpdate/search';

  constructor(private _http: Http) { } 

  //    getProducts(): Observable<IProduct[]> {
  //        return this._http.get(this._productUrl)
  //            .map((response: Response) => <IProduct[]> response.json())
  //            .do(data => console.log('All: ' +  JSON.stringify(data)))
  //            .catch(this.handleError);
  //    }
  //
  //    getProduct(id: number): Observable<IProduct> {
  //        return this.getProducts()
  //            .map((products: IProduct[]) => products.find(p => p.productId === id));
  //    }
  //

 massUpdateSearchRequest (massUpdateReportSearchRequest: MassUpdateReportSearchRequest): Observable<MassUpdateReportSearchRequest> {
    let headers = new Headers();
     headers.append('Content-Type', 'application/json' ); 
     headers.append('Access-Control-Allow-Origin', '*' ); 
     headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS' ); 
     headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token' ); 
    



    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(massUpdateReportSearchRequest);

    return this._http.post(this._serverUrl, body, options)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }


      private handleError(error: Response) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          console.error(error);
          return Observable.throw(error.json().error || 'Server error');
      }




}

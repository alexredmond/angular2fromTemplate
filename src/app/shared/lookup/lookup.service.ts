import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Lookup } from './lookup';

@Injectable()
export class LookupService {
  private _productUrl = 'api/products/products.json';

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
  //    private handleError(error: Response) {
  //        // in a real world app, we may send the server to some remote logging infrastructure
  //        // instead of just logging it to the console
  //        console.error(error);
  //        return Observable.throw(error.json().error || 'Server error');
  //    }
  getLookupByCode(lookupList: Lookup[], code: string): Lookup {
//     angular.forEach(lookupList, function(value, key){
//         
//           console.log(value +"username is thomas"+key);
//         });
    return lookupList[2];
  }
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { MassUpdateReportSearchRequest } from './report-search/massUpdateReportSearchRequest';
import { MassUpdateReportSearchResponse } from './report-search/massUpdateReportSearchResponse';
import { MassUpdateReportDetail } from './report-detail/massUpdateReportDetail';
import { Config } from '../../shared/properties/config';
import { UtilService } from '../../shared/utils/util.service'; 

@Injectable()
export class MassUpdateService {

  constructor(private _http: Http, private _config: Config, private _utilService: UtilService) {
  }


  massUpdateSearchRequest(massUpdateReportSearchRequest: MassUpdateReportSearchRequest): Observable<MassUpdateReportSearchResponse> {
    let body = JSON.stringify(massUpdateReportSearchRequest);
    console.log('bodyyyyyyyyyy ' + body);    
    let options =  this._utilService.buildRestHeaders();

    return this._http.post( this._utilService.getRestUrl()+"massUpdate/search", body, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  massUpdateReportDetails(requestId: string): Observable<MassUpdateReportDetail> {

    console.log('rrrrrrrrrrrrrr' + requestId);

    let options =  this._utilService.buildRestHeaders();
    return this._http.get( this._utilService.getRestUrl()+"massUpdate/searchRequestDetails/"+requestId,  options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.status +' '+error.statusText || 'Server error');
  }



}

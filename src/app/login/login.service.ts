import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Config } from '../shared/properties/config';
import { LoginRequest } from './LoginRequest';
import { UtilService } from '../shared/utils/util.service';



@Injectable()
export class LoginService {
  jaasUrl = 'https://dev-himms.eu.global.prv/JaasServices/services/JaasService';
  result: any;

  body: string = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://webservice.services.novaecx.com">
   <soapenv:Header/>
   <soapenv:Body>
      <web:getToken>
         <web:in0>ixkraje</web:in0>
         <web:in1>Ivcia7766!</web:in1>
      </web:getToken>
   </soapenv:Body>
</soapenv:Envelope>`;




  constructor(
    private _http: Http, 
    private _config: Config,
    private _utilService: UtilService
    ) {
  }

 loginSoap(loginRequest: LoginRequest) {
    //http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
    
    let options =  this._utilService.buildRestHeaders();

    return this._http.post(this.jaasUrl, this.body, options)
      .map((response: Response) => {
        let user = response.json();
        
          console.log('storing token:' + JSON.stringify(user));
        
      });
  }


  callSOAP_2(loginRequest: LoginRequest) {




    var headers = new Headers();
    headers.append('Content-Type', 'text/xml');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');


    let options = new RequestOptions({ headers: headers });
    

    this._http.post(this.jaasUrl,      this.body, options)
      // .subscribe(
      //   data => {
        
      //    this.result = data;
      //    console.log('soap result: '+data);
      //   }       
      //    ,
      //   err => console.log("eeeeeeeeeeee: " + err),
      //   () => console.log('Call complete')
      // );

      
      .map((response: Response) => {
        console.log('soap result: '+response);
        let user = response.json();
        if (user && user.token) {
          let tokenValue = JSON.stringify(user.token);
          console.log('storing token:' + tokenValue);
          localStorage.setItem('currentUserToken', tokenValue);
          localStorage.setItem('currentUserName', loginRequest.userName);
        }
      });
  }





  getToken_2(loginRequest: LoginRequest): Observable<string> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');




    let options = new RequestOptions({ headers: headers });
    
    let body = JSON.stringify(loginRequest);
    console.log('bodyyyyyyyyyy ' + body);



    return this._http.post(this.jaasUrl, body, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }



  login(loginRequest: LoginRequest) {
    //http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
    
    let options =  this._utilService.buildRestHeaders();

    return this._http.post(this._utilService.getRestUrl()+'login', JSON.stringify(loginRequest), options)
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token) {
          let tokenValue = JSON.stringify(user.token);
          console.log('storing token:' + tokenValue);
          localStorage.setItem('currentUserToken', tokenValue);
          localStorage.setItem('currentUserName', loginRequest.userName);
        }
      });
  }

  logout() {
    localStorage.clear();
    console.log('Logout. Cleared');
    // localStorage.removeItem('currentUserToken');
    // localStorage.removeItem('EnvironmentProperties');
  }

}

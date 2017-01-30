import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Config } from '../properties/config';

@Injectable()
export class UtilService {

    constructor(private _config: Config) { }

    buildRestHeaders(): RequestOptions {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
        let currentUserToken = JSON.parse(localStorage.getItem('currentUserToken'));
        if (currentUserToken) {
            currentUserToken = currentUserToken.replace(/[^\x20-\x7E]+/g, '');
            headers.append('Authorization', 'Bearer ' + currentUserToken);

            headers.append('ssoToken', currentUserToken);
        }


        // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        // headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        // headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

        let options = new RequestOptions({ headers: headers });
        return options;
    }

    getRestUrl(): string {
        return this._config.get('himmsServer');
    }
}
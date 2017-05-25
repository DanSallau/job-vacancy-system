import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptionsArgs, Headers, BaseRequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServiceBase {

  constructor(private _http: Http) { }

  protected getHeader(sessionId?: string) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });


    const opt: RequestOptionsArgs = {
      headers: headers
    };

    return opt;
  }
  // Get all posts from the API
  getAllVacancies() Observable<any> {
    return this._http.get('/api/vacancies', this.getHeader())
      .map(res => { console.log('Response is ', res); return res.json()});
  }
}
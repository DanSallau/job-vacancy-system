import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptionsArgs, Headers, BaseRequestOptions } from '@angular/http';
import {IJob } from './api.interface';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiService {

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
  getAllVacancies(): Observable<Array<IJob>> {
    return this._http.get('/api/vacancies', this.getHeader())
      .map(res => { return res.json()});
  }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptionsArgs, Headers, BaseRequestOptions } from '@angular/http';
import {IJob, IEmployer } from './api.interface';
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

  searchVacancyByText(text : string) : Observable<Array<IJob>>{
    return this._http.get(`/api/search/${text}`, this.getHeader())
      .map(res => { return res.json()});
  }

  addJob( job:  IJob) : Observable<any> {
    return this._http.post(`/api/createvacancy`,job, this.getHeader())
      .map(res => { return res.json()});
  }

  createEmployer (employer : IEmployer): Observable<IEmployer> {
    
    return this._http.post(`/api/createemployer`,employer, this.getHeader())
      .map(res => { return res.json()});
  }
}
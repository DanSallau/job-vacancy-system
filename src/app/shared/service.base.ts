import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceBase {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllVacancies() {
    return this.http.get('/api/vacancies')
      .map(res => res.json());
  }
}
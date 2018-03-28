import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpConnectionService {

  ROOT_URL = 'http://localhost:8000/';

  constructor() { }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.getToken()
      })
    };
  }

  getToken() {
    return localStorage.getItem('app-token');
  }

}

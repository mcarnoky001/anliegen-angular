import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpConnectionService } from '../services/http-connection.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class UserService {

  readonly EXTENDED_URL = this.httpConnection.ROOT_URL;

  constructor(
    private http: HttpClient,
    private httpConnection: HttpConnectionService
  ) { }

  login(): Observable<any> {
    return this.http.get(`${this.EXTENDED_URL}userbytoken?token=${this.getToken()}`);
  }

  getToken() {
      return localStorage.getItem('app-token');
  }

}

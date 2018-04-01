import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpConnectionService } from '../services/http-connection.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthService {

  readonly EXTENDED_URL = this.httpConnection.ROOT_URL + 'api-token-auth/';
  redirectUrl = '';

  constructor(
    private http: HttpClient,
    private httpConnection: HttpConnectionService
  ) { }

  isLoggedIn () {
    return true;
  }

  login(username, password): Observable<any> {
    let user = { 'username': username, 'password': password };
    return this.http.post(this.EXTENDED_URL, user);
  }

  logout(): void {
    localStorage.setItem('app-token', '');
  }

}

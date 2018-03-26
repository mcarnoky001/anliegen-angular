import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': localStorage.getItem('app-token')
  })
};

@Injectable()
export class AuthService {

  readonly ROOT_URL = 'http://localhost:8000/api-token-auth/';

  constructor(private http: HttpClient) { }

  isLoggedIn () {
    return true;
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username, password): Observable<any> {
    let user = { 'username': username, 'password': password };
    return this.http.post(this.ROOT_URL, user);
  }

  logout(): void {
    localStorage.setItem('app-token', '');
  }

}

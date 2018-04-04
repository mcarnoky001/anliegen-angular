import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router }      from '@angular/router';

import { HttpConnectionService } from '../services/http-connection.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { UserService } from './user.service';


@Injectable()
export class AuthService {

  readonly EXTENDED_URL = this.httpConnection.ROOT_URL + 'api-token-auth/';
  redirectUrl = '';

  constructor(
    private http: HttpClient,
    private httpConnection: HttpConnectionService,
    private userService: UserService,
    private router: Router
  ) { }

  isLoggedIn () {
    let user = this.userService.getUser();
    if(user) { return user.token != '' }
    return false;
  }

  login(username, password) {
    let user = { 'username': username, 'password': password };
    this.http.post(this.EXTENDED_URL, user)
      .subscribe(res => {
        let tokenJSONText = JSON.stringify(res);
        let tokenJSON = JSON.parse(tokenJSONText);
        this.userService.login(tokenJSON.token);
        if (this.isLoggedIn) {
          this.router.navigate([this.redirectUrl]);
        }
    });
  }

  logout(): void {
    localStorage.setItem('app-user', '');
  }

}

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../authentication-module/user.service';

@Injectable()
export class HttpConnectionService {

  ROOT_URL = 'http://localhost:8000/';

  constructor(private userService: UserService) { }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.getToken()
      })
    };
  }

  getToken() {
    let token = this.userService.getToken();
    return token;
  }

}

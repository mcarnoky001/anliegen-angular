import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Skill } from '../models/skill.model';

import { HttpConnectionService } from '../services/http-connection.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {


  readonly EXTENDED_URL = this.httpConnection.ROOT_URL + 'users';

  constructor(
    private http: HttpClient,
    private httpConnection: HttpConnectionService
  ) { }

  getUsers(searchQuery: String): Observable<any> {
    let url = this.EXTENDED_URL + '?q=' + searchQuery;
    return this.http.get(url);
  }


  

}

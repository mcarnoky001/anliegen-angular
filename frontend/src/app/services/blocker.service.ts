import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpConnectionService } from './http-connection.service';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class BlockerService {

  readonly EXTENDED_URL = this.httpConnection.ROOT_URL + 'blockers';

  constructor(
    private http: HttpClient,
    private httpConnection: HttpConnectionService
  ) { }

  getBlockers(): Observable<any> {
    return this.http.get(this.EXTENDED_URL);
  }

}

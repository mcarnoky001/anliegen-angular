import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../models/task.model';

import { HttpConnectionService } from './http-connection.service';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserTaskService {

  readonly EXTENDED_URL = this.httpConnection.ROOT_URL + 'usertasks';

  constructor(
    private http: HttpClient,
    private httpConnection: HttpConnectionService
  ) { }

  getOpenUserTasks(): Observable<any> {
    const url = `${this.EXTENDED_URL}/?status=0`;
    return this.http.get(url, this.httpConnection.getHttpOptions());
  }
  
  getNewTask() {
    const url = `http://localhost:8000/newtask`;
    return this.http.get(url, this.httpConnection.getHttpOptions());
  }

  getCompletedUserTasks(): Observable<any> {
    const url = `${this.EXTENDED_URL}/?status=1`;
    return this.http.get(url, this.httpConnection.getHttpOptions());
  }

  getBlockedUserTasks(): Observable<any> {
    const url = `${this.EXTENDED_URL}/?status=2`;
    return this.http.get(url, this.httpConnection.getHttpOptions());
  }


}

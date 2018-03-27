import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../models/task.model';

import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': localStorage.getItem('app-token')
  })
};

@Injectable()
export class UserTaskService {

  readonly ROOT_URL = 'http://localhost:8000/usertasks';

  constructor(private http: HttpClient) { }

  getOpenUserTasks(): Observable<any> {
    const url = `${this.ROOT_URL}/?status=0`;
    return this.http.get(url, httpOptions);
  }

  getCompletedUserTasks(): Observable<any> {
    const url = `${this.ROOT_URL}/?status=1`;
    return this.http.get(url, httpOptions);
  }

  getBlockedUserTasks(): Observable<any> {
    const url = `${this.ROOT_URL}/?status=2`;
    return this.http.get(url, httpOptions);
  }

}

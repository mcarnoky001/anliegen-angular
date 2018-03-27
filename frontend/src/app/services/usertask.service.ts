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

  getUserCompletedTasks(): Observable<any> {
    const url = `${this.ROOT_URL}/1/`;
    return this.http.get(url, httpOptions);
  }

  getCurrentUserTask(): Observable<any> {
    const url = `${this.ROOT_URL}/?status=0/`;
    return this.http.get(url, httpOptions);
  }

  getCurrentUserTasks(): Observable<any> {
    const url = `${this.ROOT_URL}`;
    return this.http.get(this.ROOT_URL, httpOptions);
  }

}

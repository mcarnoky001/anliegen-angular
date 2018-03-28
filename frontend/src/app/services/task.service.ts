import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../models/task.model';

import { HttpConnectionService } from './http-connection.service';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class TaskService {

  readonly EXTENDED_URL = this.httpConnection.ROOT_URL + 'tasks';

  constructor(
    private http: HttpClient,
    private httpConnection: HttpConnectionService
  ) { }

  saveTask(data: Task): Observable<{}> {
    return this.http.post(this.EXTENDED_URL + '/', data, this.httpConnection.getHttpOptions());
  }

  blockTask(data: Task) {
    data.status = 2;
    const url = `${this.EXTENDED_URL}/${data.pk}/`;
    return this.http.put(url, data, this.httpConnection.getHttpOptions());
  }

  getTasks(searchQuery: String): Observable<any> {
    return this.http.get(this.EXTENDED_URL + '?q=' + searchQuery);
  }

  getTask(id: number): Observable<any> {
    const url = `${this.EXTENDED_URL}/${id}`;
    return this.http.get(url, this.httpConnection.getHttpOptions());
  }

  deleteTask(id: number): Observable<{}> {
    const url = `${this.EXTENDED_URL}/${id}`;
    return this.http.delete(url, this.httpConnection.getHttpOptions());
  }

  updateTask(data: Task) {
    const url = `${this.EXTENDED_URL}/${data.pk}/`;
    return this.http.put(url, data, this.httpConnection.getHttpOptions());
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subtask } from '../models/subtask.model';

import { HttpConnectionService } from './http-connection.service';

import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': localStorage.getItem('app-token')
  })
};

@Injectable()
export class SubtaskService {

  readonly EXTENDED_URL = this.httpConnection.ROOT_URL + 'subtasks';

  constructor(
    private http: HttpClient,
    private httpConnection: HttpConnectionService
  ) { }

  saveSubtask(data: Subtask): Observable<{}> {
    if(data.name != '' && data.description != '') {
      return this.http.post(this.EXTENDED_URL + '/', data, this.httpConnection.getHttpOptions());
    }
  }

  getSubtasks(searchQuery: String): Observable<any> {
    return this.http.get(this.EXTENDED_URL + '?q=' + searchQuery);
  }

  getSubtaskByTaskId(id: number): Observable<any> {
    return this.http.get(`${this.EXTENDED_URL}?id=${id}`);
  }

  deleteSubtask(id: number): Observable<{}> {
    const url = `${this.EXTENDED_URL}/${id}`;
    return this.http.delete(url, this.httpConnection.getHttpOptions());
  }

  updateSubtask(data: Subtask) {
    const url = `${this.EXTENDED_URL}/${data.pk}/`;
    return this.http.put(url, data, this.httpConnection.getHttpOptions());
  }

}

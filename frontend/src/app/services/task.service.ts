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
export class TaskService {

  readonly ROOT_URL = 'http://localhost:8000/tasks';

  constructor(private http: HttpClient) { }

  saveTask(data: Task): Observable<{}> {
    return this.http.post(this.ROOT_URL + '/', data, httpOptions);
  }

  getTasks(searchQuery: String): Observable<any> {
    return this.http.get(this.ROOT_URL + '?q=' + searchQuery);
  }

  getTask(id: number): Observable<any> {
    const url = `${this.ROOT_URL}/${id}`;
    return this.http.get(url, httpOptions);
  }

  deleteTask(id: number): Observable<{}> {
    const url = `${this.ROOT_URL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  updateTask(data: Task) {
    const url = `${this.ROOT_URL}/${data.pk}/`;
    return this.http.put(url, data, httpOptions);
  }

}

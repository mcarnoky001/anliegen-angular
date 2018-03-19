import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task } from './models/task.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class TaskService {

  readonly ROOT_URL = 'http://localhost:8000/tasks';

  constructor(private http: HttpClient) { }

  saveTask(data: Task): Observable<{}> {
    if(data.name != '' && data.description != '' && data.contractId != 0) {
      return this.http.post(this.ROOT_URL + '/', data, httpOptions);
    }
  }

  getTasks(searchQuery: String): Observable<{}> {
    return this.http.get(this.ROOT_URL + '?q=' + searchQuery);
  }

  deleteTask(id: number): Observable<{}> {
    const url = `${this.ROOT_URL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  updateTask(data: Task) {
    console.log(data);
    const url = `${this.ROOT_URL}/${1}/`;
    return this.http.put(url, data, httpOptions);
  }

}

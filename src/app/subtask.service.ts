import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subtask } from './models/subtask.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class SubtaskService {

  readonly ROOT_URL = 'http://localhost:8000/subtasks';

  constructor(private http: HttpClient) { }

  saveSubtask(data: Subtask): Observable<{}> {
    if(data.name != '' && data.description != '') {
      return this.http.post(this.ROOT_URL + '/', data, httpOptions);
    }
  }

  getSubtasks(searchQuery: String): Observable<any> {
    return this.http.get(this.ROOT_URL + '?q=' + searchQuery);
  }

  getSubtaskByTaskId(id: number): Observable<any> {
    return this.http.get(`${this.ROOT_URL}?id=${id}`);
  }

  deleteSubtask(id: number): Observable<{}> {
    const url = `${this.ROOT_URL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  updateSubtask(data: Subtask) {
    const url = `${this.ROOT_URL}/${data.pk}/`;
    return this.http.put(url, data, httpOptions);
  }

}

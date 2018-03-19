import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Skill } from './models/skill.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class SkillService {

  readonly ROOT_URL = 'http://localhost:8000/skills';

  constructor(private http: HttpClient) { }

  saveSkill(data: Skill): Observable<{}> {
    if(data.name != '') {
      return this.http.post(this.ROOT_URL + '/', data, httpOptions);
    }
  }

  getSkills(searchQuery: String): Observable<{}> {
    return this.http.get(this.ROOT_URL + '?q=' + searchQuery);
  }

  deleteSkill(id: number): Observable<{}> {
    const url = `${this.ROOT_URL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  updateSkill(data: Skill) {
    const url = `${this.ROOT_URL}/${data.pk}/`;
    return this.http.put(url, data, httpOptions);
  }

}

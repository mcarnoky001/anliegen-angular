import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Skill } from '../models/skill.model';

import { HttpConnectionService } from './http-connection.service';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class SkillService {

  readonly EXTENDED_URL = this.httpConnection.ROOT_URL + 'skills';

  constructor(
    private http: HttpClient,
    private httpConnection: HttpConnectionService
  ) { }

  saveSkill(data: Skill): Observable<{}> {
    if(data.name != '') {
      return this.http.post(this.EXTENDED_URL + '/', data, this.httpConnection.getHttpOptions());
    }
  }

  userSkillCreate(user, skill) {
    let url = this.httpConnection.ROOT_URL + `userskillcreate?user=${user}&skill=${skill}`;
    return this.http.get(url);    
  }

  userSkillDelete(user, skill) {
    let url = this.httpConnection.ROOT_URL + `userskilldelete?user=${user}&skill=${skill}`;
    return this.http.get(url);    
  }

  getSkills(searchQuery: String): Observable<{}> {
    return this.http.get(this.EXTENDED_URL + '?q=' + searchQuery);
  }

  deleteSkill(id: number): Observable<{}> {
    const url = `${this.EXTENDED_URL}/${id}`;
    return this.http.delete(url, this.httpConnection.getHttpOptions());
  }

  getSkillById(id) {
    return this.http.get(this.EXTENDED_URL + '?id=' + id);
  }

  updateSkill(data: Skill) {
    const url = `${this.EXTENDED_URL}/${data.pk}/`;
    return this.http.put(url, data, this.httpConnection.getHttpOptions());
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpConnectionService } from '../services/http-connection.service';

import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class UserService {

  readonly ROOT_URL = 'http://localhost:8000/';

  constructor(
    private http: HttpClient
  ) { }

  login(token) {
    this.http.get(`${this.ROOT_URL}userbytoken?token=${token}`)
        .subscribe(res => {
            let user = res[0];
            let userObj = new User();
            userObj.username = user.fields.username;
            userObj.pk = user.pk;
            userObj.token = token;
            localStorage.setItem('app-user', JSON.stringify(userObj));           
            this.getSkillsForUser(userObj.pk)
            .subscribe(res => {
                this.saveSkills(res);               
            });
        });
  }

  saveSkills(res) {
    let user = this.getUser();
    user.skills = [];
    res.forEach(element => {
        console.log(element);
        user.skills.push(element.fields.name);
    });
    this.saveUser(user);
  }

  getSkillsForUser(id) {
    let url = this.ROOT_URL + 'userskills?id=' + id;
    return this.http.get(url);
  }

  getUser() {
      let user: any;
      let userString = localStorage.getItem('app-user');
      if(userString != '') { user = JSON.parse(userString) }
      return user;
  }

  saveUser(user) {
    localStorage.setItem('app-user', JSON.stringify(user));
  }

  getToken() {
    let user = this.getUser();
    return user.token;
  }

}

import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-management-users',
  templateUrl: './management-users.component.html',
  styleUrls: ['./management-users.component.css']
})
export class ManagementUsersComponent implements OnInit {

  users: Observable<any>;
  searchQuery: string = '';

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers(this.searchQuery)
      .subscribe(res => this.users = res)
  }

}

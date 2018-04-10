import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { UsersService } from '../users.service';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-users',
  templateUrl: './management-users.component.html',
  styleUrls: ['./management-users.component.css']
})
export class ManagementUsersComponent implements OnInit {

  users: Observable<any>;
  searchQuery: string = '';

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  changeSearch(val) {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers(this.searchQuery)
      .subscribe(res => this.users = res)
  }

  selectUser(id: any) {
    this.router.navigate(['management/user', { id: id }]);
  }

}

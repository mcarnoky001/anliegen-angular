import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.css']
})
export class ManagementUserComponent implements OnInit {

  user: any;
  selectedId: number;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {    
      this.selectedId = this.route.snapshot.params['id'];  
      this.getUser();
  }

  getUser() {
    return this.usersService.getUser(this.selectedId)
      .subscribe(res => this.user = res);
  }

}

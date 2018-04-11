import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UsersService } from '../users.service';
import { SkillService } from '../../services/skill.service';
import { UserService } from '../../authentication-module/user.service';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.css']
})
export class ManagementUserComponent implements OnInit {

  user: any;
  selectedId: number;
  skills: any;
  userSkills: any;

  constructor(
    private route: ActivatedRoute, 
    private usersService: UsersService,
    private skillService: SkillService,
    private userService: UserService
  ) { }

  ngOnInit() {    
      this.selectedId = this.route.snapshot.params['id'];  
      this.getUser();
      this.getSkills();
  }

  getUser() {
    this.usersService.getUser(this.selectedId)
      .subscribe(res => {
        this.user = res;
        this.getSkillsForUser();
      });
  }

  getSkillsForUser() {
    this.userService.getSkillsForUser(this.user.pk)
      .subscribe(res => {
        this.userSkills = res       
      });
  }

  getSkills() {
    this.skillService.getSkills('')
      .subscribe(res => {
        this.skills = res;
      }); 
  }

  userSkillCreate(skill) {
    this.skillService.userSkillCreate(this.user.pk, skill)
      .subscribe(res => {    
        this.getSkillsForUser();
      });
  }

  userSkillDelete(skill) {
    this.skillService.userSkillDelete(this.user.pk, skill)
      .subscribe(res => this.getSkillsForUser());
  }

}

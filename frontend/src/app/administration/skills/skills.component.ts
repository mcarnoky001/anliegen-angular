import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Skill } from '../../models/skill.model';
import { SkillService } from '../../services/skill.service';

import { Observable } from 'rxjs/Observable';
declare var $:any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillService]
})
export class SkillsComponent implements OnInit {

  searchQuery: String = '';

  constructor(
    private router: Router,
    private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }
  currentSkill: Skill;
  skills: Observable<any>;

  getSkills(): void {
    this.skills = this.skillService.getSkills(this.searchQuery);
  }

  deleteSkill(id: number): void {
    this.skillService.deleteSkill(id)
      .subscribe(res => this.getSkills());
  }

  updateSkill(skill): void {
    this.skillService.updateSkill(skill)
      .subscribe(res => this.getSkills());
  }

  editSkill(skill): void {
    this.currentSkill = skill;
    $('.ui.modal.edit')
      .modal('show');
  }

  newSkill(): void {
    this.currentSkill = new Skill(0, 'CSS');
    $('.ui.modal.new')
      .modal('show');
  }

  saveSkill(skill) {
    this.skillService.saveSkill(skill)
      .subscribe(res => this.getSkills());;
  }
}

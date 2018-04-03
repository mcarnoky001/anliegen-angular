import { Component, OnInit, Input, OnChanges ,SimpleChanges} from '@angular/core';

import { Task } from '../../models/task.model';
import { Subtask } from '../../models/Subtask.model';
import { SubtaskService } from '../../services/subtask.service';

import { Observable } from 'rxjs/Observable';
import { SkillService } from '../../services/skill.service';
declare var $:any;

@Component({
  selector: 'app-subtask-table',
  templateUrl: './subtask-table.component.html',
  styleUrls: ['./subtask-table.component.css'],
  providers: [SubtaskService, SkillService]
})
export class SubtaskTableComponent implements OnInit {

  searchQuery: String = '';
  subtasks : Observable<Subtask[]>;
  skills: any[];
  constructor(private subtaskService: SubtaskService, private skillService: SkillService) { }

  ngOnInit() {
  	this.getSubTasks();
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.task){
      this.getSubTasks();
    }
  }

  @Input() task: Task;

  getSubTasks(): void {
    this.subtaskService.getSubtaskByTaskId(this.task.pk)
      .subscribe(res => {
        this.subtasks = res;
        this.subtasks.forEach(el => this.getSkills(el));
      });
  }

  tasks: Observable<any>;

  clickTableRow(task){

  }

  getSkills(subtask) {
    this.subtaskService.getSkillsForSubtask(subtask.pk)
      .subscribe(res => {
        let skills = res;
        this.appendSkills(skills, subtask);
      });
  }

  appendSkills(skillsJSON, subtask) {
    subtask.skills = []
    skillsJSON.forEach(element => {
      subtask.skills.push(element.fields.name);
    });
  }

}


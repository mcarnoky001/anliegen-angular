import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { UserTaskService } from '../../services/usertask.service';

import { Observable } from 'rxjs/Observable';
declare var $:any;

@Component({
  selector: 'app-finalized-tasks-cleark',
  templateUrl: './finalized-tasks-cleark.component.html',
  styleUrls: ['./finalized-tasks-cleark.component.css'],
  providers: [TaskService, UserTaskService]
})
export class FinalizedTasksClearkComponent implements OnInit {
	searchQuery: String = '';
  constructor(
    private taskService: TaskService,
    private userTaskService: UserTaskService
  ) { }

  ngOnInit() {
  	this.getTasks();
  }

  currentTask: Task;
  taskSelected: Boolean=false;

  getTasks(): void {
    this.tasks = this.userTaskService.getCompletedUserTasks();
  }

  tasks: Observable<any>;

  clickTableRow(task){
  	this.currentTask = task;
  }

}

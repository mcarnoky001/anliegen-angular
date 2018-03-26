import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

import { Observable } from 'rxjs/Observable';
declare var $:any;

@Component({
  selector: 'app-finalized-tasks-cleark',
  templateUrl: './finalized-tasks-cleark.component.html',
  styleUrls: ['./finalized-tasks-cleark.component.css'],
  providers: [TaskService]
})
export class FinalizedTasksClearkComponent implements OnInit {
	searchQuery: String = '';
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  	this.getTasks();
  }

  currentTask: Task;
  taskSelected: Boolean=false;

  getTasks(): void {
    this.tasks = this.taskService.getTasks(this.searchQuery);
  }

  tasks: Observable<any>;

  clickTableRow(task){
    this.taskSelected = true;
  	this.currentTask = task;
  }

}

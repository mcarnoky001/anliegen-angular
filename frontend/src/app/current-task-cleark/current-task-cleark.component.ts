import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-current-task-cleark',
  templateUrl: './current-task-cleark.component.html',
  styleUrls: ['./current-task-cleark.component.css'],
  providers: [TaskService]
})
export class CurrentTaskClearkComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  	this.getTasks();
  }

  currentTask: Task;
  taskSelected: Boolean=false;

  getTasks(): void {
    this.tasks = this.taskService.getTasks('');
  }

  tasks: Observable<any>;

  clickTableRow(task){
    this.taskSelected = true;
  	this.currentTask = task;
  }

}

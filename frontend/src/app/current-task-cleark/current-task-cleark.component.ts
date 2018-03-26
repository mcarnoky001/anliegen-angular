import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

import { Observable } from 'rxjs/Observable';

declare var $:any;

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

  tasks: Task[];
  currentTask: Task;
  taskSelected: Boolean=false;

  getTasks(): void {
    this.taskService.getCurrentUserTasks()
      .subscribe(res => this.tasks = res);
  }



  clickTableRow(task){
    this.taskSelected = true;
  	this.currentTask = task;
  }

  copyContractNumber() {
    
  }

  saveTask(task) {
    this.taskService.updateTask(task)
      .subscribe(res => {
        this.getTasks();
        console.log(res);
        
      });
  }

}
